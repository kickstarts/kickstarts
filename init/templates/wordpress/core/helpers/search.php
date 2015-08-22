<?php

/**
 * Custom Search.
 */
function remove_pages_from_search() {
    global $wp_post_types;
    $wp_post_types['page']->exclude_from_search = true;

    remove_filter('content_save_pre', 'wp_filter_post_kses');
    remove_filter('excerpt_save_pre', 'wp_filter_post_kses');
    remove_filter('content_filtered_save_pre', 'wp_filter_post_kses');
}
add_action('init', 'remove_pages_from_search');
