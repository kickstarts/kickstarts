<?php
/**
 * Optimization Functions and definitions
 *
 * @package project_name
 */

/**
 * Generates the title of the site optimized for SEO.
 */
function seo_wp_title( $title, $sep ) {
    global $page, $paged;

    if ( is_feed() ) {
        return $title;
    }

    // Add the blog name
    $title .= get_bloginfo( 'name' );

    // Add the blog description for the home/front page.
    $site_description = get_bloginfo( 'description', 'display' );
    if ( $site_description && ( is_home() || is_front_page() ) ){
        $title .= " $sep $site_description";
    }

    // Add a page number if necessary:
    if ( $paged >= 2 || $page >= 2 ) {
        $title .= " $sep " . sprintf( __( 'P&aacute;gina %s', 'odin' ), max( $paged, $page ) );
    }

    return $title;
}

add_filter( 'wp_title', 'seo_wp_title', 10, 2 );

/**
 * Cleanup wp_head().
 */
function head_cleanup() {
    // category feeds.
    // remove_action( 'wp_head', 'feed_links_extra', 3 );
    // post and comment feeds.
    remove_action( 'wp_head', 'feed_links', 2 );
    // EditURI link.
    remove_action( 'wp_head', 'rsd_link' );
    // windows live writer.
    remove_action( 'wp_head', 'wlwmanifest_link' );
    // index link.
    remove_action( 'wp_head', 'index_rel_link' );
    // previous link.
    remove_action( 'wp_head', 'parent_post_rel_link', 10, 0 );
    // start link.
    remove_action( 'wp_head', 'start_post_rel_link', 10, 0 );
    // links for adjacent posts.
    remove_action( 'wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0 );
    // WP version.
    remove_action( 'wp_head', 'wp_generator' );
}

add_action( 'init', 'head_cleanup' );

/**
 * Remove WP version from RSS.
 */
add_filter( 'the_generator', '__return_false' );

/**
 * Remove injected CSS from gallery.
 */
// add_filter( 'use_default_gallery_style', '__return_false' );

/**
 * Add rel="nofollow" and remove rel="category".
 */
function modify_category_rel( $text ) {
    $search = array( 'rel="category"', 'rel="category tag"' );
    $text = str_replace( $search, 'rel="nofollow"', $text );

    return $text;
}

add_filter( 'wp_list_categories', 'modify_category_rel' );
add_filter( 'the_category', 'modify_category_rel' );

/**
 * Add rel="nofollow" and remove rel="tag".
 */
function modify_tag_rel( $taglink ) {
    return str_replace( 'rel="tag">', 'rel="nofollow">', $taglink );
}

add_filter( 'wp_tag_cloud', 'modify_tag_rel' );
add_filter( 'the_tags', 'modify_tag_rel' );

/**
 * Add feed link.
 */
add_theme_support( 'automatic-feed-links' );
