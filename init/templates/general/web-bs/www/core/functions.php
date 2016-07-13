<?php

function view_state() {
    if (CURRENT_LINK !== 'index.php') {
        echo 'is-hidden';
    }
}
