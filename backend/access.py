"""Optional password gate for a private, shared hosted workspace."""
import base64
import binascii
import hmac
import os

from starlette.responses import PlainTextResponse


class PrivateSiteAuth:
    def __init__(self, app):
        self.app = app
        self.username = os.environ.get('CUTLINE_SITE_USERNAME', '')
        self.password = os.environ.get('CUTLINE_SITE_PASSWORD', '')
        required = os.environ.get('CUTLINE_REQUIRE_AUTH', '0') == '1'
        if (required or self.username or self.password) and not (self.username and self.password):
            raise RuntimeError('Set both CUTLINE_SITE_USERNAME and CUTLINE_SITE_PASSWORD before starting hosted Cutline.')
        self.enabled = bool(self.username and self.password)

    def authorized(self, headers):
        try:
            scheme, value = headers.get(b'authorization', b'').split(None, 1)
            if scheme.lower() != b'basic':
                return False
            username, password = base64.b64decode(value, validate=True).decode('utf-8').split(':', 1)
            # Compare both values, including non-ASCII passwords, without short-circuiting.
            user_ok = hmac.compare_digest(username.encode('utf-8'), self.username.encode('utf-8'))
            password_ok = hmac.compare_digest(password.encode('utf-8'), self.password.encode('utf-8'))
            return user_ok & password_ok
        except (ValueError, UnicodeError, binascii.Error):
            return False

    async def __call__(self, scope, receive, send):
        if scope['type'] != 'http' or not self.enabled:
            return await self.app(scope, receive, send)
        # Hosting probes need only this small status response, never project or media data.
        health = scope['path'] == '/api/health' and scope['method'] in {'GET', 'HEAD'}
        if not health and not self.authorized(dict(scope['headers'])):
            response = PlainTextResponse('Sign in to this private Cutline workspace.', status_code=401,
                headers={'WWW-Authenticate': 'Basic realm="Cutline Studio", charset="UTF-8"',
                         'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex, nofollow'})
            return await response(scope, receive, send)
        return await self.app(scope, receive, send)
