#!/usr/bin/env bash
# 停止 Manager Web Chatbot
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PID_FILE="$ROOT/run/manager-web.pid"

if [[ ! -f "$PID_FILE" ]]; then
  echo "未找到 PID 文件，服务可能未启动"
  exit 0
fi

PID="$(cat "$PID_FILE")"
if kill -0 "$PID" 2>/dev/null; then
  kill "$PID"
  for _ in $(seq 1 20); do
    kill -0 "$PID" 2>/dev/null || break
    sleep 1
  done
  kill -9 "$PID" 2>/dev/null || true
  echo "已停止 Manager Web (PID $PID)"
else
  echo "进程 $PID 不存在"
fi
rm -f "$PID_FILE"
