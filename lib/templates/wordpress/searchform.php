<?php
/**
 * The template for displaying search forms in Project Name
 *
 * @package Project Name
 */
?>

<form method="get" class="form-horizontal" action="<?php echo esc_url(home_url('/')); ?>">
    <input type="text" value="<?php echo esc_attr(get_search_query()); ?>" name="s" class="input-large">
    <input type="submit" class="btn btn-success" value="pesquisar">
</form>
