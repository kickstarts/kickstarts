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
    <meta property="og:image" content=".jpg"/>
    <meta property="og:url" content=""/>
    <meta name="twitter:card" content="summary_large_image"/>

    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="57x57" href="<?php echo IMAGE_URL; ?>/icons/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="<?php echo IMAGE_URL; ?>/icons/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="<?php echo IMAGE_URL; ?>/icons/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="<?php echo IMAGE_URL; ?>/icons/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="<?php echo IMAGE_URL; ?>/icons/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="<?php echo IMAGE_URL; ?>/icons/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="<?php echo IMAGE_URL; ?>/icons/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="<?php echo IMAGE_URL; ?>/icons/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="<?php echo IMAGE_URL; ?>/icons/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="<?php echo IMAGE_URL; ?>/icons/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo IMAGE_URL; ?>/icons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="<?php echo IMAGE_URL; ?>/icons/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo IMAGE_URL; ?>/icons/favicon-16x16.png">
    <link rel="manifest" href="<?php echo IMAGE_URL; ?>/icons/manifest.json">

    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="<?php echo IMAGE_URL; ?>/icons/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">

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
