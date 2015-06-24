<?php
/**
 * The template for displaying categories posts.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package Project Name
 */

get_header(); ?>

    <section class="content">
        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <?php

            endwhile; else :

            // If no content, include the "No posts found" template.
            get_template_part('templates/content', 'none');

            endif;

        ?>
    </section>

<?php get_footer(); ?>
