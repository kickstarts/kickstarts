<?php
/**
 *
 * @package   Plugin_Name
 * @author    Your Name <email@example.com>
 * @license   GPL-2.0+
 * @link      http://example.com
 * @copyright 2014 Your Name or Company Name
 *
 * @wordpress-plugin
 * Plugin Name:       @TODO
 * Plugin URI:        @TODO
 * Description:       @TODO
 * Version:           1.0.0
 * Author:            @TODO
 * Author URI:        @TODO
 * Text Domain:       plugin-name-locale
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Domain Path:       /languages
 * GitHub Plugin URI: https://github.com/<owner>/<repo>
 */


// Useful global constants
define('WP_PLUGIN_BASENAME', plugin_basename(__FILE__));
define('WP_PLUGIN_NAME', trim(dirname(WP_PLUGIN_BASENAME), '/'));
define('WP_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('WP_PLUGIN_URL', untrailingslashit(plugins_url('', __FILE__)));
define('WP_PLUGIN_DEVMODE', true);
define('WP_PLUGIN_LANG', basename(dirname(__FILE__)));

// Settings
require_once WP_PLUGIN_DIR . '/settings.php';
