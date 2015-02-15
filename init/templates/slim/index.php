<?php

require 'vendor/autoload.php';



// ==========================================
// INSTANTIATION
// ==========================================

$app = new \Slim\Slim(array(
    'mode'            => 'development',
    'templates.path'  => 'app/views',
    'view'            => new \Slim\Views\Twig()
));



// ==========================================
// APP SETTINGS
// ==========================================

require_once('app/config/core.php');
require_once('app/config/app.php');



// ==========================================
// ROUTES
// ==========================================

require_once('app/routes.php');



// ==========================================
// ERROR HANDLER
// ==========================================

$app->error(function(Exception $e) use ($app) {

    $error = new stdClass();
    $error->message = $e->getMessage();
    $error->file = $e->getFile();
    $error->line = $e->getLine();

    echo "{'error':" . json_encode($error) . "}";

});



// ==========================================
// RUN APP
// ==========================================

$app->run();
