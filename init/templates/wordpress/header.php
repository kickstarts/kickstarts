<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till .main div
 *
 * @package Project Name
 */

if (!is_user_logged_in()) {
    $domain = $_SERVER['SERVER_NAME'];
    wp_redirect($domain . '/main', 302);
    exit;
}

?>

<!DOCTYPE html>
<html class="no-js" <?php language_attributes(); ?>>
<head>

<title><?php wp_title('|', true, 'right'); ?></title>

<meta charset="utf-8">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="copyright" content="&copy; Copyright 2015 <?php get_bloginfo('name'); ?>" />
<link type="text/plain" rel="author" href="humans.txt" />
<meta name="keywords" content="" />
<meta name="description" content="<?php get_bloginfo('description'); ?>" />
<meta name="google-site-verification" content="" />
<?php
    if(is_single() || is_page() || is_category() || is_home()) {
        echo '<meta name="robots" content="all,noodp" />';
        echo "\n";
    }
    else if(is_archive()) {
        echo '<meta name="robots" content="noarchive,noodp" />';
        echo "\n";
    }
    else if(is_search() || is_404()) {
        echo '<meta name="robots" content="noindex,noarchive" />';
        echo "\n";
    }
?>

<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />

<link rel="apple-touch-icon-precomposed" sizes="144x144" href="<?php echo WP_IMAGE_URL ?>/apple-144.png">
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="<?php echo WP_IMAGE_URL ?>/apple-114.png">
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="<?php echo WP_IMAGE_URL ?>/apple-72.png">
<link rel="apple-touch-icon-precomposed" href="<?php echo WP_IMAGE_URL ?>/apple-57.png">
<link rel="shortcut icon" href="<?php echo WP_IMAGE_URL ?>/favicon.png">

<?php wp_head(); ?>

<!--[if lt IE 9]>
<script type="text/javascript">
    window.location.href = "http://www.domain.com.br/ie/";
</script>
<![endif]-->

</head>
<body <?php body_class(); ?>>

    <!-- .container -->
    <div class="container">

        <!-- .header -->
        <header class="header">

        </header>
        <!-- /.header -->

        <!-- .main -->
        <main class="main">
