<?php
/**
 * Theme setup functions
 *
 * @package Project Name
 */

/**
 * Set the content width based on the theme's design and stylesheet.
 */
if ( ! isset( $content_width ) ) {
	$content_width = THEME_CONTENT_WIDTH; /* pixels */
}

/**
 * Assign the Theme version to a var
 */
$theme        	= wp_get_theme( THEME_TEXT_DOMAIN );
$theme_version 	= $theme['Version'];

if ( ! function_exists( 'theme_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function theme_setup() {

		/*
		 * Load Localisation files.
		 *
		 * Note: the first-loaded translation file overrides any following ones if the same translation is present.
		 */

		// wp-content/languages/themes/theme-it_IT.mo
		load_theme_textdomain( THEME_TEXT_DOMAIN, trailingslashit( WP_LANG_DIR ) . 'themes/' );

		// wp-content/themes/child-theme-name/languages/it_IT.mo
		load_theme_textdomain( THEME_TEXT_DOMAIN, get_stylesheet_directory() . '/languages' );

		// wp-content/themes/theme/languages/it_IT.mo
		load_theme_textdomain( THEME_TEXT_DOMAIN, get_template_directory() . '/languages' );

		/**
		 * Add default posts and comments RSS feed links to head.
		 */
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link http://codex.wordpress.org/Function_Reference/add_theme_support#Post_Thumbnails
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in two locations.
		register_nav_menus( array(
			'primary'		=> __( 'Primary Menu', THEME_TEXT_DOMAIN ),
			'secondary'		=> __( 'Secondary Menu', THEME_TEXT_DOMAIN ),
			'handheld'		=> __( 'Handheld Menu', THEME_TEXT_DOMAIN ),
		) );

		/*
		 * Switch default core markup for search form, comment form, comments, galleries, captions and widgets
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'widgets',
		) );

		// Setup the WordPress core custom background feature.
		add_theme_support( 'custom-background', apply_filters( 'theme_custom_background_args', array(
			'default-color' => apply_filters( 'theme_default_background_color', 'fcfcfc' ),
			'default-image' => '',
		) ) );

		// Add support for the Site Logo plugin and the site logo functionality in JetPack
		// https://github.com/automattic/site-logo
		// http://jetpack.me/
		add_theme_support( 'site-logo', array( 'size' => 'full' ) );

		// Declare WooCommerce support
		add_theme_support( 'woocommerce' );

		// Declare support for title theme feature
		add_theme_support( 'title-tag' );
	}
endif; // theme_setup

/**
 * Register widget area.
 *
 * @link http://codex.wordpress.org/Function_Reference/register_sidebar
 */
function theme_widgets_init() {
	register_sidebar( array(
		'name'          => __( 'Sidebar', THEME_TEXT_DOMAIN ),
		'id'            => 'sidebar-1',
		'description'   => '',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );

	register_sidebar( array(
		'name'          => __( 'Header', THEME_TEXT_DOMAIN ),
		'id'            => 'header-1',
		'description'   => '',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );

	$footer_widget_regions = apply_filters( 'theme_footer_widget_regions', 4 );

	for ( $i = 1; $i <= intval( $footer_widget_regions ); $i++ ) {
		register_sidebar( array(
			'name' 				=> sprintf( __( 'Footer %d', THEME_TEXT_DOMAIN ), $i ),
			'id' 				=> sprintf( 'footer-%d', $i ),
			'description' 		=> sprintf( __( 'Widgetized Footer Region %d.', THEME_TEXT_DOMAIN ), $i ),
			'before_widget' 	=> '<aside id="%1$s" class="widget %2$s">',
			'after_widget' 		=> '</aside>',
			'before_title' 		=> '<h3>',
			'after_title' 		=> '</h3>',
			)
		);
	}
}

/**
 * Enqueue scripts and styles.
 * @since  1.0.0
 */
function theme_scripts() {
	global $theme_version;

	if ( is_rtl() ) {
		wp_enqueue_style( 'theme-style', get_stylesheet_directory_uri() . '/style-rtl.css', $theme_version );
	} else {
		wp_enqueue_style( 'theme-style', get_stylesheet_uri(), '', $theme_version );
	}



	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}

/**
 * Enqueue scripts and styles.
 * @since  1.0.0
 */
function theme_scripts() {

	global $theme_version;

	if ( is_rtl() ) {
		wp_enqueue_style( 'main-rtl.min', get_stylesheet_uri() . '/main-rtl.css', $theme_version );
	} else {
		wp_enqueue_style( 'main.min', get_stylesheet_uri(), '', $theme_version );
	}

    wp_deregister_script( 'jquery' );

    wp_register_script( 'jquery.min', WP_SCRIPT_URL . '/vendors/jquery.min.js', array(), null, true );
    wp_enqueue_script( 'jquery.min' );

    wp_register_script( 'modernizr.min', WP_SCRIPT_URL . '/vendors/modernizr.min.js', array(), null, false );
    wp_enqueue_script( 'modernizr.min' );

	wp_enqueue_script( 'navigation.min', WP_SCRIPT_URL . '/plugins/navigation.min.js', array(), '20120206', true );

	wp_enqueue_script( 'skip-link-focus-fix.min', WP_SCRIPT_URL . '/plugins/slff.min.js', array(), '20130115', true );

    wp_register_script('main.min', WP_SCRIPT_URL . '/main.min.js', array(), null, true);
    wp_enqueue_script('main.min');

    // Load Thread comments WordPress script.
	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}


/**
 * Load stylesheets.
 */
function enqueue_stylesheet($uri, $dir) {
    return $dir . '/assets/styles/main.min.css';
}

add_filter('stylesheet_uri', 'enqueue_stylesheet', 10, 2);
