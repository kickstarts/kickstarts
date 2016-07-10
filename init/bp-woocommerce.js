// Modules
var sh  = require('shelljs'),
    cli = require('cli-color');

// Messages
var error = cli.red.bold,
    info  = cli.cyan,
    done  = cli.green;

// Check
var nodeCheck = sh.which('node');


// Welcome Message
sh.echo(info('→ Initializing...'));

// Create
sh.echo(info('→ Creating Structure'));
sh.rm('-rf', ['./node_modules', './.git', '.gitignore', '.editorconfig', '.travis.yml', 'newproject.js', 'package.json', 'README.md', 'logo-bp.jpg']);

// Download Latest WordPress
sh.exec('git clone https://github.com/WordPress/WordPress');

// Move Theme
sh.mv('./init/templates/general/woocommerce/*', './wp-content/themes/default/');

// Remove Unecessary Files
sh.rm('-rf', ['./init']);

// Bootstrap Files
sh.mv('./wp-content/themes/default/__wp-config.txt', './wp-config.php');
sh.mv('./wp-content/themes/default/__gitignore.txt', './.gitignore');
sh.mv('./wp-content/themes/default/__htaccess.txt', './wp-content/themes/default/htaccess.txt');

// Clone Plugins for WooCommerce
sh.exec('git clone https://github.com/claudiosmweb/woocommerce-correios ./wp-content/plugins');
sh.exec('git clone https://github.com/claudiosmweb/woocommerce-pagseguro ./wp-content/plugins');
sh.exec('git clone https://github.com/claudiosmweb/woocommerce-boleto ./wp-content/plugins');
sh.exec('git clone https://github.com/claudiosmweb/woocommerce-checkout-cielo ./wp-content/plugins');

// Install Dependencies
sh.echo(info('→ Setting up project'));

sh.cd('./src');

if (!nodeCheck) {
    sh.echo(error('✖ This task requires NodeJS to run.'));
    process.exit(1);
} else {
    sh.exec('npm install');
}

sh.echo(done('✔ All Done!'));
sh.echo(info('\n→ Remember to replace/move "wp_config.php" file'));
