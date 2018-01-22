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

if (THEME_DEBUG_MODE) {
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

if (THEME_CHECK_CONST) {
    function check_const() {
        echo '<pre>';
        print_r( @get_defined_constants() );
        echo '</pre>';
    }
    add_filter('wp_footer', 'check_const');
}
