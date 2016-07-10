<?php

// Home
$app->get('/', function() use ($app) {
    $app->render('home.html', array(
        'name' => 'Home'
    ));
});
