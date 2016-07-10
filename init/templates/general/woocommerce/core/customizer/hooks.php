<?php
/**
 * Theme customizer hooks
 *
 * @package Project Name
 */

add_action( 'customize_preview_init', 			'theme_customize_preview_js' );
add_action( 'customize_register', 				'theme_customize_register' );
add_filter( 'body_class', 						'theme_layout_class' );
add_action( 'wp_enqueue_scripts', 				'theme_add_customizer_css', 130 );
add_action( 'after_setup_theme', 				'theme_custom_header_setup' );
add_action( 'customize_controls_print_styles', 	'theme_customizer_custom_control_css' );
