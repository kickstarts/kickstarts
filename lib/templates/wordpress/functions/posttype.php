<?php
/**
 * Custom Post Type and Taxonomies configurations
 *
 * @package Project Name
 */

/*
 * Initialize Custom Post Types
 */

add_action('init', 'init_handler');
function init_handler() {

    configPostTypeDefault();

}

/**
 * Register Custom Post Types
 */

/* default */
function configPostTypeDefault() {
	$labels = array(
		'name'                => _x('Default', 'post type general name'),
		'singular_name'       => _x('Default', 'post type singular name'),
		'add_new'             => __('Add'),
		'all_items'           => __('List'),
		'view_item'           => __('View'),
		'add_new_item'        => __('Add Default'),
		'edit_item'           => __('Edit'),
		'update_item'         => __('Update'),
		'search_items'        => __('Search'),
		'not_found'           => __('Not Found'),
		'not_found_in_trash'  => __('Not Found in Trash'),
		'menu_name'           => 'default',
		'parent_item_colon'   => ''
	);

	$args = array(
		'label'               => 'Label goes here',
		'description'         => 'Description goes here',
		'labels'              => $labels,
		'supports'            => array( 'title', 'thumbnail' ),
		'taxonomies'          => array( 'category' ),
		'hierarchical'        => false,
		'public'              => true,
		'show_ui'             => true,
		'show_in_menu'        => true,
		'show_in_nav_menus'   => true,
		'show_in_admin_bar'   => true,
		'menu_position'       => 5,
		'can_export'          => true,
		'has_archive'         => true,
		'exclude_from_search' => true,
		'publicly_queryable'  => true,
		'capability_type'     => 'post',
	);

	register_post_type( 'default', $args );
}

add_action('init', 'cpt_add_default_boxes');

function cpt_add_default_boxes() {
    register_taxonomy_for_object_type('category', 'default');
}
