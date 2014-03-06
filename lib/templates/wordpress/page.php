<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package Project Name
 */

get_header(); ?>

<?php
    global $pages_with_sidebar;
    if (is_page($pages_with_sidebar)) : ?>

<div class="row box">
    <div class="span2 first">
        <?php get_sidebar(); ?>
    </div>
    <div class="span10 last">
        <?php get_template_part('includes/content', 'page'); ?>
    </div>
</div>

<?php else : ?>

<div class="row box">
    <div class="span12 first">
        <?php get_template_part('includes/content', 'page'); ?>
    </div>
</div>

<?php endif; ?>

<?php get_footer(); ?>
