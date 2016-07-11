<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till .main div
 *
 * @package Project Name
 */

if (WP_ENV === 'production') {
    if (!is_user_logged_in()) {
        wp_redirect('/wait', 302);
        exit;
    }
}

?>

<!DOCTYPE html>
<html class="no-js" <?php language_attributes(); ?> <?php theme_html_tag_schema(); ?>>
<head>

    <title><?php wp_title('|', true, 'right'); ?></title>

    <meta charset="<?php bloginfo('charset'); ?>" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex,nofollow">
    <meta name="google-site-verification" content="<?php echo GOOGLE_VERIFICATION; ?>" />

    <link type="text/plain" rel="author" href="humans.txt" />
    <link rel="profile" href="http://gmpg.org/xfn/11" />
    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />

    <!-- Facebook OpenGraph -->
    <meta property="og:title" content="<?php bloginfo('name'); ?>">
    <meta property="og:description" content="<?php bloginfo('description'); ?>">
    <meta property="og:image" content=".jpg"/>
    <meta property="og:url" content="<?php echo get_permalink($post->ID); ?>"/>
    <meta name="twitter:card" content="summary_large_image"/>

    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="57x57" href="<?php echo WP_IMAGE_URL; ?>/icons/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="<?php echo WP_IMAGE_URL; ?>/icons/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="<?php echo WP_IMAGE_URL; ?>/icons/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="<?php echo WP_IMAGE_URL; ?>/icons/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="<?php echo WP_IMAGE_URL; ?>/icons/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="<?php echo WP_IMAGE_URL; ?>/icons/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="<?php echo WP_IMAGE_URL; ?>/icons/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="<?php echo WP_IMAGE_URL; ?>/icons/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="<?php echo WP_IMAGE_URL; ?>/icons/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192" href="<?php echo WP_IMAGE_URL; ?>/icons/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo WP_IMAGE_URL; ?>/icons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="<?php echo WP_IMAGE_URL; ?>/icons/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo WP_IMAGE_URL; ?>/icons/favicon-16x16.png">
    <link rel="manifest" href="<?php echo WP_IMAGE_URL; ?>/icons/manifest.json">

    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="<?php echo WP_IMAGE_URL; ?>/icons/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">

    <?php wp_head(); ?>

</head>
<body <?php body_class(); ?>>

    <!--[if lte IE 9]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->

    <header class="header">

    </header><!-- .header -->

    <main class="main">
