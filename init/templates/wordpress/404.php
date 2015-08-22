<?php
/**
 * The template for displaying 404 pages (Not Found).
 *
 * @package Project Name
 */

get_header(); ?>

	<section>
		<main class="main-content">

			<header class="page-header">
				<h1 class="page-title"><?php _e('Not Found', THEME_TEXT_DOMAIN); ?></h1>
			</header><!-- .page-header -->

			<div class="page-content">
				<p><?php _e('It looks like nothing was found at this location. Maybe try a search?', THEME_TEXT_DOMAIN); ?></p>

				<?php get_search_form(); ?>
			</div><!-- .page-content -->

		</main>
	</section>

<?php
get_footer();
