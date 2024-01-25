#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
gid add -A
git commit -m 'New Deployment'
git push -f git@github.com:DavidXploidz/online_store.git master:gh-pages

cd -
