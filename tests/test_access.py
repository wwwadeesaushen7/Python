import base64

import pytest
from fastapi import FastAPI
from fastapi.testclient import TestClient

from backend.access import PrivateSiteAuth
from backend.app import app


@pytest.fixture
def private_site(monkeypatch):
    monkeypatch.setenv('CUTLINE_REQUIRE_AUTH', '1')
    monkeypatch.setenv('CUTLINE_SITE_USERNAME', 'owner')
    monkeypatch.setenv('CUTLINE_SITE_PASSWORD', 'A private test password!')


def test_local_app_still_works_without_credentials(monkeypatch):
    for key in ('CUTLINE_REQUIRE_AUTH', 'CUTLINE_SITE_USERNAME', 'CUTLINE_SITE_PASSWORD'):
        monkeypatch.delenv(key, raising=False)
    with TestClient(PrivateSiteAuth(app)) as client:
        assert client.get('/api/jobs').status_code == 200


@pytest.mark.parametrize('method,path', [
    ('GET', '/'), ('GET', '/api/jobs'), ('POST', '/api/jobs'),
    ('GET', '/media/' + 'a' * 32 + '/source.mp4'),
    ('GET', '/docs'), ('GET', '/openapi.json'), ('POST', '/api/health'),
])
def test_private_site_blocks_pages_api_and_media(private_site, method, path):
    with TestClient(PrivateSiteAuth(app)) as client:
        response = client.request(method, path)
        assert response.status_code == 401
        assert response.headers['www-authenticate'].startswith('Basic ')
        assert response.headers['cache-control'] == 'no-store'


def test_private_site_accepts_credentials_and_public_health_probe(private_site):
    with TestClient(PrivateSiteAuth(app)) as client:
        assert client.get('/api/health').json()['status'] == 'ok'
        assert client.get('/api/jobs', auth=('owner', 'wrong')).status_code == 401
        assert client.get('/api/jobs', auth=('wrong', 'A private test password!')).status_code == 401
        assert client.get('/api/jobs', auth=('owner', 'A private test password!')).status_code == 200


@pytest.mark.parametrize('header', ['Basic ???', 'Bearer abc', 'Basic', 'Basic bm9jb2xvbg==', 'Basic /w=='])
def test_malformed_credentials_do_not_crash(private_site, header):
    with TestClient(PrivateSiteAuth(app)) as client:
        assert client.get('/api/jobs', headers={'Authorization': header}).status_code == 401


def test_unicode_password_and_colon_supported(monkeypatch):
    monkeypatch.setenv('CUTLINE_SITE_USERNAME', 'owner')
    monkeypatch.setenv('CUTLINE_SITE_PASSWORD', 'hello:ලෝකය')
    site = FastAPI()
    site.add_api_route('/', lambda: {'ok': True})
    credentials = base64.b64encode('owner:hello:ලෝකය'.encode('utf-8')).decode('ascii')
    with TestClient(PrivateSiteAuth(site)) as client:
        assert client.get('/', headers={'Authorization': 'Basic ' + credentials}).status_code == 200


@pytest.mark.parametrize('username,password,required', [('', '', '1'), ('owner', '', '0'), ('', 'password', '0')])
def test_hosted_start_fails_when_credentials_missing(monkeypatch, username, password, required):
    monkeypatch.setenv('CUTLINE_REQUIRE_AUTH', required)
    monkeypatch.setenv('CUTLINE_SITE_USERNAME', username)
    monkeypatch.setenv('CUTLINE_SITE_PASSWORD', password)
    with pytest.raises(RuntimeError, match='Set both'):
        PrivateSiteAuth(app)
