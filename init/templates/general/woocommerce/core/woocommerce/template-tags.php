<?php
/**
 * Custom template tags used to integrate this theme with WooCommerce.
 *
 * @package theme
 */

/**
 * Cart Link
 * Displayed a link to the cart including the number of items present and the cart total
 * @param  array $settings Settings
 * @return array           Settings
 * @since  1.0.0
 */
if ( ! function_exists( 'theme_cart_link' ) ) {
	function theme_cart_link() {
		?>
			<a class="cart-contents" href="<?php echo esc_url( WC()->cart->get_cart_url() ); ?>" title="<?php _e( 'View your shopping cart', THEME_TEXT_DOMAIN ); ?>">
				<?php echo wp_kses_data( WC()->cart->get_cart_subtotal() ); ?> <span class="count"><?php echo wp_kses_data( sprintf( _n( '%d item', '%d items', WC()->cart->get_cart_contents_count(), THEME_TEXT_DOMAIN ), WC()->cart->get_cart_contents_count() ) );?></span>
			</a>
		<?php
	}
}

/**
 * Display Product Search
 * @since  1.0.0
 * @uses  is_woocommerce_activated() check if WooCommerce is activated
 * @return void
 */
if ( ! function_exists( 'theme_product_search' ) ) {
	function theme_product_search() {
		if ( is_woocommerce_activated() ) { ?>
			<div class="site-search">
				<?php the_widget( 'WC_Widget_Product_Search', 'title=' ); ?>
			</div>
		<?php
		}
	}
}

/**
 * Display Header Cart
 * @since  1.0.0
 * @uses  is_woocommerce_activated() check if WooCommerce is activated
 * @return void
 */
if ( ! function_exists( 'theme_header_cart' ) ) {
	function theme_header_cart() {
		if ( is_woocommerce_activated() ) {
			if ( is_cart() ) {
				$class = 'current-menu-item';
			} else {
				$class = '';
			}
		?>
		<ul class="site-header-cart menu">
			<li class="<?php echo esc_attr( $class ); ?>">
				<?php theme_cart_link(); ?>
			</li>
			<li>
				<?php the_widget( 'WC_Widget_Cart', 'title=' ); ?>
			</li>
		</ul>
		<?php
		}
	}
}

/**
 * Upsells
 * Replace the default upsell function with our own which displays the correct number product columns
 * @since   1.0.0
 * @return  void
 * @uses    woocommerce_upsell_display()
 */
if ( ! function_exists( 'theme_upsell_display' ) ) {
	function theme_upsell_display() {
		woocommerce_upsell_display( -1, 3 );
	}
}

/**
 * Sorting wrapper
 * @since   1.4.3
 * @return  void
 */
function theme_sorting_wrapper() {
	echo '<div class="theme-sorting">';
}

/**
 * Sorting wrapper close
 * @since   1.4.3
 * @return  void
 */
function theme_sorting_wrapper_close() {
	echo '</div>';
}

/**
 * Storefront shop messages
 * @since   1.4.4
 * @uses    do_shortcode
 */
function theme_shop_messages() {
	if ( ! is_checkout() ) {
		echo wp_kses_post( theme_do_shortcode( 'woocommerce_messages' ) );
	}
}

/**
 * Storefront WooCommerce Pagination
 * WooCommerce disables the product pagination inside the woocommerce_product_subcategories() function
 * but since Storefront adds pagination before that function is excuted we need a separate function to
 * determine whether or not to display the pagination.
 * @since 1.4.4
 */
if ( ! function_exists( 'theme_woocommerce_pagination' ) ) {
	function theme_woocommerce_pagination() {
		if ( woocommerce_products_will_display() ) {
			woocommerce_pagination();
		}
	}
}
