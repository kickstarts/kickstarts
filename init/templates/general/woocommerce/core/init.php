<?php
/**
 * Theme engine room
 *
 * @package Project Name
 */


/**
* Theme Settings.
*/
define('THEME_TEXT_DOMAIN', 'projectname');
define('THEME_CONTENT_WIDTH', 980);

/**
* Google Settings.
*/
define('GOOGLE_MAPS_LATLNG', 'lat, lng');
define('GOOGLE_ANALYTICS_UI', 'UA-XXXXXXXX-X');

/**
* Newsletter Settings.
*/
define('MAILCHIMP_API_KEY', '');
define('MAILCHIMP_LIST_ID', '');

/**
 * Sets content width.
 */
if (!isset($content_width)) {
	$content_width = THEME_CONTENT_WIDTH;
}

/**
 * Setup theme default paths.
 */
if (!defined('WP_THEME_URL'))  { define('WP_THEME_URL', get_stylesheet_directory_uri()); }
if (!defined('WP_SCRIPT_URL')) { define('WP_SCRIPT_URL', WP_THEME_URL . '/assets/scripts'); }
if (!defined('WP_STYLE_URL'))  { define('WP_STYLE_URL', WP_THEME_URL . '/assets/styles'); }
if (!defined('WP_IMAGE_URL'))  { define('WP_IMAGE_URL', WP_THEME_URL . '/assets/images'); }

$core_path      	= get_template_directory() . '/core';
$functions_path    	= $core_path . '/functions';
$structure_path     = $core_path . '/structure';
$customizer_path    = $core_path . '/customizer';
$jetpack_path       = $core_path . '/jetpack';
$admin_path     	= $core_path . '/admin';
$woocommerce_path 	= $core_path . '/woocommerce';

/**
 * Developer Tools Settings.
 */
define('THEME_DEBUG_MODE', false);
define('THEME_SYNC_MODE', true);
define('THEME_PREVIEW_MODE', false);
define('THEME_UPDATE_MODE', false);

require_once $core_path . '/devtools.php';

/**
 * Setup.
 * Enqueue styles, register widget regions, etc.
 */
require $functions_path . '/setup.php';

/**
 * Structure.
 * Template functions used throughout the theme.
 */
require $structure_path . '/hooks.php';
require $structure_path . '/post.php';
require $structure_path . '/page.php';
require $structure_path . '/header.php';
require $structure_path . '/footer.php';
require $structure_path . '/comments.php';
require $structure_path . '/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require $functions_path . '/extras.php';

/**
 * Customizer additions.
 */
if ( is_theme_customizer_enabled() ) {
	require $customizer_path . '/hooks.php';
	require $customizer_path . '/controls.php';
	require $customizer_path . '/display.php';
	require $customizer_path . '/functions.php';
	require $customizer_path . '/custom-header.php';
}

/**
 * Load Jetpack compatibility file.
 */
require $jetpack_path . '/jetpack.php';

/**
 * Welcome screen
 */
if ( is_admin() ) {
	require $admin_path . '/welcome-screen/welcome-screen.php';
}

/**
 * Load WooCommerce compatibility files.
 */
if ( is_woocommerce_activated() ) {
	require $woocommerce_path . '/hooks.php';
	require $woocommerce_path . '/functions.php';
	require $woocommerce_path . '/template-tags.php';
	require $woocommerce_path . '/integrations.php';
}
