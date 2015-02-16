#!/usr/bin/env bash

cd ..

bundle install
rake migrate
