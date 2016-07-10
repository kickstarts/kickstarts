<?php
/**
 * Template functions used for the site footer.
 *
 * @package theme
 */

if ( ! function_exists( 'theme_footer_widgets' ) ) {
	/**
	 * Display the footer widget regions
	 * @since  1.0.0
	 * @return  void
	 */
	function theme_footer_widgets() {
		if ( is_active_sidebar( 'footer-4' ) ) {
			$widget_columns = apply_filters( 'theme_footer_widget_regions', 4 );
		} elseif ( is_active_sidebar( 'footer-3' ) ) {
			$widget_columns = apply_filters( 'theme_footer_widget_regions', 3 );
		} elseif ( is_active_sidebar( 'footer-2' ) ) {
			$widget_columns = apply_filters( 'theme_footer_widget_regions', 2 );
		} elseif ( is_active_sidebar( 'footer-1' ) ) {
			$widget_columns = apply_filters( 'theme_footer_widget_regions', 1 );
		} else {
			$widget_columns = apply_filters( 'theme_footer_widget_regions', 0 );
		}

		if ( $widget_columns > 0 ) : ?>

			<section class="footer-widgets col-<?php echo intval( $widget_columns ); ?> fix">

				<?php $i = 0; while ( $i < $widget_columns ) : $i++; ?>

					<?php if ( is_active_sidebar( 'footer-' . $i ) ) : ?>

						<section class="block footer-widget-<?php echo intval( $i ); ?>">
				        	<?php dynamic_sidebar( 'footer-' . intval( $i ) ); ?>
						</section>

			        <?php endif; ?>

				<?php endwhile; ?>

			</section><!-- /.footer-widgets  -->

		<?php endif;
	}
}

if ( ! function_exists( 'theme_credit' ) ) {
	/**
	 * Display the theme credit
	 * @since  1.0.0
	 * @return void
	 */
	function theme_credit() {
		?>
		<div class="site-info">
			<?php echo esc_html( apply_filters( 'theme_copyright_text', $content = '&copy; ' . get_bloginfo( 'name' ) . ' ' . date( 'Y' ) ) ); ?>
			<?php if ( apply_filters( 'theme_credit_link', true ) ) { ?>
			<br /> <?php printf( __( '%1$s designed by %2$s.', 'Theme' ), '', '<a href="http://www.vitorbritto.com.br" alt="Vitor Britto - Design & Desenvolvimento Web" title="Vitor Britto - Design & Desenvolvimento Web" rel="designer">vitorbritto</a>' ); ?>
			<?php } ?>
		</div><!-- .site-info -->
		<?php
	}
}
