<?php
/**
 * Database Connection using PDO
 */
class Database
{

    protected static $db;

    // Create Connection
    private function __construct()
    {

        // Connection Settings
        $environment         = 'sandbox'; // production, stage or sandbox
        $db_driver           = 'mysql';

        $sandbox_host        = '';
        $sandbox_name        = '';
        $sandbox_user        = '';
        $sandbox_password    = '';

        $stage_host          = '';
        $stage_name          = '';
        $stage_user          = '';
        $stage_password      = '';

        $production_host     = '';
        $production_name     = '';
        $production_user     = '';
        $production_password = '';

        try {
            if ($environment === 'production') {
                self::$db = new PDO("$db_driver:host=$production_host; dbname=$production_name", $production_user, $production_password);
            }
            if ($environment === 'stage') {
                self::$db = new PDO("$db_driver:host=$stage_host; dbname=$stage_name", $stage_user, $stage_password);
            }
            if ($environment === 'sandbox') {
                self::$db = new PDO("$db_driver:host=$sandbox_host; dbname=$sandbox_name", $sandbox_user, $sandbox_password);
            }
            self::$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            self::$db->exec('SET NAMES utf8');
        }
        catch (PDOException $e) {
            die("Falha na conexão com o banco de dados. " . $e->getMessage());
        }
    }

    // Init Connection
    public static function connect()
    {
        if (!self::$db)
        {
            new Database();
        }

        return self::$db;
    }
}
