#!/usr/bin/env bash

electron-packager ./ $npm_package_productName-$npm_package_productVersion --out=./release --prune --asar --platform=linux --arch=x64 --version=0.28.3 --icon=./assets/images/icon.png | zip $npm_package_productName-$npm_package_productVersion.app
