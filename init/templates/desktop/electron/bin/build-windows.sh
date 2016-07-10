#!/usr/bin/env bash

electron-packager ./ $npm_package_productName --out=./build --prune --asar --platform=win32 --arch=x64 --version=0.28.3 --icon=./assets/images/icon.png
