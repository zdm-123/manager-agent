#!/usr/bin/env bash
# 查看 Manager Web 运行状态
set -uo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PID_FILE="$ROOT/run/manager-web.pid"
PORT="${1:-8501}"

if [[ -f "$PID_FILE" ]] && kill -0 "$(cat "$PID_FILE")" 2>/dev/null; then
  echo "运行中: PID $(cat "$PID_FILE")"
else
  echo "未运行（无有效 PID）"
fi

code=$(curl -sS -o /dev/null -w '%{http_code}' -m 5 "http://127.0.0.1:$PORT/" 2>/dev/null || echo 000)
echo "HTTP http://127.0.0.1:$PORT/ -> $code"
