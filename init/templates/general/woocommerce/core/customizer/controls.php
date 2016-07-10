<?php
/**
 * Theme Customizer controls
 *
 * @package Project Name
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer along with several other settings.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 * @since  1.0.0
 */
if ( ! function_exists( 'theme_customize_register' ) ) {
	function theme_customize_register( $wp_customize ) {
		$wp_customize->get_setting( 'blogname' )->transport         	= 'postMessage';
		$wp_customize->get_setting( 'header_textcolor' )->transport 	= 'postMessage';

		// Move background color setting alongside background image
		$wp_customize->get_control( 'background_color' )->section 	= 'background_image';
		$wp_customize->get_control( 'background_color' )->priority 	= 20;

		// Change background image section title & priority
		$wp_customize->get_section( 'background_image' )->title 	= __( 'Background', THEME_TEXT_DOMAIN );
		$wp_customize->get_section( 'background_image' )->priority 	= 30;

		// Change header image section title & priority
		$wp_customize->get_section( 'header_image' )->title 		= __( 'Header', THEME_TEXT_DOMAIN );
		$wp_customize->get_section( 'header_image' )->priority 		= 35;

		/**
		 * Custom controls
		 */
		require_once dirname( __FILE__ ) . '/controls/radio-image.php';
		require_once dirname( __FILE__ ) . '/controls/arbitrary.php';

		if ( apply_filters( 'theme_customizer_more', true ) ) {
			require_once dirname( __FILE__ ) . '/controls/more.php';
		}

		/**
		 * Add the typography section
	     */
		$wp_customize->add_section( 'theme_typography' , array(
			'title'      => __( 'Typography', THEME_TEXT_DOMAIN ),
			'priority'   => 45,
		) );

		/**
		 * Heading color
		 */
		$wp_customize->add_setting( 'theme_heading_color', array(
			'default'           => apply_filters( 'theme_default_heading_color', '#484c51' ),
			'sanitize_callback' => 'theme_sanitize_hex_color',
			'transport'			=> 'postMessage',
		) );

		$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'theme_heading_color', array(
			'label'	   => __( 'Heading color', THEME_TEXT_DOMAIN ),
			'section'  => 'theme_typography',
			'settings' => 'theme_heading_color',
			'priority' => 20,
		) ) );

		/**
		 * Text Color
		 */
		$wp_customize->add_setting( 'theme_text_color', array(
			'default'           => apply_filters( 'theme_default_text_color', '#60646c' ),
			'sanitize_callback' => 'theme_sanitize_hex_color',
			'transport'			=> 'postMessage',
		) );

		$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'theme_text_color', array(
			'label'		=> __( 'Text color', THEME_TEXT_DOMAIN ),
			'section'	=> 'theme_typography',
			'settings'	=> 'theme_text_color',
			'priority'	=> 30,
		) ) );

		/**
		 * Accent Color
		 */
		$wp_customize->add_setting( 'theme_accent_color', array(
			'default'           => apply_filters( 'theme_default_accent_color', '#96588a' ),
			'sanitize_callback' => 'theme_sanitize_hex_color',
		) );

		$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'theme_accent_color', array(
			'label'	   => __( 'Link / accent color', THEME_TEXT_DOMAIN ),
			'section'  => 'theme_typography',
			'settings' => 'theme_accent_color',
			'priority' => 40,
		) ) );

		/**
		 * Logo
		 */
		if ( ! class_exists( 'Jetpack' ) ) {
			$wp_customize->add_control( new Arbitrary_Theme_Control( $wp_customize, 'theme_logo_heading', array(
				'section'  		=> 'header_image',
				'type' 			=> 'heading',
				'label'			=> __( 'Logo', THEME_TEXT_DOMAIN ),
				'priority' 		=> 2,
			) ) );

			$wp_customize->add_control( new Arbitrary_Theme_Control( $wp_customize, 'theme_logo_info', array(
				'section'  		=> 'header_image',
				'type' 			=> 'text',
				'description'	=> sprintf( __( 'Looking to add a logo? Install the %sJetpack%s plugin! %sRead more%s.', THEME_TEXT_DOMAIN ), '<a href="https://wordpress.org/plugins/jetpack/">', '</a>', '<a href="http://docs.woothemes.com/document/storefront-faq/#section-1">', '</a>' ),
				'priority' 		=> 3,
			) ) );

			$wp_customize->add_control( new Arbitrary_Theme_Control( $wp_customize, 'theme_logo_divider_after', array(
				'section'  		=> 'header_image',
				'type' 			=> 'divider',
				'priority' 		=> 4,
			) ) );
		}

		$wp_customize->add_control( new Arbitrary_Theme_Control( $wp_customize, 'theme_header_image_heading', array(
			'section'  		=> 'header_image',
			'type' 			=> 'heading',
			'label'			=> __( 'Header background image', THEME_TEXT_DOMAIN ),
			'priority' 		=> 6,
		) ) );

		/**
		 * Header Background
		 */
		$wp_customize->add_setting( 'theme_header_background_color', array(
			'default'           => apply_filters( 'theme_default_header_background_color', '#2c2d33' ),
			'sanitize_callback' => 'theme_sanitize_hex_color',
			'transport'			=> 'postMessage',
		) );

		$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'theme_header_background_color', array(
			'label'	   => __( 'Background color', THEME_TEXT_DOMAIN ),
			'section'  => 'header_image',
			'settings' => 'theme_header_background_color',
			'priority' => 15,
		) ) );

		/**
		 * Header text color
		 */
		$wp_customize->add_setting( 'theme_header_text_color', array(
			'default'           => apply_filters( 'theme_default_header_text_color', '#9aa0a7' ),
			'sanitize_callback' => 'theme_sanitize_hex_color',
			'transport'			=> 'postMessage',
		) );

		$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'theme_header_text_color', array(
			'label'	   => __( 'Text color', THEME_TEXT_DOMAIN ),
			'section'  => 'header_image',
			'settings' => 'theme_header_text_color',
			'priority' => 20,
		) ) );

		/**
		 * Header link color
		 */
		$wp_customize->add_setting( 'theme_header_link_color', array(
			'default'           => apply_filters( 'theme_default_header_link_color', '#ffffff' ),
			'sanitize_callback' => 'theme_sanitize_hex_color',
			'transport'			=> 'postMessage',
		) );

		$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'theme_header_link_color', array(
			'label'	   => __( 'Link color', THEME_TEXT_DOMAIN ),
			'section'  => 'header_image',
			'settings' => 'theme_header_link_color',
			'priority' => 30,
		) ) );

		/**
		 * Footer section
		 */
		$wp_customize->add_section( 'theme_footer' , array(
			'title'      	=> __( 'Footer', THEME_TEXT_DOMAIN ),
			'priority'   	=> 40,
			'description' 	=> __( 'Customise the look & feel of your web site footer.', THEME_TEXT_DOMAIN ),
		) );

		/**
		 * Footer Background
		 */
		$wp_customize->add_setting( 'theme_footer_background_color', array(
			'default'           => apply_filters( 'theme_default_footer_background_color', '#f3f3f3' ),
			'sanitize_callback' => 'theme_sanitize_hex_color',
			'transport'			=> 'postMessage',
		) );

		$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'theme_footer_background_color', array(
			'label'	   	=> __( 'Background color', THEME_TEXT_DOMAIN ),
			'section'  	=> 'theme_footer',
			'settings' 	=> 'theme_footer_background_color',
			'priority'	=> 10,
		) ) );

		/**
		 * Footer heading color
		 */
		$wp_customize->add_setting( 'theme_footer_heading_color', array(
			'default'           => apply_filters( 'theme_default_footer_heading_color', '#494c50' ),
			'sanitize_callback' => 'theme_sanitize_hex_color',
			'transport' 		=> 'postMessage',
		) );

		$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'theme_footer_heading_color', array(
			'label'	   	=> __( 'Heading color', THEME_TEXT_DOMAIN ),
			'section'  	=> 'theme_footer',
			'settings' 	=> 'theme_footer_heading_color',
			'priority'	=> 20,
		) ) );

		/**
		 * Footer text color
		 */
		$wp_customize->add_setting( 'theme_footer_text_color', array(
			'default'           => apply_filters( 'theme_default_footer_text_color', '#61656b' ),
			'sanitize_callback' => 'theme_sanitize_hex_color',
			'transport'			=> 'postMessage',
		) );

		$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'theme_footer_text_color', array(
			'label'	   	=> __( 'Text color', THEME_TEXT_DOMAIN ),
			'section'  	=> 'theme_footer',
			'settings' 	=> 'theme_footer_text_color',
			'priority'	=> 30,
		) ) );

		/**
		 * Footer link color
		 */
		$wp_customize->add_setting( 'theme_footer_link_color', array(
			'default'           => apply_filters( 'theme_default_footer_link_color', '#96588a' ),
			'sanitize_callback' => 'theme_sanitize_hex_color',
			'transport'			=> 'postMessage',
		) );

		$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'theme_footer_link_color', array(
			'label'	   	=> __( 'Link color', THEME_TEXT_DOMAIN ),
			'section'  	=> 'theme_footer',
			'settings' 	=> 'theme_footer_link_color',
			'priority'	=> 40,
		) ) );


		/**
		 * Buttons section
		 */
		$wp_customize->add_section( 'theme_buttons' , array(
			'title'      	=> __( 'Buttons', THEME_TEXT_DOMAIN ),
			'priority'   	=> 45,
			'description' 	=> __( 'Customise the look & feel of your web site buttons.', THEME_TEXT_DOMAIN ),
		) );

		/**
		 * Button background color
		 */
		$wp_customize->add_setting( 'theme_button_background_color', array(
			'default'           => apply_filters( 'theme_default_button_background_color', '#60646c' ),
			'sanitize_callback' => 'theme_sanitize_hex_color',
		) );

		$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'theme_button_background_color', array(
			'label'	   => __( 'Background color', THEME_TEXT_DOMAIN ),
			'section'  => 'theme_buttons',
			'settings' => 'theme_button_background_color',
			'priority' => 10,
		) ) );

		/**
		 * Button text color
		 */
		$wp_customize->add_setting( 'theme_button_text_color', array(
			'default'           => apply_filters( 'theme_default_button_text_color', '#ffffff' ),
			'sanitize_callback' => 'theme_sanitize_hex_color',
		) );

		$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'theme_button_text_color', array(
			'label'	   => __( 'Text color', THEME_TEXT_DOMAIN ),
			'section'  => 'theme_buttons',
			'settings' => 'theme_button_text_color',
			'priority' => 20,
		) ) );

		/**
		 * Button alt background color
		 */
		$wp_customize->add_setting( 'theme_button_alt_background_color', array(
			'default'           => apply_filters( 'theme_default_button_alt_background_color', '#96588a' ),
			'sanitize_callback' => 'theme_sanitize_hex_color',
		) );

		$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'theme_button_alt_background_color', array(
			'label'	   => __( 'Alternate button background color', THEME_TEXT_DOMAIN ),
			'section'  => 'theme_buttons',
			'settings' => 'theme_button_alt_background_color',
			'priority' => 30,
		) ) );

		/**
		 * Button alt text color
		 */
		$wp_customize->add_setting( 'theme_button_alt_text_color', array(
			'default'           => apply_filters( 'theme_default_button_alt_text_color', '#ffffff' ),
			'sanitize_callback' => 'theme_sanitize_hex_color',
		) );

		$wp_customize->add_control( new WP_Customize_Color_Control( $wp_customize, 'theme_button_alt_text_color', array(
			'label'	   => __( 'Alternate button text color', THEME_TEXT_DOMAIN ),
			'section'  => 'theme_buttons',
			'settings' => 'theme_button_alt_text_color',
			'priority' => 40,
		) ) );

		/**
		 * Layout
		 */
		$wp_customize->add_section( 'theme_layout' , array(
			'title'      	=> __( 'Layout', THEME_TEXT_DOMAIN ),
			'priority'   	=> 50,
		) );

		$wp_customize->add_setting( 'theme_layout', array(
			'default'    		=> is_rtl() ? 'left' : 'right',
			'sanitize_callback' => 'theme_sanitize_layout',
		) );

		$wp_customize->add_control( new Theme_Custom_Radio_Image_Control( $wp_customize, 'theme_layout', array(
					'settings'		=> 'theme_layout',
					'section'		=> 'theme_layout',
					'label'			=> __( 'General Layout', THEME_TEXT_DOMAIN ),
					'priority'		=> 1,
					'choices'		=> array(
						'right' 		=> get_template_directory_uri() . '/inc/customizer/controls/img/2cr.png',
						'left' 			=> get_template_directory_uri() . '/inc/customizer/controls/img/2cl.png',
					)
		) ) );

		/**
		 * More
		 */
		if ( apply_filters( 'theme_customizer_more', true ) ) {
			$wp_customize->add_section( 'theme_more' , array(
				'title'      	=> __( 'More', THEME_TEXT_DOMAIN ),
				'priority'   	=> 999,
			) );

			$wp_customize->add_setting( 'theme_more', array(
				'default'    		=> null,
				'sanitize_callback' => 'sanitize_text_field',
			) );

			$wp_customize->add_control( new More_Theme_Control( $wp_customize, 'theme_more', array(
				'label'    => __( 'Looking for more options?', THEME_TEXT_DOMAIN ),
				'section'  => 'theme_more',
				'settings' => 'theme_more',
				'priority' => 1,
			) ) );
		}
	}
}
