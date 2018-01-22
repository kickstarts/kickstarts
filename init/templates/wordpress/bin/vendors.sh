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

NPM_PATH='jspm_modules/npm'
GITHUB_PATH='jspm_modules/github'
VENDORS_PATH='www/assets/scripts/vendors'
BACK_PATH='../../../..'

# ------------------------------------------------------------------------------
# | PROGRAM                                                                    |
# ------------------------------------------------------------------------------

e_header "Seat back a while... this may take several minutes to install."

e_header "Creating vendors directory..."
mkdir -p ./www/assets/scripts/vendors

e_header "Coping Vendors"
cp -rf $NPM_PATH/jquery@2.2.0/dist/jquery.min.js $VENDORS_PATH
cd $GITHUB_PATH/Modernizr/Modernizr@3.3.1 && npm install && grunt build
cp -rf dist/modernizr-build.js $BACK_PATH/$VENDORS_PATH
cd $BACK_PATH/$VENDORS_PATH
mv modernizr-build.js modernizr.min.js
gulp scripts:vendors
rm -rf modernizr-build.js
