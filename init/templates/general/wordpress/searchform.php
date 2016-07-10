<?php
/**
 * The template for displaying search forms.
 *
 * @package Project Name
 */
?>

<form method="get" class="search-form" action="<?php echo esc_url(home_url('/')); ?>">
    <label for="s" class=""><?php _e('Search', THEME_NAME); ?></label>
    <input type="text" value="<?php echo esc_attr(get_search_query()); ?>" name="s" id="s" class="">
    <input type="submit" class="" value="<?php esc_attr_e('Search', THEME_NAME); ?>" />
</form><!-- .search-form -->
