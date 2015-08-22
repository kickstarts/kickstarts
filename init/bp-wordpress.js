// Variables
// ----------------------------------

// Modules
var sh  = require('shelljs'),
    cli = require('cli-color');

// Messages
var error = cli.red.bold,
    info  = cli.cyan,
    done  = cli.green;

// Check
var nodeCheck = sh.which('node'),
    gitCheck  = sh.which('git');

// Paths
var themePath      = './wp-content/themes/default/',
    pluginsPath    = './wp-content/plugins/'
    repositoryPath = 'git clone https://github.com';



// Scaffolding
// ----------------------------------

sh.echo(info('→ Initializing...'));

sh.echo(info('→ Creating Structure'));
sh.rm('-rf', ['./node_modules', './.git', '.gitignore', '.editorconfig', '.travis.yml', 'newproject.js', 'package.json', 'README.md', 'logo-bp.jpg']);

sh.echo(info('→ Creating Documentation'));
sh.mkdir('./docs');
sh.exec('touch GUIDE.md');

// Check if Git exists
if (!gitCheck) {
    sh.echo(error('✖ This task requires Git to run.'));
    process.exit(1);
} else {

    // Install WordPress
    sh.exec(repositoryPath + '/WordPress/WordPress');
    sh.mv('./init/templates/wordpress/*', themePath);
    sh.rm('-rf', ['./init']);
    sh.mv(themePath + '__wp-config.txt', './wp-config.php');
    sh.mv(themePath + '__gitignore.txt', './.gitignore');
    sh.mv(themePath + '__htaccess.txt', themePath + 'htaccess.txt');

    // Install WP Plugins
    sh.exec(repositoryPath + '/Automattic/jetpack.git', pluginsPath);
    sh.exec(repositoryPath + '/elliotcondon/acf.git', pluginsPath);
    sh.exec(repositoryPath + '/Yoast/wordpress-seo.git', pluginsPath);
    sh.exec(repositoryPath + '/Yoast/google-analytics-for-wordpress.git', pluginsPath);
    sh.exec(repositoryPath + '/wp-plugins/admin-menu-editor.git', pluginsPath);
    sh.exec(repositoryPath + '/wp-plugins/contact-form-7.git', pluginsPath);
    sh.exec(repositoryPath + '/wp-plugins/w3-total-cache.git', pluginsPath);
    sh.exec(repositoryPath + '/wp-plugins/reduce-bounce-rate.git', pluginsPath);
}


// Setup
// ----------------------------------

sh.echo(info('→ Setting up project'));

// Grant Permission
chmod('-R 755', './');

// Move on to "./src" folder
sh.cd('./src');

// Check if NodeJS exists and install dependencies
if (!nodeCheck) {
    sh.echo(error('✖ This task requires NodeJS to run.'));
    process.exit(1);
} else {
    sh.exec('npm install');
}

// Final Message
sh.echo(done('✔ All Done!'));
sh.echo(info('\n→ Remember to configure your "wp_config.php" file'));
