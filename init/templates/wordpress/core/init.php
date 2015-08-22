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
 * Autoload Functions.
 */
function theme_autoload_files($folder) {
    foreach (glob('{$folder}/*.php') as $filename) {
        require_once $filename;
    }
}

/**
 * Require Common Functions.
 */
theme_autoload_files($common_path);

/**
 * Require Help Functions.
 */
theme_autoload_files($helpers_path);

/**
 * Require Structure Functions.
 */
theme_autoload_files($includes_path);
