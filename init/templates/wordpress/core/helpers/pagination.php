<?php

/**
 * Pagination.
 *
 * @global array $wp_query   Current WP Query.
 * @global array $wp_rewrite URL rewrite rules.
 *
 * @param  int   $mid   Total of items that will show along with the current page.
 * @param  int   $end   Total of items displayed for the last few pages.
 * @param  bool  $show  Show all items.
 * @param  mixed $query Custom query.
 *
 * @return string       Return the pagination.
 */
function theme_pagination($mid = 2, $end = 1, $show = false, $query = null) {

	// Prevent show pagination number if Infinite Scroll of JetPack is active.
	if (!isset($_GET['infinity'])) {

		global $wp_query, $wp_rewrite;

		$total_pages = $wp_query->max_num_pages;

		if (is_object($query) && null != $query) {
			$total_pages = $query->max_num_pages;
		}

		if ($total_pages > 1) {
			$url_base = $wp_rewrite->pagination_base;
			$big = 999999999;

			// Sets the paginate_links arguments.
			$arguments = apply_filters('theme_pagination_args', array(
					'base'      => esc_url_raw(str_replace($big, '%#%', get_pagenum_link($big, false))),
					'format'    => '',
					'current'   => max(1, get_query_var('paged')),
					'total'     => $total_pages,
					'show_all'  => $show,
					'end_size'  => $end,
					'mid_size'  => $mid,
					'type'      => 'list',
					'prev_text' => __('&laquo; Previous', THEME_TEXT_DOMAIN),
					'next_text' => __('Next &raquo;', THEME_TEXT_DOMAIN),
				)
			);

			$pagination = '<div class="pagination-wrap">' . paginate_links($arguments) . '</div>';

			// Prevents duplicate bars in the middle of the url.
			if ($url_base) {
				$pagination = str_replace('//' . $url_base . '/', '/' . $url_base . '/', $pagination);
			}

			return $pagination;
		}
	}
}

if (!function_exists('theme_paging_nav')) {
	/**
     * Display navigation.
     */
	function theme_paging_nav() {
		$mid  = 2;     // Total of items that will show along with the current page.
		$end  = 1;     // Total of items displayed for the last few pages.
		$show = false; // Show all items.

		echo theme_pagination($mid, $end, false);
	}
}
