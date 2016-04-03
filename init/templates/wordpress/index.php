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

<section class="main-content">

    <?php
            if (have_posts()) :
                // Start the Loop.
                while (have_posts()) : the_post();

                    /*
                     * Include the post format-specific template for the content. If you want to
                     * use this in a child theme, then include a file called called content-___.php
                     * (where ___ is the post format) and that will be used instead.
                     */
                    get_template_part('partials/content', get_post_format());

                endwhile;

                // Post navigation.
                theme_paging_nav();

            else :
                // If no content, include the "No posts found" template.
                get_template_part('partials/content', 'none');

            endif;
        ?>

</section><!-- .main-content -->


<?php
get_footer();
