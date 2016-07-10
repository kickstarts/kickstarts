<?php

$core_path    = 'core/';
// $helpers_path = 'core/helpers/';

require $core_path . 'config.php';
// require $core_path . 'functions.php';

// require $helpers_path . 'database.php';

?>

<!DOCTYPE html>
<html class="no-js" lang="pt-BR">
<head>
    <meta charset="utf-8">

    <title><?php echo NAME; ?></title>

    <!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" /><![endif]-->

    <meta name="description" content="<?php echo DESCRIPTION; ?>"/>
    <meta name="keywords" content="<?php echo KEYWORDS; ?>">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex,nofollow">

    <link type="text/plain" rel="author" href="humans.txt" />

    <!-- Facebook OpenGraph -->
    <meta property="og:title" content="<?php echo NAME; ?>">
    <meta property="og:description" content="<?php echo DESCRIPTION; ?>">
    <meta property="og:phone_number" content="">
    <meta property="og:street-address" content="">
    <meta property="og:locality" content="">
    <meta property="og:region" content="">
    <meta property="og:email" content="">

    <!-- Favicon -->
    <link rel="icon" type="image/png" href="<?php echo IMAGE_URL; ?>/favicon.png" sizes="32x32">
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="<?php echo IMAGE_URL; ?>/icons/apple-144.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="<?php echo IMAGE_URL; ?>/icons/apple-114.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="<?php echo IMAGE_URL; ?>/icons/apple-72.png">
    <link rel="apple-touch-icon-precomposed" href="<?php echo IMAGE_URL; ?>/icons/apple-57.png">

    <!-- StyleSheet -->
    <link rel="stylesheet" href="<?php echo STYLE_URL; ?>/main.min.css">

    <!-- Google -->
    <meta name="google-site-verification" content="<?php echo GOOGLE_VERIFICATION; ?>" />
    <script>

      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', '<?php echo GOOGLE_ANALYTICS; ?>', 'auto');
      ga('send', 'pageview');

    </script>

</head>

<body>

    <!--[if lt IE 9]>
    <p class="browserupgrade">Você está utilizando um navegador <strong>obsoleto</strong>. Por favor, <a href="http://browsehappy.com/">atualize o seu navegador</a> para uma melhor experiência neste site.</p>
    <![endif]-->

    <header class="header">

    </header>
