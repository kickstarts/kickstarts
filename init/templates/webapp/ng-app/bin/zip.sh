#!/usr/bin/env bash

# -- ABOUT THIS PROGRAM: -------------------------
#
# Author:       Vitor Britto
# Version:      1.0.0
# Description:  Zip all files for sharing
#
#
# -- USAGE: --------------------------------------
#
# $ bash zip.sh
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

zip() {
    local tmpFile="${@%/}.tar"
    tar -cvf "${tmpFile}" --exclude=".DS_Store" "${@}" || return 1

    size=$(
        stat -f"%z" "${tmpFile}" 2> /dev/null; # OS X `stat`
        stat -c"%s" "${tmpFile}" 2> /dev/null # GNU `stat`
    )

    local cmd=""
    if (( size < 52428800 )) && hash zopfli 2> /dev/null; then
        # the .tar file is smaller than 50 MB and Zopfli is available; use it
        cmd="zopfli"
    else
        if hash pigz 2> /dev/null; then
            cmd="pigz"
        else
            cmd="gzip"
        fi
    fi

    echo "Compressing .tar using \`${cmd}\`…"
    "${cmd}" -v "${tmpFile}" || return 1
    [ -f "${tmpFile}" ] && rm "${tmpFile}"
    echo "${tmpFile}.gz successfully created!"
}

# Initialize Program
zip $*
