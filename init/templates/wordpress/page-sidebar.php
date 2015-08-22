<?php
/**
 * Template Name: With Sidebar
 *
 * The template for displaying pages with sidebar.
 *
 * @package Project Name
 */

get_header(); ?>

<section class="content">
	<main class="main-content">

		<?php
				if (have_posts()) :
					// Start the Loop.
					while (have_posts()) : the_post();

						/*
						 * Include the post format-specific template for the content. If you want to
						 * use this in a child theme, then include a file called called content-___.php
						 * (where ___ is the post format) and that will be used instead.
						 */
						get_template_part('content', get_post_format());

					endwhile;

					// Post navigation.
					theme_paging_nav();

				else :
					// If no content, include the "No posts found" template.
					get_template_part('content', 'none');

				endif;
			?>

	</main> <!-- .content -->
</section> <!-- .main-content -->

<?php
get_sidebar();
get_footer();
