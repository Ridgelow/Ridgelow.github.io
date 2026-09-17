#!/usr/bin/env bash
# Build the static site and publish it to the main branch (GitHub Pages).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"

npm run build
touch out/.nojekyll

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT
cp -R out/. "$TMP/"
cd "$TMP"
git init -b main
git add -A
git -c user.email="ridgelow@users.noreply.github.com" -c user.name="Ridgelow" commit -m "Deploy portfolio site"
git remote add origin https://github.com/Ridgelow/Ridgelow.github.io.git
git push -u origin main --force

echo "Deployed. Requesting Pages rebuild…"
gh api repos/Ridgelow/Ridgelow.github.io/pages/builds -X POST >/dev/null
echo "Live at https://ridgelow.github.io/"
