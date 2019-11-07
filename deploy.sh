#!/usr/bin/env bash
exec 2>&1
set -x

npm install -g @beemo/cli
yarn install --frozen-lockfile --ignore-engines
yarn release
