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
