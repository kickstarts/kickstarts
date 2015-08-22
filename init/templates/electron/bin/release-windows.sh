#!/usr/bin/env bash

electron-packager ./release $npm_package_productName-$npm_package_productVersion --prune --asar --platform=win32 --arch=x64 --version=0.28.3 --icon=./assets/images/icon.png | zip $npm_package_productName-$npm_package_productVersion.exe
