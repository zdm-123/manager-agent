# API Deployment

## Install

The API service ships inside the main `manager` package. Install dependencies once:

```bash
uv sync
```

This registers the `manager-api` console script.

## Launch

### Foreground (default)

```bash
manager-api --host 0.0.0.0 --port 8000

# Or via uv
uv run manager-api --host 0.0.0.0 --port 8000
```

### Daemon (background) Mode

Run the API server as a background daemon:

```bash
# Start in background
manager-api --daemon --port 8000

# Check status
manager-api --action status

# Stop
manager-api --action stop

# Restart
manager-api --action restart
```

All daemon commands also work with `uv run`, e.g. `uv run manager-api --daemon --port 8000`.

By default, the PID file is stored at `~/.manager/run/manager-agent-api.pid` and daemon logs are written to `logs/manager-agent-api.log`. You can override these paths:

```bash
manager-api --daemon --pid-file /var/run/manager-api.pid --daemon-log-file /var/log/manager-api.log
```

## CLI arguments

| Flag             | Default                  | Description |
|------------------|--------------------------|-------------|
| `--config`       | (auto-resolved)          | Path to `agent.yml` |
| `--datasource`    | `default`                | Datasource from `agent.yml` |
| `--output-dir`   | `./output`               | Directory for generated artifacts |
| `--log-level`    | `INFO`                   | `DEBUG` / `INFO` / `WARNING` / `ERROR` / `CRITICAL` |
| `--host`         | `127.0.0.1`              | Bind address |
| `--port`         | `8000`                   | Bind port |
| `--reload`       | off                      | Auto-reload on file change (dev only) |
| `--workers`      | `1`                      | Number of uvicorn worker processes |
| `-v`, `--version`| —                        | Print version and exit |
| `--daemon`       | off                      | Run in background as a daemon |
| `--action`       | `start`                  | Daemon action: `start`, `stop`, `restart`, `status` |
| `--pid-file`     | `~/.manager/run/manager-agent-api.pid` | PID file path |
| `--daemon-log-file` | `logs/manager-agent-api.log` | Daemon log file path |

`--reload` and `--workers > 1` are mutually exclusive; the server will warn and fall back to a single worker.
`--daemon` and `--reload` are mutually exclusive.

## Environment variables

| Variable             | Equivalent flag | Notes |
|----------------------|-----------------|-------|
| `MANAGER_CONFIG`       | `--config`      | Empty string triggers default lookup |
| `MANAGER_DATASOURCE`    | `--datasource`   | Defaults to `default` |
| `MANAGER_OUTPUT_DIR`   | `--output-dir`  | Defaults to `./output` |
| `MANAGER_LOG_LEVEL`    | `--log-level`   | Defaults to `INFO` |
| `MANAGER_CORS_ORIGINS` | —               | Comma-separated origins, default `*` |

When `MANAGER_CORS_ORIGINS` is anything other than `*`, the CORS middleware enables `allow_credentials=true`.

## Configuration resolution priority

`manager-api` resolves the agent configuration file in this order:

1. `--config` flag (or `MANAGER_CONFIG`) if explicitly set
2. `./conf/agent.yml` in the current working directory
3. `~/.manager/conf/agent.yml`

This matches the behavior of the `manager` CLI, so you do not need to pass `--config` when using the standard
`~/.manager` install location.

## Built-in endpoints

After startup the following are available regardless of router availability:

| Path             | Description |
|------------------|-------------|
| `GET /`          | Service banner with version pointer |
| `GET /health`    | Health check (no auth required) |
| `GET /docs`      | Swagger UI |
| `GET /openapi.json` | OpenAPI 3 spec |

## Quickstart with curl

```bash
# 1. Start the server
manager-api --port 8000 &

# 2. Health check
curl http://127.0.0.1:8000/health

# 3. List catalogs (identifies as user "alice")
curl -H 'X-Manager-User-Id: alice' \
  'http://127.0.0.1:8000/api/v1/catalog/list'

# 4. Send a streaming chat
curl -N -X POST http://127.0.0.1:8000/api/v1/chat/stream \
  -H 'Content-Type: application/json' \
  -H 'X-Manager-User-Id: alice' \
  -d '{"message": "How many users signed up last week?"}'
```

## Production notes

- Run behind a reverse proxy (nginx/traefik) and terminate TLS upstream.
- Disable response buffering for SSE endpoints on your reverse proxy so events are delivered without delay.
- When running multiple workers, enable sticky sessions at the proxy level so SSE resume requests land on the
  worker that is still holding the task.
