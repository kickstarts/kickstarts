<?php

/**
 * DataBase Conection
 */

class DB {

    private static $instance;
    private static $connection;


    function __construct() {
        self::$connection = new PDO("mysql:dbname=" . DB_NAME . ";host=" . DB_HOST, DB_USER, DB_PASSWORD, array(PDO::MYSQL_ATTR_INIT_COMMAND => "ST NAMES UTF-8"));
        self::$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        self::$connection->setAttribute(PDO::ATTR_DEFAULT_FECTH_MODE, PDO::FETCH_OBJ);
    }


    public static function getInstance() {
        if (empty(self::$instance)) {
            self::$instance = new DB();
        }
        return self::$instance;
    }


    public static function getConnection() {
        self::getInstance();
        return self::$connection;
    }

    public static function prepare($sql) {
        return self::getConnection()->prepare($sql);
    }

    public static function lastInsertId() {
        return self::getConnection()->lastInsertId();
    }

}
