<?php
/**
 * The sidebar containing the secondary widget area, displays on homepage, archives and posts.
 *
 * If no active widgets in this sidebar, it will shows Recent Posts, Archives and Tag Cloud widgets.
 *
 * @package Project Name
 */
?>

<aside class="sidebar">
    <?php
		if (!dynamic_sidebar('main-sidebar')) {
			the_widget('WP_Widget_Recent_Posts', array('number' => 10));
			the_widget('WP_Widget_Archives', array('count' => 0, 'dropdown' => 1));
			the_widget('WP_Widget_Tag_Cloud');
		}
	?>
</aside><!-- .sidebar -->
