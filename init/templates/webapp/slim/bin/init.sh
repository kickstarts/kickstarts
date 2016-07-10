#!/usr/bin/env bash

echo "Setting Up Dependencies..."
composer install
cd src
npm i && grunt
