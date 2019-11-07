#!/usr/bin/env bash
exec 2>&1
set -x

npm install -g @beemo/cli 2>&1
yarn install --frozen-lockfile --ignore-engines 2>&1
yarn release 2>&1
