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

    wp_register_script('jquery', WP_SCRIPT_URL . '/vendor/jquery-1.10.2.min.js', array(), null, true);
    wp_enqueue_script('jquery');

    wp_register_script('modernizr', WP_SCRIPT_URL . '/vendor/modernizr-2.6.2.min.js', array(), null, false);
    wp_enqueue_script('modernizr');

    wp_register_script('main', WP_SCRIPT_URL . '/main.min.js', array(), null, true);
    wp_enqueue_script('main');
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


/**
 * Custom Search for categories
 */
// function search_posts_filter($query){
//     if ($query->is_search){
//         $query->set('cat','1,2,3,4');
//     }
//     return $query;
// }
// add_filter('pre_get_posts','search_posts_filter');


/**
 * Add rel attribute to attachment link.
 */

// function add_lightbox_rel($content) {
//     // $permalink = wp_get_attachment_url($post->ID);
//     $content = preg_replace('/<a/', '<a rel="prettyPhoto[gallery]"' , $content, 1);
//     return $content;
// }
// add_filter('wp_get_attachment_link', 'add_lightbox_rel', 10, 6);


/**
 * Custom excerpt for content.
 */
// function excerpt($limit) {
//     $excerpt = explode(' ', get_the_excerpt(), $limit);
//     if (count($excerpt)>=$limit) {
//         array_pop($excerpt);
//         $excerpt = implode(" ",$excerpt).'...';
//     } else {
//         $excerpt = implode(" ",$excerpt);
//     }
//     $excerpt = preg_replace('`\[[^\]]*\]`','',$excerpt);
//     return $excerpt;
// }

// function my_excerpt_length($limit){return 9; }
// add_filter('excerpt_length', 'my_excerpt_length');

/**
 * Add support for Post Formats.
 */
// add_theme_support( 'post-formats', array(
//     'gallery',
//     'video'
// ) );
