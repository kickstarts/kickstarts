<?php

function debug($param) {
    if (is_array($param) || is_object($param)) {
        echo '<pre>';
        print_r($param);
        echo '</pre>';
    } else {
        //echo $param;
        echo date("Y-m-d H:i:s: ").iconv("UTF-8", "ISO-8859-1//TRANSLIT",$param);
    }
}

function debugx($param) {
    if (is_array($param) || is_object($param)) {
        echo '<pre>';
        print_r($param);
        echo '</pre>';
    } else {
        echo $param;
    }
    exit();
}
