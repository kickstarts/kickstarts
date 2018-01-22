#!/usr/bin/env bash


# -- ABOUT THIS PROGRAM: -------------------------------------------------------------------------------------
#
# Author:       Vitor Britto
# Version:      1.0.0
# Description:  description goes here
#
#
# -- INSTRUCTIONS: -------------------------------------------------------------------------------------------
#
# Execute:
#   $ chmod u+x myscript.sh && ./myscript.sh
#
# Options:
#   -h, --help      output program instructions
#   -v, --version   output program version
#
# Alias:
#   alias myalias="bash ~/path/to/script/myscript.sh"
#
# Example:
#   some example goes here
#
# Important:
#   some important note goes here
#
# -- CHANGELOG: ----------------------------------------------------------------------------------------------
#
#   DESCRIPTION:    First release
#   VERSION:        1.0.0
#   DATE:           xx/xx/xxxx
#   AUTHOR:         Vitor Britto
#
# -- TODO & FIXES: -------------------------------------------------------------------------------------------
#
#   - some FIX or TODO here
#
#
# ------------------------------------------------------------------------------------------------------------


# ------------------------------------------------------------------------------
# | VARIABLES                                                                  |
# ------------------------------------------------------------------------------

VERSION="1.0.0"
PROGRAM="myscript"


# ------------------------------------------------------------------------------
# | UTILS                                                                      |
# ------------------------------------------------------------------------------

# Header logging
e_header() {
    printf "$(tput setaf 38)→ %s$(tput sgr0)\n" "$@"
}

# Success logging
e_success() {
    printf "$(tput setaf 76)✔ %s$(tput sgr0)\n" "$@"
}

# Error logging
e_error() {
    printf "$(tput setaf 1)✖ %s$(tput sgr0)\n" "$@"
}

# Warning logging
e_warning() {
    printf "$(tput setaf 3)! %s$(tput sgr0)\n" "$@"
}


# ------------------------------------------------------------------------------
# | MAIN FUNCTIONS                                                             |
# ------------------------------------------------------------------------------

# My Script Help
myscript_help() {

cat <<EOT

------------------------------------------------------------------------------
MYSCRIPT - DESCRIPTION
------------------------------------------------------------------------------

Usage: ./myscript.sh [options]
Example: ./myscript.sh

Options:
    -h, --help      output program instructions
    -v, --version   output program version

Important:
    If you prefer, create an alias: myalias="bash ~/path/to/script/myscript.sh"
    And execute with: myscript


Copyright (c) Vitor Britto
Licensed under the MIT license.

------------------------------------------------------------------------------

EOT

}

# My Script Version
myscript_version() {
    echo "$PROGRAM: v$VERSION"
}

# My Script Start
myscript_start() {
    # your code goes here
}

# ------------------------------------------------------------------------------
# | INITIALIZE PROGRAM                                                         |
# ------------------------------------------------------------------------------

main() {

    if [[ "${1}" == "-h" || "${1}" == "--help" ]]; then
        myscript_help ${1}
        exit
    elif [[ "${1}" == "-v" || "${1}" == "--version" ]]; then
        myscript_version ${1}
        exit
    else
        myscript_start
    fi

}

# Initialize
main $*
