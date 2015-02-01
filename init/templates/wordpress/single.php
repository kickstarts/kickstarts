<?php
/**
 * The template for displaying all single posts.
 *
 * @package Project Name
 */

get_header(); ?>

    <section class="">
        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <?php

            endwhile; else :

            // If no content, include the "No posts found" template.
            get_template_part('includes/content', 'none');

            endif;

        ?>
    </section>

<?php get_footer(); ?>
