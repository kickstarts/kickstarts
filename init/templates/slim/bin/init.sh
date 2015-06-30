#!/usr/bin/env bash

composer install
cd src
npm i && grunt
