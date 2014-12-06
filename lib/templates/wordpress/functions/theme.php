<?php


/**
 * Custom Search for categories
 */
function search_posts_filter($query){
    if ($query->is_search){
        $query->set('cat','1,2,3,4');
    }
    return $query;
}
add_filter('pre_get_posts','search_posts_filter');


/**
 * Add rel attribute to attachment link.
 */
function add_lightbox_rel($content) {
    // $permalink = wp_get_attachment_url($post->ID);
    $content = preg_replace('/<a/', '<a rel="prettyPhoto[gallery]"' , $content, 1);
    return $content;
}
add_filter('wp_get_attachment_link', 'add_lightbox_rel', 10, 6);


/**
 * Add support for Post Formats.
 */
add_theme_support( 'post-formats', array(
    'gallery',
    'video'
) );


/**
 * Gallery Defaults.
 */
function gallery_atts( $out, $pairs, $atts ) {
    $atts = shortcode_atts( array(
      'size' => 'full',
    ), $atts );

    // $out['columns'] = $atts['columns'];
    $out['size'] = $atts['size'];

    return $out;

}
add_filter( 'shortcode_atts_gallery', 'gallery_atts', 10, 3 );


/**
 * Pages Backgrounds
 */
function set_background() {

    if (is_home() || is_404()) {
        echo '[ bg bg-home ]';
    } else if (is_page(array('tarifas', 'reservas', 'blog')) || is_single() || is_category()) {
        echo '[ bg bg-tarifas ]';
    } else if (is_page('contato')) {
        echo '[ bg bg-contato ]';
    }

}


/**
 * Custom excerpt for content.
 */
function custom_content($length) {

    $text = get_the_content();
    if (strlen($text) < $length + 10) return $text; // don't cut if too short

    $break_pos = strpos($text, ' ', $length); // find next space after desired length
    $visible = substr($text, 0, $break_pos);

    return balanceTags($visible) . ' [...]';

}

