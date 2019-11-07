#!/usr/bin/env bash
exec 1> command.log 2>&1
set -x

npm install -g @beemo/cli
yarn install --frozen-lockfile --ignore-engines
yarn release
