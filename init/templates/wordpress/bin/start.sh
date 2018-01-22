#!/bin/bash

# USAGE: bash start.sh

# Install Dependencies
echo "Setting Up Dependencies..."
npm install

# Generate Project Structure
echo "Creating Project Structure..."
gulp start
