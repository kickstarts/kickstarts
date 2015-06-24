#!/bin/bash

# USAGE: bash all.sh

# Install Dependencies
npm install && bower install

# Generate Project Structure
grunt mount
