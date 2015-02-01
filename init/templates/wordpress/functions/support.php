<?php
/**
 * Support Configuration
 *
 * @package Project Name
 */

function after_setup_theme_handler() {

    /**
     * Loading theme textdomain.
     */
    load_theme_textdomain('projectname', get_template_directory() . '/languages/');

	/**
     * Register nav menus.
     */

    add_theme_support('menus');

    register_nav_menus(
        array(
            'main-menu'   => 'Main Menu',
            'footer-menu' => 'Footer Menu'
        )
    );


    /**
     * Register sidebars.
     */

    register_sidebar(
        array(
            'name'          => 'Name here',
            'id'            => 'id-here',
            'description'   => 'Description goes here',
            'before_widget' => '<aside id="%1$s" class="widget %2$s">',
            'after_widget'  => '</aside>',
            'before_title'  => '',
            'after_title'   => ''
        )
    );


    /*
     * Add post_thumbnails support.
     */

    add_theme_support('post-thumbnails');
    add_image_size('thumb-main', 50, 50, true);


    /*
     * Add woocommerce support.
     */

    add_theme_support('woocommerce');

}

add_action('after_setup_theme', 'after_setup_theme_handler');
