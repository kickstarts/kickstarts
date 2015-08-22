<?php

if (!function_exists('theme_gallery_lightbox')) {

    /**
     * Post gGallery with lightbox ready for use.
     */
    function theme_gallery_lightbox($post_id) {

        global $post;

        $thumbnail_ID = get_post_thumbnail_id();

        $images = get_children(
            array(
                'post_parent'       => $post_id,
                'post_status'       => 'inherit',
                'post_type'         => 'attachment',
                'post_mime_type'    => 'image',
                'order'             => 'ASC',
                'orderby'           => 'menu_order ID'
            )
        );

        if ($images) :

        ?>

        <ul class="gallery-list" data-action="gallery-<?php the_ID(); ?>" data-ui-component="gallery">

        <?php
        foreach ($images as $attachment_id => $image) :

            if ( $image->ID != $thumbnail_ID ) :

            $img_alt = get_post_meta($attachment_id, '_wp_attachment_image_alt', true); //alt
            if ($img_alt == '') : $img_alt = $img_title; endif;

            $big_array = image_downsize( $image->ID, 'full' );
            $img_url = $big_array[0];

        ?>

            <li class="gallery-item" data-src="<?php echo $image_url ?>" data-html="<div class='gallery-caption'><h4 class='text-inverse'><?php echo the_title(); ?></h4><?php echo the_content(); ?></div>">
                <img src="<?php echo $img_url; ?>" alt="<?php echo $img_alt; ?>" title="<?php echo $img_title; ?>" />
            </li>

            <?php endif; ?>
            <?php endforeach; ?>
        </ul>
        <?php endif;

    }

}
