<?php

/**
 * Theme Configuration.
 *
 * Sets up the theme, which are used in the theme.
 *
 * @package Project Name
 */

$theme = wp_get_theme();
if(!empty($theme['Template'])) {
  $theme = wp_get_theme($theme['Template']);
}

/**
 * Theme Settings.
 */
define('THEME_NAME', $theme['Name']);
define('THEME_VERSION', $theme['Version']);
define('THEME_SUPPORT_FORMAT', false);
define('THEME_PAGE_EXCERPT', false);
define('THEME_CONTENT_WIDTH', '680');


/**
 * Google Settings.
 */
define('GOOGLE_MAPS_LATLNG', 'lat, lng');
define('GOOGLE_ANALYTICS_UA', 'UA-XXXXXXXX-X');
define('GOOGLE_VERIFICATION', '');


/**
 * Newsletter Settings.
 */
define('MAILCHIMP_API_KEY', '');
define('MAILCHIMP_LIST_ID', '');
define('MAILCHIMP_METHOD', 'listSubscribe');


/**
 * DevTools Settings.
 */
define('THEME_DEBUG_MODE', false);
define('THEME_PHP_INI', false);
define('THEME_CHECK_CONST', false);
