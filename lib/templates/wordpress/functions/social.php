<?php

// Social Buttons
// -------------------
add_action( 'wp_footer', 'include_social_js' );
function include_social_js() {

  $lang = get_bloginfo('language');
  // $lang_g = strtolower(substr($lang, 0, 2));
  $lang_fb = str_replace('-', '_', $lang);

?>

<script type="text/javascript">
    //<![CDATA[

    // Google plus
    window.___gcfg = {lang: '<?php echo $lang_g; ?>'};
    (function() {
       var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
       po.src = 'https://apis.google.com/js/plusone.js';
       var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
    })();

    // Facebook
    document.write('<div id="fb-root"></div>');
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/<?php echo $lang_fb; ?>/all.js#xfbml=1";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    // twitter
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

    // ]]>
</script>

<?php
}
