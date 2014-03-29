<?php
/**
 * The template for displaying all page contents.
 *
 * @package Project Name
 */
?>

<?php while (have_posts()) : the_post(); ?>
    <article <?php post_class(); ?>>
        <header class="row">
            <h3 class="text-upper pull-left"><?php the_title(); ?></h3>
            <a href="javascript: history.back();" class="pull-right btn btn-info btn-small text-upper" style="margin-top: 16px;">voltar</a>
        </header>
        <?php the_content(); ?>
    </article>
<?php endwhile; ?>
