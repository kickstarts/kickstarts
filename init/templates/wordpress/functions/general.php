<?php
/**
 * General Functions and definitions
 *
 * Sets up the theme and provides some helper functions, which are used in the
 * theme as custom template tags. Others are attached to action and filter
 * hooks in WordPress to change core functionality.
 *
 * For more information on hooks, actions, and filters,
 * see http://codex.wordpress.org/Plugin_API
 *
 * @package Project Name
 */


/**
 * Set content width.
 */
if (!isset($content_width)) {
    $content_width = 960;
}


/**
 * Load scripts.
 */
function enqueue_scripts() {

    wp_enqueue_style('theme-style', get_stylesheet_uri(), array(), null, 'all');

    wp_deregister_script('jquery');

    wp_register_script('jquery.min', WP_SCRIPT_URL . '/vendors/jquery-1.10.2.min.js', array(), null, true);
    wp_enqueue_script('jquery.min');

    wp_register_script('modernizr.min', WP_SCRIPT_URL . '/vendors/modernizr-2.6.2.min.js', array(), null, false);
    wp_enqueue_script('modernizr.min');

    wp_register_script('main.min', WP_SCRIPT_URL . '/main.min.js', array(), null, true);
    wp_enqueue_script('main.min');
}

add_action('wp_enqueue_scripts', 'enqueue_scripts');


/**
 * Load stylesheets.
 */
function enqueue_stylesheet($uri, $dir) {
    return $dir . '/assets/styles/style.min.css';
}

add_filter('stylesheet_uri', 'enqueue_stylesheet', 10, 2);


/**
 * Flush Rewrite Rules for new CPTs and Taxonomies.
 */
function flush_rewrite() {
    flush_rewrite_rules();
}

add_action('after_switch_theme', 'flush_rewrite');
