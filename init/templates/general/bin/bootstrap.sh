#!/bin/bash

# ------------------------------------------------------------------------------
# | UTILS                                                                      |
# ------------------------------------------------------------------------------

# Header logging
e_header() {
    printf "$(tput setaf 38)→ %s$(tput sgr0)\n" "$@"
}

# ------------------------------------------------------------------------------
# | VARIABLES                                                                  |
# ------------------------------------------------------------------------------

SRC_PATH="jspm_modules/github/twbs/bootstrap-sass@3.3.6/assets/stylesheets/"
DIST_PATH="www/assets/styles"
BACK_PATH="../../../../../.."

# ------------------------------------------------------------------------------
# | PROGRAM                                                                    |
# ------------------------------------------------------------------------------

e_header "Seat back a while... this may take several minutes to install."

e_header "Creating Bootstrap directory..."
mkdir -p $DIST_PATH/bootstrap

e_header "Copying Bootstrap files..."
cd $SRC_PATH
cp -r bootstrap/ $BACK_PATH/$DIST_PATH/bootstrap/
cp -r _bootstrap.scss $BACK_PATH/$DIST_PATH
