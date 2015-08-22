<?php

/**
 * Related Posts.
 *
 * Usage:
 * To show related by categories:
 * Add in single.php <?php theme_related_posts(); ?>
 * To show related by tags:
 * Add in single.php <?php theme_related_posts( 'tag' ); ?>
 *
 * @global array $post         WP global post.
 *
 * @param  string $display      Set category or tag.
 * @param  int    $qty          Number of posts to be displayed (default 5).
 * @param  string $title        Set the widget title.
 * @param  bool   $thumb        Enable or disable displaying images.
 * @param  string $post_type    Post type.
 *
 * @return string              Related Posts.
 */
function theme_related_posts( $display = 'category', $qty = 4, $title = '', $thumb = true, $post_type = 'post' ) {
	global $post;

	$show = false;
	$post_qty = (int) $qty;
	! empty( $title ) || $title = __( 'Related Posts', THEME_TEXT_DOMAIN );

	// Creates arguments for WP_Query.
	switch ( $display ) {
		case 'tag':
			$tags = wp_get_post_tags( $post->ID );

			if ( $tags ) {
				// Enables the display.
				$show = true;

				$tag_ids = array();
				foreach ( $tags as $individual_tag ) {
					$tag_ids[] = $individual_tag->term_id;
				}

				$args = array(
					'tag__in' => $tag_ids,
					'post__not_in' => array( $post->ID ),
					'posts_per_page' => $post_qty,
					'post_type' => $post_type,
					'ignore_sticky_posts' => 1
				);
			}
			break;

		default :
			$categories = get_the_category( $post->ID );

			if ( $categories ) {

				// Enables the display.
				$show = true;

				$category_ids = array();
				foreach ( $categories as $individual_category ) {
					$category_ids[] = $individual_category->term_id;
				}

				$args = array(
					'category__in' => $category_ids,
					'post__not_in' => array( $post->ID ),
					'showposts' => $post_qty,
					'post_type' => $post_type,
					'ignore_sticky_posts' => 1,
				);
			}
			break;
	}

	if ( $show ) {

		$related = new WP_Query( $args );
		if ( $related->have_posts() ) {

			$layout = '<div id="related-post" data-ui-component="related-posts">';
			$layout .= '<h3>' . esc_attr( $title ) . '</h3>';
			$layout .= ( $thumb ) ? '<div class="row">' : '<ul>';

			while ( $related->have_posts() ) {
				$related->the_post();

				$layout .= ( $thumb ) ? '<div class="col-md-' . ceil( 12 / $qty ) . '">' : '<li>';

				if ( $thumb ) {
					// Filter to replace the image.
					$image = apply_filters( 'theme_related_posts_thumbnail', get_the_post_thumbnail( get_the_ID(), 'thumbnail' ) );

					$layout .= '<span class="thumb">';
					$layout .= sprintf( '<a href="%s" title="%s" class="thumbnail">%s</a>', get_permalink(), get_the_title(), $image );
					$layout .= '</span>';
				}

				$layout .= '<span class="text">';
				$layout .= sprintf( '<a href="%1$s" title="%2$s">%2$s</a>', get_permalink(), get_the_title() );
				$layout .= '</span>';

				$layout .= ( $thumb ) ? '</div>' : '</li>';
			}

			$layout .= ( $thumb ) ? '</div>' : '</ul>';
			$layout .= '</div>';

			echo $layout;
		}
		wp_reset_postdata();
	}
}
