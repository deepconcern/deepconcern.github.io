#!/usr/bin/env sh

set -eux

NODE_ENV=production npx webpack --progress --config webpack.prod.js
