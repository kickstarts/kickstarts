<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package Project Name
 */

get_header(); ?>

    <section class="">
        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <?php

            endwhile; else :

            // If no content, include the "No posts found" template.
            get_template_part('templates/content', 'none');

            endif;

        ?>
    </section>

<?php get_footer(); ?>
