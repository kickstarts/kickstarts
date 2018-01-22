#!/bin/bash

# USAGE: bash deps.sh

echo "Updating Dependencies..."
npm-check-updates -u && rm -rf node_modules && npm i
echo "All Done!"
