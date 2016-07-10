<?php
/**
 * Integration logic for WooCommerce extensions
 *
 * @package theme
 */

/**
 * Styles & Scripts
 * @return void
 */
function theme_woocommerce_integrations_scripts() {
	/**
	 * Bookings
	 */
	if ( is_woocommerce_extension_activated( 'WC_Bookings' ) ) {
		if ( is_rtl() ) {
			wp_enqueue_style( 'theme-woocommerce-bookings-style', get_template_directory_uri() . '/core/woocommerce/css/bookings-rtl.css', 'theme-woocommerce-style' );
		} else {
			wp_enqueue_style( 'theme-woocommerce-bookings-style', get_template_directory_uri() . '/core/woocommerce/css/bookings.css', 'theme-woocommerce-style' );
		}
	}

	/**
	 * Brands
	 */
	if ( is_woocommerce_extension_activated( 'WC_Brands' ) ) {
		if ( is_rtl() ) {
			wp_enqueue_style( 'theme-woocommerce-brands-style', get_template_directory_uri() . '/core/woocommerce/css/brands-rtl.css', 'theme-woocommerce-style' );
		} else {
			wp_enqueue_style( 'theme-woocommerce-brands-style', get_template_directory_uri() . '/core/woocommerce/css/brands.css', 'theme-woocommerce-style' );
		}
	}

	/**
	 * Wishlists
	 */
	if ( is_woocommerce_extension_activated( 'WC_Wishlists_Wishlist' ) ) {
		if ( is_rtl() ) {
			wp_enqueue_style( 'theme-woocommerce-wishlists-style', get_template_directory_uri() . '/core/woocommerce/css/wishlists-rtl.css', 'theme-woocommerce-style' );
		} else {
			wp_enqueue_style( 'theme-woocommerce-wishlists-style', get_template_directory_uri() . '/core/woocommerce/css/wishlists.css', 'theme-woocommerce-style' );
		}
	}

	/**
	 * AJAX Layered Nav
	 */
	if ( is_woocommerce_extension_activated( 'SOD_Widget_Ajax_Layered_Nav' ) ) {
		if ( is_rtl() ) {
			wp_enqueue_style( 'theme-woocommerce-ajax-layered-nav-style', get_template_directory_uri() . '/core/woocommerce/css/ajax-layered-nav-rtl.css', 'theme-woocommerce-style' );
		} else {
			wp_enqueue_style( 'theme-woocommerce-ajax-layered-nav-style', get_template_directory_uri() . '/core/woocommerce/css/ajax-layered-nav.css', 'theme-woocommerce-style' );
		}
	}

	/**
	 * Variation Swatches
	 */
	if ( is_woocommerce_extension_activated( 'WC_SwatchesPlugin' ) ) {
		if ( is_rtl() ) {
			wp_enqueue_style( 'theme-woocommerce-variation-swatches-style', get_template_directory_uri() . '/core/woocommerce/css/variation-swatches-rtl.css', 'theme-woocommerce-style' );
		} else {
			wp_enqueue_style( 'theme-woocommerce-variation-swatches-style', get_template_directory_uri() . '/core/woocommerce/css/variation-swatches.css', 'theme-woocommerce-style' );
		}
	}

	/**
	 * Composite Products
	 */
	if ( is_woocommerce_extension_activated( 'WC_Composite_Products' ) ) {
		if ( is_rtl() ) {
			wp_enqueue_style( 'theme-woocommerce-composite-products-style', get_template_directory_uri() . '/core/woocommerce/css/composite-products-rtl.css', 'theme-woocommerce-style' );
		} else {
			wp_enqueue_style( 'theme-woocommerce-composite-products-style', get_template_directory_uri() . '/core/woocommerce/css/composite-products.css', 'theme-woocommerce-style' );
		}
	}

	/**
	 * WooCommerce Photography
	 */
	if ( is_woocommerce_extension_activated( 'WC_Photography' ) ) {
		if ( is_rtl() ) {
			wp_enqueue_style( 'theme-woocommerce-photography-style', get_template_directory_uri() . '/core/woocommerce/css/photography-rtl.css', 'theme-woocommerce-style' );
		} else {
			wp_enqueue_style( 'theme-woocommerce-photography-style', get_template_directory_uri() . '/core/woocommerce/css/photography.css', 'theme-woocommerce-style' );
		}
	}

	/**
	 * Product Reviews Pro
	 */
	if ( is_woocommerce_extension_activated( 'WC_Product_Reviews_Pro' ) ) {
		if ( is_rtl() ) {
			wp_enqueue_style( 'theme-woocommerce-product-reviews-pro-style', get_template_directory_uri() . '/core/woocommerce/css/product-reviews-pro-rtl.css', 'theme-woocommerce-style' );
		} else {
			wp_enqueue_style( 'theme-woocommerce-product-reviews-pro-style', get_template_directory_uri() . '/core/woocommerce/css/product-reviews-pro.css', 'theme-woocommerce-style' );
		}
	}

	/**
	 * WooCommerce Smart Coupons
	 */
	if ( is_woocommerce_extension_activated( 'WC_Smart_Coupons' ) ) {
		if ( is_rtl() ) {
			wp_enqueue_style( 'theme-woocommerce-smart-coupons-style', get_template_directory_uri() . '/core/woocommerce/css/smart-coupons-rtl.css', 'theme-woocommerce-style' );
		} else {
			wp_enqueue_style( 'theme-woocommerce-smart-coupons-style', get_template_directory_uri() . '/core/woocommerce/css/smart-coupons.css', 'theme-woocommerce-style' );
		}
	}

	/**
	 * WooCommerce Deposits
	 */
	if ( is_woocommerce_extension_activated( 'WC_Deposits' ) ) {
		if ( is_rtl() ) {
			wp_enqueue_style( 'theme-woocommerce-deposits-style', get_template_directory_uri() . '/core/woocommerce/css/deposits-rtl.css', 'theme-woocommerce-style' );
		} else {
			wp_enqueue_style( 'theme-woocommerce-deposits-style', get_template_directory_uri() . '/core/woocommerce/css/deposits.css', 'theme-woocommerce-style' );
		}
	}

	/**
	 * WooCommerce Product Bundles
	 */
	if ( is_woocommerce_extension_activated( 'WC_Bundles' ) ) {
		if ( is_rtl() ) {
			wp_enqueue_style( 'theme-woocommerce-bundles-style', get_template_directory_uri() . '/core/woocommerce/css/bundles-rtl.css', 'theme-woocommerce-style' );
		} else {
			wp_enqueue_style( 'theme-woocommerce-bundles-style', get_template_directory_uri() . '/core/woocommerce/css/bundles.css', 'theme-woocommerce-style' );
		}
	}
}

/**
 * Add CSS in <head> for integration styles handled by the theme customizer
 *
 * @since 1.0
 */
if ( ! function_exists( 'theme_add_integrations_customizer_css' ) ) {
	function theme_add_integrations_customizer_css() {

		if ( is_theme_customizer_enabled() ) {
			$accent_color 					= theme_sanitize_hex_color( get_theme_mod( 'theme_accent_color', apply_filters( 'theme_default_accent_color', '#96588a' ) ) );
			$header_text_color 				= theme_sanitize_hex_color( get_theme_mod( 'theme_header_text_color', apply_filters( 'theme_default_header_text_color', '#9aa0a7' ) ) );
			$header_background_color 		= theme_sanitize_hex_color( get_theme_mod( 'theme_header_background_color', apply_filters( 'theme_default_header_background_color', '#2c2d33' ) ) );
			$text_color 					= theme_sanitize_hex_color( get_theme_mod( 'theme_text_color', apply_filters( 'theme_default_text_color', '#60646c' ) ) );
			$button_background_color 		= theme_sanitize_hex_color( get_theme_mod( 'theme_button_background_color', apply_filters( 'theme_default_button_background_color', '#60646c' ) ) );
			$button_text_color 				= theme_sanitize_hex_color( get_theme_mod( 'theme_button_text_color', apply_filters( 'theme_default_button_text_color', '#ffffff' ) ) );

			$woocommerce_style 				= '';

			if ( is_woocommerce_extension_activated( 'WC_Bookings' ) ) {
				$woocommerce_style 					.= '
				#wc-bookings-booking-form .wc-bookings-date-picker .ui-datepicker td.bookable a,
				#wc-bookings-booking-form .wc-bookings-date-picker .ui-datepicker td.bookable a:hover,
				#wc-bookings-booking-form .block-picker li a:hover,
				#wc-bookings-booking-form .block-picker li a.selected {
					background-color: ' . $accent_color . ' !important;
				}

				#wc-bookings-booking-form .wc-bookings-date-picker .ui-datepicker td.ui-state-disabled .ui-state-default,
				#wc-bookings-booking-form .wc-bookings-date-picker .ui-datepicker th {
					color:' . $text_color . ';
				}

				#wc-bookings-booking-form .wc-bookings-date-picker .ui-datepicker-header {
					background-color: ' . $header_background_color . ';
					color: ' . $header_text_color . ';
				}';
			}

			if ( is_woocommerce_extension_activated( 'WC_Product_Reviews_Pro' ) ) {
				$woocommerce_style 					.= '
				.woocommerce #reviews .product-rating .product-rating-details table td.rating-graph .bar,
				.woocommerce-page #reviews .product-rating .product-rating-details table td.rating-graph .bar {
					background-color: ' . $text_color . ' !important;
				}

				.woocommerce #reviews .contribution-actions .feedback,
				.woocommerce-page #reviews .contribution-actions .feedback,
				.star-rating-selector:not(:checked) label.checkbox {
					color: ' . $text_color . ';
				}

				.woocommerce #reviews #comments ol.commentlist li .contribution-actions a,
				.woocommerce-page #reviews #comments ol.commentlist li .contribution-actions a,
				.star-rating-selector:not(:checked) input:checked ~ label.checkbox,
				.star-rating-selector:not(:checked) label.checkbox:hover ~ label.checkbox,
				.star-rating-selector:not(:checked) label.checkbox:hover,
				.woocommerce #reviews #comments ol.commentlist li .contribution-actions a,
				.woocommerce-page #reviews #comments ol.commentlist li .contribution-actions a,
				.woocommerce #reviews .form-contribution .attachment-type:not(:checked) label.checkbox:before,
				.woocommerce-page #reviews .form-contribution .attachment-type:not(:checked) label.checkbox:before {
					color: ' . $accent_color . ' !important;
				}';
			}

			if ( is_woocommerce_extension_activated( 'WC_Smart_Coupons' ) ) {
				$woocommerce_style 					.= '
				.coupon-container {
					background-color: ' . $button_background_color . ' !important;
				}

				.coupon-content {
					border-color: ' . $button_text_color . ' !important;
					color: ' . $button_text_color . ';
				}

				.sd-buttons-transparent.woocommerce .coupon-content,
				.sd-buttons-transparent.woocommerce-page .coupon-content {
					border-color: ' . $button_background_color . ' !important;
				}';
			}

			wp_add_inline_style( 'theme-style', $woocommerce_style );

		}
	}
}
