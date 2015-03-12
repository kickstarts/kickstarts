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

    /*
     * Add post_thumbnails support.
     */
    add_theme_support( 'post-thumbnails' );

    /**
     * Add feed link.
     */
    add_theme_support( 'automatic-feed-links' );

    /**
     * Support Custom Header.
     */
    $default = array(
        'width'         => 0,
        'height'        => 0,
        'flex-height'   => false,
        'flex-width'    => false,
        'header-text'   => false,
        'default-image' => '',
        'uploads'       => true,
    );

    add_theme_support( 'custom-header', $default );

    /**
     * Support Custom Background.
     */
    $defaults = array(
        'default-color' => '',
        'default-image' => '',
    );

    add_theme_support( 'custom-background', $defaults );

}

add_action('after_setup_theme', 'after_setup_theme_handler');
