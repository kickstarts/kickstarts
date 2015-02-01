<?php
/**
 * The template for displaying Archive pages.
 *
 * Used to display archive-type pages if nothing more specific matches a query.
 * For example, puts together date-based pages if no date.php file exists.
 *
 * If you'd like to further customize these archive views, you may create a
 * new template file for each specific one. For example, Twenty Thirteen
 * already has tag.php for Tag archives, category.php for Category archives,
 * and author.php for Author archives.
 *
 * @link http://codex.wordpress.org/Template_Hierarchy
 *
 * @package Project Name
 */

get_header(); ?>

    <section class="content">
        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <?php

            endwhile; else :

            // If no content, include the "No posts found" template.
            get_template_part('includes/content', 'none');

            endif;

        ?>
    </section>

<?php get_footer(); ?>
