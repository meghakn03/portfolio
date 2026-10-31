#!/bin/sh
set -eu

SCRIPT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
cd "$SCRIPT_DIR"

PORT=8000
SITE_MARKER='BUILDER ACROSS THE STACK'

if [ "${1:-}" = "stop" ]; then
  if [ -f .portfolio-server.pid ] && [ -f .portfolio-server.port ]; then
    PID=$(cat .portfolio-server.pid)
    PORT=$(cat .portfolio-server.port)
    COMMAND=$(ps -p "$PID" -o command= 2>/dev/null || true)
    case "$COMMAND" in
      *"http.server $PORT"*) kill "$PID" 2>/dev/null || true ;;
      *) echo "Saved server process is no longer running." ;;
    esac
    rm -f .portfolio-server.pid .portfolio-server.port
    echo "Portfolio server stopped."
  else
    echo "No portfolio server is running from this launcher."
  fi
  exit 0
fi

while [ "$PORT" -le 8010 ]; do
  if curl --silent --fail "http://127.0.0.1:$PORT/" 2>/dev/null | grep -q "$SITE_MARKER"; then
    break
  fi
  if ! curl --silent --fail "http://127.0.0.1:$PORT/" >/dev/null 2>&1; then
    python3 -m http.server "$PORT" --bind 127.0.0.1 >/tmp/megha-portfolio-server.log 2>&1 &
    PID=$!
    echo "$PID" > .portfolio-server.pid
    echo "$PORT" > .portfolio-server.port
    sleep 1
    if ! curl --silent --fail "http://127.0.0.1:$PORT/" 2>/dev/null | grep -q "$SITE_MARKER"; then
      echo "Could not start the portfolio server on port $PORT. See /tmp/megha-portfolio-server.log" >&2
      exit 1
    fi
    break
  fi
  PORT=$((PORT + 1))
done

if [ "$PORT" -gt 8010 ]; then
  echo "Could not find an available port between 8000 and 8010." >&2
  exit 1
fi

open "http://127.0.0.1:$PORT/"
echo "Portfolio is running at http://127.0.0.1:$PORT/"
