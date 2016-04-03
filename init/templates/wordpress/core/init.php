<?php

/**
 * Initialize Theme Functions.
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

$core_path      = get_template_directory() . '/core';
$includes_path  = get_template_directory() . '/includes';
$common_path    = $core_path . '/common';
$helpers_path   = $core_path . '/helpers';


/**
 * Developer Tools.
 */
require_once $core_path . '/devtools.php';

/**
 * Require Common Functions.
 */
require_once $common_path . '/admin.php';
require_once $common_path . '/general.php';
require_once $common_path . '/google.php';
require_once $common_path . '/metaboxes.php';
require_once $common_path . '/optimize.php';
require_once $common_path . '/posttype.php';
require_once $common_path . '/share.php';
require_once $common_path . '/shortcodes.php';
require_once $common_path . '/support.php';
require_once $common_path . '/widgets.php';


/**
 * Require Help Functions.
 */
require_once $helpers_path . '/excerpt.php';
require_once $helpers_path . '/newletter.php';
require_once $helpers_path . '/pagination.php';
require_once $helpers_path . '/roles.php';
require_once $helpers_path . '/schema.php';
require_once $helpers_path . '/search.php';


/**
 * Require Structure Functions.
 */
require_once $includes_path . '/comments.php';
require_once $includes_path . '/gallery.php';
require_once $includes_path . '/modals.php';
require_once $includes_path . '/related-posts.php';
require_once $includes_path . '/social.php';
require_once $includes_path . '/thumbnail.php';
