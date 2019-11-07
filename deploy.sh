#!/usr/bin/env bash

npm install -g @beemo/cli 2>&1
yarn install --frozen-lockfile --ignore-engines 2>&1
yarn release 2>&1
