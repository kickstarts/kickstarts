#!/bin/bash

# USAGE: bash serve.sh

IP=$(ipconfig getifaddr en1)
PORT=4440

echo "Server started at ${IP}:${PORT}/"
echo "HINT: Press CTRL+C to stop webserver"

sleep 1 && open "${IP}:${PORT}/"
php -S localhost:${PORT}
