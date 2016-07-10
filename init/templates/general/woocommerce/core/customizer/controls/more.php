<?php
/**
 * Class to create a Customizer control for displaying information
 */
class More_Theme_Control extends WP_Customize_Control {

	/**
	* Render the content on the theme customizer page
	*/
	public function render_content() {
		?>
		<label style="overflow: hidden; zoom: 1;">
			<span class="customize-control-title"><?php echo esc_html( $this->label ); ?></span>
			<p>
				<?php
					printf( __( 'There\'s a range of Theme extensions available to put additional power in your hands. Check out the %sTheme%s page in your dashboard for more information.', THEME_TEXT_DOMAIN ), '<a href="' . esc_url( admin_url() . 'themes.php?page=theme-welcome#add-ons' ) .'">', '</a>' );
				?>
			</p>

			<span class="customize-control-title"><?php _e( 'Enjoying Theme?', THEME_TEXT_DOMAIN ); ?></span>
			<p>
				<?php
					printf( __( 'Why not leave us a review on %sWordPress.org%s?  We\'d really appreciate it!', THEME_TEXT_DOMAIN ), '<a href="https://wordpress.org/themes/theme">', '</a>' );
				?>
			</p>
		</label>
		<?php
	}
}
