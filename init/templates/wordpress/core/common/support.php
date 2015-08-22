<?php
/**
 * Support Configuration
 *
 * @package Project Name
 */

 if (!function_exists('after_setup_theme_handler')) {

    function after_setup_theme_handler() {

        /**
         * Loading theme textdomain.
         */

        $locale = apply_filters( 'plugin_locale', get_locale(), THEME_TEXT_DOMAIN );
        load_textdomain( THEME_TEXT_DOMAIN, WP_LANG_DIR . '/' . THEME_TEXT_DOMAIN . '-$locale.mo' );
        load_theme_textdomain(THEME_TEXT_DOMAIN, get_template_directory() . '/languages');


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
        add_theme_support('post-thumbnails');

        /**
         * Add feed link.
         */
        add_theme_support('automatic-feed-links');

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

        add_theme_support('custom-header', $default);

        /**
         * Support Custom Background.
         */
        $defaults = array(
            'default-color' => '',
            'default-image' => '',
        );

        add_theme_support('custom-background', $defaults);

        /**
		 * Support Custom Editor Style.
		 */
		add_editor_style('assets/css/editor-style.css');

        /**
		 * Add support for Post Formats.
		 */
        if (THEME_SUPPORT_FORMAT) {
		add_theme_support('post-formats', array(
                'aside',
                'gallery',
                'link',
                'image',
                'quote',
                'status',
                'video',
                'audio',
                'chat'
		    )
        );

        /**
		 * Support The Excerpt on pages.
		 */
        if (THEME_PAGE_EXCERPT) {
            add_post_type_support('page', 'excerpt');
        }


        /**
		 * Switch default core markup for search form, comment form, and comments to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption'
			)
		);

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support('title-tag');

    }
}

add_action('after_setup_theme', 'after_setup_theme_handler');
