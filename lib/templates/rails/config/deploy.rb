#!/bin/ruby

server = "host"
upload_path = "www/folder/public_html/"

system "rsync -avze 'ssh -p 22' public/ #{server}:#{upload_path}"
