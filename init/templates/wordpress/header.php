<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till .main div
 *
 * @package Project Name
 */

?>

<!DOCTYPE html>
<html class="no-js" <?php language_attributes(); ?> <?php theme_html_tag_schema(); ?>>
<head>

    <title><?php wp_title('|', true, 'right'); ?></title>

    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link type="text/plain" rel="author" href="humans.txt" />
    <meta name="google-site-verification" content="<?php echo GOOGLE_VERIFICATION; ?>" />
    <link rel="profile" href="http://gmpg.org/xfn/11" />
    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
    <link rel="shortcut icon" href="<?php echo WP_IMAGE_URL ?>/favicon.png">

    <?php wp_head(); ?>

</head>
<body <?php body_class(); ?>>

    <!--[if lte IE 9]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->

    <header class="header">

    </header><!-- .header -->

    <div class="main">
