#!/bin/bash

# USAGE: bash scaffold.sh

cd ../assets/styles && mv _bootstrap.scss _modules.scss

mkdir -p app && cd app && touch {_header.scss,_content.scss,_footer.scss}

cd .. && touch {_style.scss,_app.scss}

echo "@import 'bootstrap'; @import 'app';" > _style.scss

echo "@import 'app/header'; @import 'app/content'; @import 'app/footer';" > _app.scss

