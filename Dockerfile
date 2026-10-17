FROM node:22-bookworm-slim AS frontend
WORKDIR /build/frontend
COPY frontend/package.json frontend/package-lock.json ./
RUN npm ci
COPY frontend/ ./
RUN npm run build

FROM python:3.12-slim-bookworm
ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    CUTLINE_DATA_DIR=/var/data/cutline \
    CUTLINE_REQUIRE_AUTH=1
WORKDIR /app
RUN sed -i 's|http://deb.debian.org|https://deb.debian.org|g' /etc/apt/sources.list.d/debian.sources \
    && apt-get update \
    && apt-get install -y --no-install-recommends ffmpeg fonts-dejavu-core libgomp1 libportaudio2 ca-certificates \
    && rm -rf /var/lib/apt/lists/*
# yt-dlp uses Node to evaluate YouTube's JavaScript challenges.
COPY --from=frontend /usr/local/bin/node /usr/local/bin/node
COPY requirements.lock.txt ./
RUN pip install --no-cache-dir -r requirements.lock.txt && pip check
COPY backend/ ./backend/
COPY --from=frontend /build/frontend/dist/ ./frontend/dist/
RUN mkdir -p /var/data/cutline
EXPOSE 8000
# Keep one process: the job queue is currently in memory, with one processing worker.
CMD ["sh", "-c", "exec python -m uvicorn backend.app:app --host 0.0.0.0 --port \"${PORT:-8000}\" --workers 1 --lifespan on"]
