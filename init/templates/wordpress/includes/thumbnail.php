<?php

if ( ! function_exists( 'theme_post_thumbnail' ) ) {
	/**
     * Display post thumbnail.
     *
     * @param  string  $thumb_size     Size of the thumbnail. thumbnail|medium|large|full|$custom
     * @param  string  $thumb_class   Custom HTML classes.
     *
     * @return string         Return the post thumbnail.
     */
     function theme_post_thumbnail($thumb_size, $thumb_class = '') {

        global $post;

        if (has_post_thumbnail()) :
        $image_ID     = get_post_thumbnail_id($post->ID);
        $image_Schema = array( 'itemprop' => 'image' );
        $image_url    = wp_get_attachment_image_src($image_ID, $thumb_size, $image_Schema);
        $image_url    = $image_url[0];

        ?>

        <img src="<?php echo $image_url; ?>" title="<?php the_title(); ?>" class="<?php echo $thumb_class; ?>"/>

        <?php else : ?>

        <img src="<?php echo WP_IMAGE_URL ?>/thumb-default.jpg" title="<?php the_title(); ?>" class="<?php echo $thumb_class; ?>" />

        <?php

        endif;

    }
}
