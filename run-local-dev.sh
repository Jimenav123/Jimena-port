#!/bin/zsh

set -euo pipefail

SCRIPT_DIR=$(cd "$(dirname "$0")" && pwd)
NODE_BIN="/Users/jimenavazquez/Desktop/Code/.tools/node-v24.13.0-darwin-arm64/bin"

export PATH="$NODE_BIN:$PATH"

cd "$SCRIPT_DIR"
exec npm run dev -- --host 127.0.0.1
