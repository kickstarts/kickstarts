<?php

if (THEME_DEBUG_MODE) {
    function debug_mode($param) {
        if (is_array($param) || is_object($param)) {
            echo '<pre>';
            print_r($param);
            echo '</pre>';
        } else {
            //echo $param;
            echo date("Y-m-d H:i:s: ").iconv("UTF-8", "ISO-8859-1//TRANSLIT",$param);
        }
    }
    add_filter('wp_footer', 'debug_mode');

    function debugx_mode($param) {
        if (is_array($param) || is_object($param)) {
            echo '<pre>';
            print_r($param);
            echo '</pre>';
        } else {
            echo $param;
        }
        exit();
    }
    add_filter('wp_footer', 'debugx_mode');
}

if (THEME_PREVIEW_MODE) {
    function preview_mode() { ?>
            <script>var s=document.createElement("style");s.innerHTML=".preview{position:fixed;bottom:0;left:0;right:0;background:rgba(170,0,0,.8);border-top:1px solid #AA0000;border-bottom:1px solid #FF0000;padding:20px;width:100%;text-align:center;text-transform:uppercase;color:white;font-family:'Arial', sans-serif;font-size:11px;}",document.body.appendChild(s);var d=document.createElement("div");d.className="preview",d.innerHTML="Você está no ambiente de teste.",document.body.appendChild(d);</script>
    <?php }
    add_filter('wp_footer', 'preview_mode');
}

if (THEME_SYNC_MODE) {
    function sync_mode() { ?>
        <script type='text/javascript' id="__bs_script__">
        //<![CDATA[
            document.write("<script async src='http://HOST:3000/browser-sync/browser-sync-client.'<?php echo THEME_SYNC_VERSION; ?>'.js'><\/script>".replace("HOST", location.hostname));
        //]]>
        </script>
    <?php }
    add_filter('wp_footer', 'sync_mode');
}

if (THEME_UPDATE_MODE) {
    function update_mode() {
        wp_redirect('main/', 302);
        exit;
    }
    add_filter('wp_head', 'update_mode');
}
