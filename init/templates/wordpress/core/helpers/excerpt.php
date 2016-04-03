<?php

/**
 * Custom excerpt for content or title.
 *
 * Usage: <?php echo theme_custom_excerpt('excerpt', value); ?>
 *
 * @param  string $type  Sets excerpt or title.
 * @param  int    $limit Sets the length of excerpt.
 *
 * @return string       Return the excerpt.
 */

function theme_custom_excerpt($type = 'excerpt', $limit = 40) {
	$limit = (int) $limit;

	// Set excerpt type.
	switch ($type) {
		case 'title':
			$excerpt = get_the_title();
			break;

		default :
			$excerpt = get_the_excerpt();
			break;
	}

	return wp_trim_words($excerpt, $limit);
}

if ( ! function_exists( 'theme_excerpt_more' ) && ! is_admin() ) {

	/**
	 * Replaces "[...]" (appended to automatically generated excerpts) with ... and a 'Continue reading' link.
	 *
	 *
	 * @return string 'Continue reading' link prepended with an ellipsis.
	 */
	function theme_excerpt_more( $more ) {
		$link = sprintf( '<a href="%1$s" class="more-link">%2$s</a>',
			esc_url( get_permalink( get_the_ID() ) ),
			/* translators: %s: Name of current post */
			sprintf( __( 'Continue reading %s', THEME_TEXT_DOMAIN ), '<span class="screen-reader-text">' . get_the_title( get_the_ID() ) . '</span>' )
			);
		return ' &hellip; ' . $link;
	}
	add_filter( 'excerpt_more', 'theme_excerpt_more' );

}
