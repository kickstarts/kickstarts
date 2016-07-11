#!/usr/bin/env bash

# -- ABOUT THIS PROGRAM: -------------------------
#
# Author:       Vitor Britto
# Version:      1.0.0
# Description:  Update all node modules for latest versions
#
#
# -- USAGE: --------------------------------------
#
# $ bash update.sh
#
# ------------------------------------------------


# ------------------------------------------------
# | IMPORT SOURCE                                |
# ------------------------------------------------

source ./helpers/usage
source ./helpers/utils


# ------------------------------------------------
# | INITIALIZE PROGRAM                           |
# ------------------------------------------------

echo "Updating Dependencies..."
npm-check-updates -u && rm -rf node_modules && npm i
echo "All Done!"
