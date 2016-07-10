<?php
/**
 * Theme hooks
 *
 * @package Project Name
 */

/**
 * General
 * @see  theme_setup()
 * @see  theme_widgets_init()
 * @see  theme_scripts()
 * @see  theme_header_widget_region()
 * @see  theme_get_sidebar()
 */
add_action( 'after_setup_theme',			'theme_setup' );
add_action( 'widgets_init',					'theme_widgets_init' );
add_action( 'wp_enqueue_scripts',			'theme_scripts',				10 );
add_action( 'theme_before_content',	        'theme_header_widget_region',	10 );
add_action( 'theme_sidebar',			    'theme_get_sidebar',			10 );

/**
 * Header
 * @see  theme_skip_links()
 * @see  theme_secondary_navigation()
 * @see  theme_site_branding()
 * @see  theme_primary_navigation()
 */
add_action( 'theme_header', 'theme_skip_links',                 0 );
add_action( 'theme_header', 'theme_site_branding',              20 );
add_action( 'theme_header', 'theme_secondary_navigation',       30 );
add_action( 'theme_header', 'theme_primary_navigation',         50 );

/**
 * Footer
 * @see  theme_footer_widgets()
 * @see  theme_credit()
 */
add_action( 'theme_footer', 'theme_footer_widgets',	10 );
add_action( 'theme_footer', 'theme_credit',			20 );

/**
 * Homepage
 * @see  theme_homepage_content()
 * @see  theme_product_categories()
 * @see  theme_recent_products()
 * @see  theme_featured_products()
 * @see  theme_popular_products()
 * @see  theme_on_sale_products()
 */
add_action( 'homepage', 'theme_homepage_content',		10 );
add_action( 'homepage', 'theme_product_categories',	    20 );
add_action( 'homepage', 'theme_recent_products',		30 );
add_action( 'homepage', 'theme_featured_products',		40 );
add_action( 'homepage', 'theme_popular_products',		50 );
add_action( 'homepage', 'theme_on_sale_products',		60 );

/**
 * Posts
 * @see  theme_post_header()
 * @see  theme_post_meta()
 * @see  theme_post_content()
 * @see  theme_paging_nav()
 * @see  theme_single_post_header()
 * @see  theme_post_nav()
 * @see  theme_display_comments()
 */
add_action( 'theme_loop_post',			'theme_post_header',		10 );
add_action( 'theme_loop_post',			'theme_post_meta',			20 );
add_action( 'theme_loop_post',			'theme_post_content',		30 );
add_action( 'theme_loop_after',		    'theme_paging_nav',		    10 );
add_action( 'theme_single_post',		'theme_post_header',		10 );
add_action( 'theme_single_post',		'theme_post_meta',			20 );
add_action( 'theme_single_post',		'theme_post_content',		30 );
add_action( 'theme_single_post_after',	'theme_post_nav',			10 );
add_action( 'theme_single_post_after',	'theme_display_comments',	10 );

/**
 * Pages
 * @see  theme_page_header()
 * @see  theme_page_content()
 * @see  theme_display_comments()
 */
add_action( 'theme_page', 			'theme_page_header',		10 );
add_action( 'theme_page', 			'theme_page_content',		20 );
add_action( 'theme_page_after', 	'theme_display_comments',	10 );

/**
 * Extras
 * @see  theme_setup_author()
 * @see  theme_body_classes()
 * @see  theme_page_menu_args()
 */
add_filter( 'body_class',			'theme_body_classes' );
add_filter( 'wp_page_menu_args',	'theme_page_menu_args' );
