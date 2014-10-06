<?php
/**
 * As configurações básicas do WordPress.
 *
 * Esse arquivo contém as seguintes configurações: configurações de MySQL, Prefixo de Tabelas,
 * Chaves secretas, Idioma do WordPress, e ABSPATH. Você pode encontrar mais informações
 * visitando {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. Você pode obter as configurações de MySQL de seu servidor de hospedagem.
 *
 * Esse arquivo é usado pelo script ed criação wp-config.php durante a
 * instalação. Você não precisa usar o site, você pode apenas salvar esse arquivo
 * como "wp-config.php" e preencher os valores.
 *
 * @package WordPress
 */

// ** Configurações do MySQL ** //
define('DB_NAME',     '');
define('DB_USER',     'root');
define('DB_PASSWORD', 'root');
define('DB_HOST',     'localhost');
define('DB_CHARSET',  'utf8');
define('DB_COLLATE', '');


// ** Chaves únicas de autenticação e salts ** //

/*
 *
 * Altere cada chave para um frase única!
 * https://api.wordpress.org/secret-key/1.1/salt/
 *
 * Você pode alterá-las a qualquer momento para desvalidar
 * quaisquer cookies existentes. Isto irá forçar todos os
 * usuários a fazerem login novamente.
 *
 */

define('AUTH_KEY',         'put your unique phrase here');
define('SECURE_AUTH_KEY',  'put your unique phrase here');
define('LOGGED_IN_KEY',    'put your unique phrase here');
define('NONCE_KEY',        'put your unique phrase here');
define('AUTH_SALT',        'put your unique phrase here');
define('SECURE_AUTH_SALT', 'put your unique phrase here');
define('LOGGED_IN_SALT',   'put your unique phrase here');
define('NONCE_SALT',       'put your unique phrase here');


// ** Prefixo da tabela do banco de dados do WordPress ** //
$table_prefix = 'wp_';


// ** FTP ** //
define('FS_METHOD','direct');

// ** SSL ** //
define( 'FORCE_SSL_LOGIN', false );
define( 'FORCE_SSL_ADMIN', false );


// ** Idioma ** //
define( 'WPLANG', 'pt_BR' );


// ** Otimização dos dados ** //
define('WP_POST_REVISIONS', false);
define('EMPTY_TRASH_DAYS', 30);
define('WP_ALLOW_REPAIR', true);
define('DISALLOW_FILE_EDIT', false);
define('DISALLOW_FILE_MODS', false);
define ('AUTOMATIC_UPDATER_DISABLED' , true);


// ** Modo debugging WordPress ** //
define( 'WP_DEBUG',     true );
define( 'WP_DEBUG_LOG', true );
define( 'SCRIPT_DEBUG', true );


/** Caminho absoluto para o diretório WordPress. */
if ( !defined('ABSPATH') )
    define('ABSPATH', dirname(__FILE__) . '/');

/** Configura as variáveis do WordPress e arquivos inclusos. */
require_once(ABSPATH . 'wp-settings.php');
