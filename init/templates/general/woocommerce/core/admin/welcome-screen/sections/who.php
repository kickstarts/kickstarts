<?php
/**
 * Welcome screen who are woo template
 */
?>

<div id="who" class="feature-section col three-col" style="margin-bottom: 1.618em; overflow: hidden;">

	<p style="font-size: 1.2em; padding: 1.618em 0; margin: 1.618em 0 2.618em 0; border-top: 1px solid rgba(0,0,0,0.1); border-bottom: 1px solid rgba(0,0,0,0.1);">
		<?php echo sprintf( esc_html__( 'Looking for more Storefront goodies? Take a look at the extensions available at woothemes.com. %sGo shopping &rarr;%s', THEME_TEXT_DOMAIN ), '<a href="http://www.woothemes.com/product-category/storefront-extensions/" class="button-primary" style="float: right;">', '</a>' ); ?>
	</p>

	<div class="col-1">
		<img src="<?php echo esc_url( get_template_directory_uri() ) . '/inc/admin/welcome-screen/img/woothemes.png'; ?>" alt="<?php esc_html_e( 'The Woo Team', THEME_TEXT_DOMAIN ); ?>" class="image-50" width="440" />
		<h4><?php esc_html_e( 'Who are WooThemes?', THEME_TEXT_DOMAIN ); ?></h4>
		<p><?php esc_html_e( 'WooCommerce creators WooThemes is an international team of WordPress superstars building products for a passionate community of hundreds of thousands of users.', THEME_TEXT_DOMAIN ); ?></p>
		<p><a href="http://woothemes.com" class="button"><?php esc_html_e( 'Visit WooThemes', THEME_TEXT_DOMAIN ); ?></a></p>
	</div>

	<?php if ( ! class_exists( 'WooCommerce' ) ) { ?>

	<div class="col-2">
		<img src="<?php echo esc_url( get_template_directory_uri() ) . '/inc/admin/welcome-screen/img/woocommerce.png'; ?>" alt="<?php esc_html_e( 'WooCommerce logo', THEME_TEXT_DOMAIN ); ?>" class="image-50" width="440" />
		<h4><?php esc_html_e( 'What is WooCommerce?', THEME_TEXT_DOMAIN ); ?></h4>
		<p><?php esc_html_e( 'WooCommerce is the most popular WordPress eCommerce plugin. Packed full of intuitive features and surrounded by a thriving community - it\'s the perfect solution for building an online store with WordPress.', THEME_TEXT_DOMAIN ); ?></p>
		<p><a href="<?php echo esc_url( wp_nonce_url( self_admin_url( 'update.php?action=install-plugin&plugin=woocommerce' ), 'install-plugin_woocommerce' ) ); ?>" class="button button-primary"><?php _e( 'Download & Install WooCommerce', THEME_TEXT_DOMAIN ); ?></a></p>
		<p><a href="http://docs.woothemes.com/documentation/plugins/woocommerce/" class="button"><?php esc_html_e( 'View WooCommerce Documentation', THEME_TEXT_DOMAIN ); ?></a></p>
	</div>

	<?php } ?>

	<div class="col-2">
		<img src="<?php echo esc_url( get_template_directory_uri() ) . '/inc/admin/welcome-screen/img/github.png'; ?>" alt="<?php esc_html_e( 'Can I contribute to Storefront?', THEME_TEXT_DOMAIN ); ?>" class="image-50" width="440" />
		<h4><?php esc_html_e( 'Can I Contribute?', THEME_TEXT_DOMAIN ); ?></h4>
		<p><?php esc_html_e( 'Found a bug? Want to contribute a patch or create a new feature? GitHub is the place to go! Or would you like to translate Storefront in to your language? Get involved at Transifex.', THEME_TEXT_DOMAIN ); ?></p>
		<p><a href="http://github.com/woothemes/storefront/" class="button"><?php esc_html_e( 'Storefront at GitHub', THEME_TEXT_DOMAIN ); ?></a> <a href="https://www.transifex.com/projects/p/storefront-1/" class="button"><?php _e( 'Storefront at Transifex', THEME_TEXT_DOMAIN ); ?></a></p>
	</div>

	<div class="col-3 last-feature">
		<h4><?php esc_html_e( 'Can\'t find a feature?', THEME_TEXT_DOMAIN ); ?></h4>
		<p><?php echo sprintf( esc_html__( 'Please suggest and vote on ideas / feature requests at the %sStorefront Ideasboard%s. The most popular ideas will see prioritised development.', THEME_TEXT_DOMAIN ), '<a href="http://ideas.woothemes.com/forums/275029-storefront">', '</a>' ); ?></p>

		<h4><?php esc_html_e( 'Are you enjoying Storefront?', THEME_TEXT_DOMAIN ); ?></h4>
		<p><?php echo sprintf( esc_html__( 'Why not leave a review on %sWordPress.org%s? We\'d really appreciate it! :-)', THEME_TEXT_DOMAIN ), '<a href="https://wordpress.org/themes/storefront">', '</a>' ); ?></p>
	</div>
</div>
