#!/usr/bin/env bash

electron --debug=5858 your/app
open http://127.0.0.1:8080/debug?ws=127.0.0.1:8080&port=5858
