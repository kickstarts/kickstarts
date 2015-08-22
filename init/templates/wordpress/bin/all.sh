#!/bin/bash

# USAGE: bash all.sh

# Install Dependencies
echo "Setting Up Dependencies..."
npm install

# Generate Project Structure
echo "Creating Project Structure..."
grunt install
