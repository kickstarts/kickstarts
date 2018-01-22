<?php

/**
 * Default initialization for the plugin:
 * - Registers the default textdomain.
 */
function plugin_init() {
    $locale = apply_filters( 'plugin_locale', get_locale(), 'plugin' );
    load_textdomain( 'plugin', WP_LANG_DIR . '/plugin/plugin-' . $locale . '.mo' );
    load_plugin_textdomain( 'plugin', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
}

/**
 * Activate the plugin
 */
function plugin_activate() {
    // First load the init scripts in case any rewrite functionality is being loaded
    plugin_init();

    flush_rewrite_rules();
}
register_activation_hook( __FILE__, 'plugin_activate' );

/**
 * Deactivate the plugin
 * Uninstall routines should be in uninstall.php
 */
function plugin_deactivate() {

}
register_deactivation_hook( __FILE__, 'plugin_deactivate' );

// Wireup actions
add_action( 'init', 'plugin_init' );

// Wireup filters

// Wireup shortcodes
