#!/usr/bin/env bash

bundle check
bundle install
rake migrate
