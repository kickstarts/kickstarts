<?php

/**
 * Project Name functions and definitions.
 *
 * Sets up the theme and provides some helper functions, which are used in the
 * theme as custom template tags. Others are attached to action and filter
 * hooks in WordPress to change core functionality.
 *
 * For more information on hooks, actions, and filters,
 * see http://codex.wordpress.org/Plugin_API
 *
 * @package Project Name
 */


/**
 * Setup theme default paths.
 */

if (!defined('WP_THEME_URL'))  { define('WP_THEME_URL', get_stylesheet_directory_uri()); }
if (!defined('WP_SCRIPT_URL')) { define('WP_SCRIPT_URL', WP_THEME_URL . '/assets/scripts'); }
if (!defined('WP_STYLE_URL'))  { define('WP_STYLE_URL', WP_THEME_URL . '/assets/styles'); }
if (!defined('WP_IMAGE_URL'))  { define('WP_IMAGE_URL', WP_THEME_URL . '/assets/images'); }

$core_path      = get_template_directory() . '/core/';
$includes_path  = get_template_directory() . '/includes/';
$functions_path = $core_path . 'functions/';
$libs_path      = $core_path . 'libs/';
$classes_path   = $core_path . 'classes/';


/**
 * Developer Tools
 */

define('APP_DEBUG_MODE', false);
define('APP_SYNC_MODE', true);
define('APP_PREVIEW_MODE', false);
define('APP_UPDATE_MODE', false);

require_once $includes_path . 'devtools.php';


/**
 * Require Functions.
 */

require_once $functions_path . 'admin.php';
require_once $functions_path . 'general.php';
require_once $functions_path . 'google.php';
require_once $functions_path . 'optimize.php';
require_once $functions_path . 'posttype.php';
require_once $functions_path . 'metaboxes.php';
require_once $functions_path . 'support.php';
require_once $functions_path . 'theme.php';
require_once $functions_path . 'share.php';
require_once $functions_path . 'widgets.php';
require_once $functions_path . 'shortcodes.php';


/**
 * Require Libs.
 */


/**
 * Require Classes.
 */

