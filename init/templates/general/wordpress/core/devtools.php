<?php

if (isset($_GET['error']) && $_GET['error'] === 'true') {

    // HEADERS
    foreach (getallheaders() as $name => $value) {
        echo "PHP - $name: $value <br />\n";
    }

    foreach (apache_request_headers() as $header => $value) {
        echo "APACHE - $header: $value <br />\n";
    }

    // E_ERROR
    $error_level = error_reporting();

    function renderErrors($type) {

        switch($type) {
            case E_ERROR:
                return 'E_ERROR';
            case E_WARNING:
                return 'E_WARNING';
            case E_PARSE:
                return 'E_PARSE';
            case E_NOTICE:
                return 'E_NOTICE';
            case E_CORE_ERROR:
                return 'E_CORE_ERROR';
            case E_CORE_WARNING:
                return 'E_CORE_WARNING';
            case E_COMPILE_ERROR:
                return 'E_COMPILE_ERROR';
            case E_COMPILE_WARNING:
                return 'E_COMPILE_WARNING';
            case E_USER_ERROR:
                return 'E_USER_ERROR';
            case E_USER_WARNING:
                return 'E_USER_WARNING';
            case E_USER_NOTICE:
                return 'E_USER_NOTICE';
            case E_STRICT:
                return 'E_STRICT';
            case E_RECOVERABLE_ERROR:
                return 'E_RECOVERABLE_ERROR';
            case E_DEPRECATED:
                return 'E_DEPRECATED';
            case E_USER_DEPRECATED:
                return 'E_USER_DEPRECATED';
        }

        return "";

    }

    for ($i = 0; $i < 15;  $i++ ) {
        echo renderErrors($error_level & pow(2, $i)) . "<br>";
    }

}

if (isset($_GET['debug']) && $_GET['debug'] === 'true') {
    define( 'SCRIPT_DEBUG', true );
    define( 'WP_DEBUG', true );
    define( 'WP_DEBUG_LOG', true );
}

if(THEME_PHP_INI) {
    phpinfo();
}

if (APP_DEBUG_MODE) {
    function debug_mode($param) {
        if (is_array($param) || is_object($param)) {
            echo '<style>.debug-wrapper{position:fixed;bottom:0;left:0;right:0;width:100%;background:#ececec;border-top:1px solid #dadada;height:250px;overflow-y:scroll;word-wrap:break-word;z-index:999;padding:10px;}</style>';
            echo '<div class="debug-wrapper">';
            echo '<pre>';
            print_r($param);
            echo '</pre>';
            echo '</div>';
        } else {
            //echo $param;
            echo date("Y-m-d H:i:s: ").iconv("UTF-8", "ISO-8859-1//TRANSLIT",$param);
        }
    }

    function debugx_mode($param) {
        if (is_array($param) || is_object($param)) {
            echo '<style>.debug-wrapper{position:fixed;bottom:0;left:0;right:0;width:100%;background:#ececec;border-top:1px solid #dadada;height:250px;overflow-y:scroll;word-wrap:break-word;z-index:999;padding:10px;}</style>';
            echo '<div class="debug-wrapper">';
            echo '<pre>';
            print_r($param);
            echo '</pre>';
            echo '</div>';
        } else {
            echo $param;
        }
        exit();
    }

    function dump($param) {
        if (is_array($param) || is_object($param)) {
            echo '<style>.debug-wrapper{position:fixed;bottom:0;left:0;right:0;width:100%;background:#ececec;border-top:1px solid #dadada;height:250px;overflow-y:scroll;word-wrap:break-word;z-index:999;padding:10px;}</style>';
            echo '<div class="debug-wrapper">';
            echo '<pre>';
            var_dump($param);
            echo '</pre>';
            echo '</div>';
        } else {
            echo $param;
        }
        exit();
    }
}

if (THEME_PREVIEW_MODE) {
    function preview_mode() { ?>
            <script>var s=document.createElement("style");s.innerHTML=".preview{position:fixed;bottom:0;left:0;right:0;background:rgba(170,0,0,.8);border-top:1px solid #AA0000;border-bottom:1px solid #FF0000;padding:20px;width:100%;text-align:center;text-transform:uppercase;color:white;font-family:'Arial', sans-serif;font-size:11px;}",document.body.appendChild(s);var d=document.createElement("div");d.className="preview",d.innerHTML="Você está no ambiente de teste.",document.body.appendChild(d);</script>
    <?php }
    add_filter('wp_footer', 'preview_mode');
}

if (THEME_SYNC_MODE) {
    function sync_mode() { ?>
        <script type='text/javascript' id="__bs_script__">//<![CDATA[
            document.write("<script async src='http://HOST:3000/browser-sync/browser-sync-client.<?php echo THEME_SYNC_VERSION; ?>.js'><\/script>".replace("HOST", location.hostname));
        //]]></script>
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

if (THEME_CHECK_CONST) {
    function check_const() {
        echo '<pre>';
        print_r( @get_defined_constants() );
        echo '</pre>';
    }
    add_filter('wp_footer', 'check_const');
}
