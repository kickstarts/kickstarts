<?php
/**
 * Register Widgets for Theme
 *
 * @package Project Name
 */


function theme_widgets_init() {
    register_sidebar(
        array(
            'name' => __('Main Sidebar', THEME_TEXT_DOMAIN),
            'id' => 'main-sidebar',
            'description' => __('Site Main Sidebar', THEME_TEXT_DOMAIN),
            'before_widget' => '<aside id="%1$s" class="widget %2$s">',
            'after_widget' => '</aside>',
            'before_title' => '<h3 class="widgettitle widget-title">',
            'after_title' => '</h3>',
        )
    );
}

add_action('widgets_init', 'theme_widgets_init');
