<?php

// ENVIRONMENT
$app->configureMode('production', function() use ($app) {
    $app->config(array(
        'log.enable'    => true,
        'debug'         => false
    ));
});

$app->configureMode('development', function() use ($app) {
    $app->config(array(
        'log.enable'    => false,
        'debug'         => false
    ));
});

// VIEWS
$view = $app->view();
$view->setData(array(
    'App' => array(
        'lang'          => 'pt-BR',
        'title'         => 'App Title',
        'description'   => 'App Description',
        'keywords'      => 'slim, boilerplate, webapp, rest, api',
        'verification'  => ''

    )
));
