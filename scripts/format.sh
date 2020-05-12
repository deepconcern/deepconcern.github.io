#!/usr/bin/env sh

set -eux

npx eslint . --ext .js,.jsx,.mjs,.ts,.tsx --fix
