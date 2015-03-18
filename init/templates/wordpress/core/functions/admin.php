<?php
/**
 * --------------------------------------------------------------
 * ADMIN PANEL CONFIGURATION - Do not change anything here!
 * --------------------------------------------------------------
 *
 * @package Project Name
 */


/*
 * Custom Image for Login.
 */
function custom_login_logo() {
    echo '<style type="text/css">h1 a { background: url('. WP_IMAGE_URL .'/admin/logo-painel.png) 50% 50% no-repeat !important; }</style>';
}
add_action('login_head', 'custom_login_logo');


/*
 * Manage items from admin bar.
 */
function wps_admin_bar() {
    global $wp_admin_bar;
    $wp_admin_bar->remove_menu('wp-logo');
    $wp_admin_bar->remove_menu('about');
    $wp_admin_bar->remove_menu('wporg');
    $wp_admin_bar->remove_menu('documentation');
    $wp_admin_bar->remove_menu('support-forums');
    $wp_admin_bar->remove_menu('feedback');
    $wp_admin_bar->remove_menu('view-site');
    $wp_admin_bar->remove_menu('updates');
    $wp_admin_bar->remove_menu('new-content');
    $wp_admin_bar->remove_menu('comments');

    $wp_admin_bar->add_menu(
        array(
            'id'    => 'new',
            'title' => 'Menu'
       )
   );
    $wp_admin_bar->add_menu(
        array(
            'parent' =>'new',
            'id'     => 'default',
            'title'  => 'Default CPT',
            'href'   => admin_url().'post-new.php?post_type=default'
       )
   );
}
add_action('wp_before_admin_bar_render', 'wps_admin_bar');


/*
 * Hide update notice of wordpress version.
 */
function wp_hide_msg() {
    remove_action('admin_notices', 'update_nag', 3);
}
add_action('admin_menu','wp_hide_msg');


/*
 * Hide "help" guide.
 */
function hide_help() {
    echo '<style type="text/css">
#contextual-help-link-wrap { display: none !important; }
    </style>';
}
add_action('admin_head', 'hide_help');


/*
 * Change the footer text
 */
function remove_footer_admin () {
    echo "&copy;". date('Y') . ' - ' . get_bloginfo('name') . " - Todos os Direitos Reservados.";
}
add_filter('admin_footer_text', 'remove_footer_admin');


/*
 * Remove version from footer.
 */
function change_footer_version() {
    return 'Mantido com Wordpress. Desenvolvido por: <a href="http://www.vitorbritto.com.br" target="_blank" title="Vitor Britto - Desenvolvimento Web">vitorbritto</a>';
}
add_filter('update_footer', 'change_footer_version', 9999);


/*
 * Remove meta boxes from posts.
 */
function remove_meta_boxes() {
    // remove_meta_box('submitdiv', 'post', 'normal');             // Publish meta box
    // remove_meta_box('categorydiv', 'post', 'side');             // Category meta box
    // remove_meta_box('formatdiv', 'post', 'normal');             // Post format meta box
    // remove_meta_box('postimagediv', 'post', 'side');            // Featured image meta box
    // remove_meta_box('pageparentdiv', 'page', 'side');           // Page attributes meta box
    remove_meta_box('commentsdiv', 'post', 'normal');           // Comments meta box
    remove_meta_box('revisionsdiv', 'post', 'normal');          // Revisions meta box
    remove_meta_box('authordiv', 'post', 'normal');             // Author meta box
    remove_meta_box('slugdiv', 'post', 'normal');               // Slug meta box
    remove_meta_box('tagsdiv-post_tag', 'post', 'side');        // Post tags meta box
    remove_meta_box('postexcerpt', 'post', 'normal');           // Excerpt meta box
    remove_meta_box('trackbacksdiv', 'post', 'normal');         // Trackbacks meta box
    remove_meta_box('postcustom', 'post', 'normal');            // Custom fields meta box
    remove_meta_box('commentstatusdiv', 'post', 'normal');      // Comment status meta box
}
add_action('admin_menu', 'remove_meta_boxes');


/*
 * Remove widgets dashboard.
 */
function admin_remove_dashboard_widgets() {
    // remove_meta_box('dashboard_right_now', 'dashboard', 'normal');
    // remove_meta_box('dashboard_recent_drafts', 'dashboard', 'side');
    remove_meta_box('dashboard_recent_comments', 'dashboard', 'normal');
    remove_meta_box('dashboard_quick_press', 'dashboard', 'side');
    remove_meta_box('dashboard_incoming_links', 'dashboard', 'normal');
    remove_meta_box('dashboard_plugins', 'dashboard', 'normal');
    remove_meta_box('dashboard_primary', 'dashboard', 'side');
    remove_meta_box('dashboard_secondary', 'dashboard', 'side');
}
add_action('wp_dashboard_setup', 'admin_remove_dashboard_widgets');


/*
 * Set the color based on post status.
 */
function posts_status_color() { ?>
    <style>
        .status-draft   { background: #FCE3F2 !important; }
        .status-pending { background: #CBDFF2 !important; }
        .status-publish { /* Default colors */ }
        .status-future  { background: #C6EBF5 !important; }
        .status-private { background: #F2D46F; }
        .status-trash   { background: #F2D46F; }
    </style>
<?php }
add_action('admin_footer','posts_status_color');


/*
 * Remove tabs from menu.
 */
// add_action('admin_menu', 'remove_menus');
function remove_menus() {
    global $menu;
    global $current_user;
    get_currentuserinfo();
    $restricted = array(
        __('Dashboard'),
        __('Posts'),
        // __('Pages'),
        __('Settings'),
        __('Links'),
        __('Appearance'),
        __('Tools'),
        __('Plugins'),
        __('Comments')

   );
    end ($menu);
    while (prev($menu)) {
        $value = explode(' ',$menu[key($menu)][0]);
        if (in_array($value[0] != NULL?$value[0]:"" , $restricted)) {
            unset($menu[key($menu)]);
        }
    }
}


/*
 * Hide "Options" tab from admin.
 */
function remove_screen_options_tab() {
    return false;
}
add_filter('screen_options_show_screen', 'remove_screen_options_tab');


/*
 * Remove items from user profile.
 */
function change_contactmethod($contactmethods) {
    unset($contactmethods['aim']);
    unset($contactmethods['yim']);
    unset($contactmethods['jabber']);
    return $contactmethods;
}
add_filter('user_contactmethods','change_contactmethod',10,1);


/*
 * Remove the preview and view buttons from publish meta box.
 */
function posttype_admin_css() {
    global $post_type;
    $post_types = array(
        /* set post types */
        'default',
        'post',
        'page',
    );
    if(in_array($post_type, $post_types))
        echo '<style type="text/css">#post-preview, #view-post-btn{display: none;}</style>';
}
add_action('admin_head-post-new.php', 'posttype_admin_css');
add_action('admin_head-post.php', 'posttype_admin_css');


/*
 * Disable auto update of plugins.
 */
remove_action('load-update-core.php', 'wp_update_plugins');
add_filter('pre_site_transient_update_plugins', create_function('$a', "return null;"));


/*
 * Remove Welcome Panel.
 */
remove_action('welcome_panel', 'wp_welcome_panel');


/*
 * Hide Pages on List.
 */
function exclude_this_page($query) {
    if(!is_admin()) {
        return $query;
    }
    global $pagenow;
    $pid = ''; /* set the list of page ID here */
    if('edit.php' == $pagenow && (get_query_var('post_type') && 'page' == get_query_var('post_type'))) {
        $query->set('post__not_in', array($pid));
    }
    return $query;
}
// add_action('pre_get_posts' ,'exclude_this_page');


/*
 * New Title Placeholder
 */
function default_custom_title_text($title) {
    if (function_exists ('get_current_screen')) {
        $screen = get_current_screen();
        if ('default' == $screen->post_type) {
            $title = 'Digite o título aqui';
        }
        return $title;
    }
}
add_filter('enter_title_here', 'default_custom_title_text');


/*
 * Featured Image
 */
function posts_columns_default($defaults){
    $defaults['default_posts_thumbs'] = 'Imagem';
    return $defaults;
    $col_start = array_slice($defaults, 0, 1, true);
    $col_end   = array_slice($defaults, 1, null, true);
    $all_cols  = array_merge($col_start, array('default_posts_thumbs' => __('Foto')), $col_end);
        return $all_cols;
    }
    add_filter('manage_default_posts_columns', 'posts_columns_default', 10);

    function posts_custom_columns_default($column_name, $id){
        if($column_name === 'default_posts_thumbs'){
            echo the_post_thumbnail('admin-thumb');
        } else {
            echo '<img src="' . WP_IMAGE_URL .' /avatar-default.jpg" />';
        }
    }
// add_action('manage_default_posts_custom_column', 'posts_custom_columns_default', 10, 2);


/**
 * Automatically sets the post thumbnail.
 *
 * @global array $post WP post object.
 */
function autoset_featured() {
    global $post;
    if (isset($post->ID)) {
        $already_has_thumb = has_post_thumbnail($post->ID);
        if (!$already_has_thumb) {
            $attached_image = get_children('post_parent=' . $post->ID . '&post_type=attachment&post_mime_type=image&numberposts=1');
            if ($attached_image) {
                foreach ($attached_image as $attachment_id => $attachment) {
                    set_post_thumbnail($post->ID, $attachment_id);
                }
            }
        }
    }
}

// add_action('the_post', 'autoset_featured');
// add_action('save_post', 'autoset_featured');
// add_action('draft_to_publish', 'autoset_featured');
// add_action('new_to_publish', 'autoset_featured');
// add_action('pending_to_publish', 'autoset_featured');
// add_action('future_to_publish', 'autoset_featured');
