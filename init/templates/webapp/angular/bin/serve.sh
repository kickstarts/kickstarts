#!/usr/bin/env bash

# -- ABOUT THIS PROGRAM: -------------------------
#
# Author:       Vitor Britto
# Version:      1.0.0
# Description:  description goes here
#
#
# -- USAGE: --------------------------------------
#
# $ bash serve.sh
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

IP=$(ipconfig getifaddr en1)
PORT=4440

echo "Server started at ${IP}:${PORT}/"
echo "HINT: Press CTRL+C to stop webserver"

sleep 1 && open "${IP}:${PORT}/"
php -S localhost:${PORT}
