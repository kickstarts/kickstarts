#!/usr/bin/env bash

# USAGE: bash server.sh

IP=$(ipconfig getifaddr en1)
echo "HINT: Press CTRL+C to stop webserver"
sleep 1 && open "http://${IP}:${PORT}/"
http-server -a ${IP} -p ${PORT}
