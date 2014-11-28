<?php
/**
 * The template for displaying search forms in Project Name
 *
 * @package Project Name
 */
?>

<form method="get" class="" action="<?php echo esc_url(home_url('/')); ?>">
    <label for="s" class=""><?php _e('Search', 'projectname'); ?></label>
    <input type="text" value="<?php echo esc_attr(get_search_query()); ?>" name="s" id="s" class="">
    <input type="submit" class="" value="<?php esc_attr_e('Search', 'projectname'); ?>" />
</form>
