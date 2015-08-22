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
var themePath   = './wp-content/themes/default/',
    pluginsPath = './wp-content/plugins/',
    gitClone    = 'git clone https://github.com';



// Scaffolding
// ----------------------------------

sh.echo(info('→ Initializing...'));

sh.rm('-rf', ['./node_modules', './.git', '.gitignore', '.editorconfig', '.travis.yml', 'newproject.js', 'package.json', 'README.md', 'logo-bp.jpg']);

// Check if Git exists
if (!gitCheck) {
    sh.echo(error('✖ This task requires Git to run.'));
    process.exit(1);
} else {

    // Install WordPress
    sh.echo(info('→ Installing WordPress...'));
    sh.exec(gitClone + '/WordPress/WordPress');
    sh.mv('./WordPress/*', './');
    sh.rm('-rf', ['./WordPress']);
    sh.echo(done('✔ WordPress successfully installed!'));

    // Scaffolding
    sh.echo(info('→ Creating Structure...'));
    sh.mkdir('-p' themePath);
    sh.mv('./init/templates/wordpress/*', themePath);
    sh.mv(themePath + '__wp-config.txt', './wp-config.php');
    sh.mv(themePath + '__gitignore.txt', './.gitignore');
    sh.mv(themePath + '__htaccess.txt', themePath + 'htaccess.txt');
    sh.rm('-rf', ['./init']);
    sh.echo(done('✔ Created!'));

    // Install WP Plugins
    sh.echo(info('→ Installing Plugins...'));

    sh.echo(info('→ Clonning Jetpack...'));
    sh.exec(gitClone + '/Automattic/jetpack.git');
    sh.mv('./jetpack', pluginsPath);
    sh.echo(done('✔ Jetpack successfully cloned!'));

    sh.echo(info('→ Clonning Advanced Custom Fields...'));
    sh.exec(gitClone + '/elliotcondon/acf.git');
    sh.mv('./jetpack', pluginsPath);
    sh.echo(done('✔ Advanced Custom Fields successfully cloned!'));

    sh.echo(info('→ Clonning Yoast...'));
    sh.exec(gitClone + '/Yoast/wordpress-seo.git');
    sh.mv('./wordpress-seo', pluginsPath);
    sh.echo(done('✔ Yoast successfully cloned!'));

    sh.echo(info('→ Clonning Google Analytics for WordPress...'));
    sh.exec(gitClone + '/Yoast/google-analytics-for-wordpress.git');
    sh.mv('./google-analytics-for-wordpress', pluginsPath);
    sh.echo(done('✔ Google Analytics for WordPress successfully cloned!'));

    sh.echo(info('→ Clonning Admin Menu Editor...'));
    sh.exec(gitClone + '/wp-plugins/admin-menu-editor.git');
    sh.mv('./admin-menu-editor', pluginsPath);
    sh.echo(done('✔ Admin Menu Editor successfully cloned!'));

    sh.echo(info('→ Clonning Contact Form 7...'));
    sh.exec(gitClone + '/wp-plugins/contact-form-7.git');
    sh.mv('./contact-form-7', pluginsPath);
    sh.echo(done('✔ Contact Form 7 successfully cloned!'));

    sh.echo(info('→ Clonning W3 Total Cache...'));
    sh.exec(gitClone + '/wp-plugins/w3-total-cache.git');
    sh.mv('./w3-total-cache', pluginsPath);
    sh.echo(done('✔ W3 Total Cache successfully cloned!'));

    sh.echo(info('→ Clonning Reduce Bounce Rate...'));
    sh.exec(gitClone + '/wp-plugins/reduce-bounce-rate.git');
    sh.mv('./reduce-bounce-rate', pluginsPath);
    sh.echo(done('✔ Reduce Bounce Rate successfully cloned!'));

    sh.echo(done('✔ Plugins successfully installed!'));
}


// Setup
// ----------------------------------

sh.echo(info('→ Setting up project...'));

// Grant Permission
sh.echo(info('→ Setting permission to folders and files...'));
chmod('-R 755', './');
sh.echo(done('✔ Done!'));

// Move on to "./src" folder
sh.echo(info('→ Installing dependencies....'));
sh.cd('./src');

// Check if NodeJS exists and install dependencies
if (!nodeCheck) {
    sh.echo(error('✖ This task requires NodeJS to run.'));
    process.exit(1);
} else {
    sh.exec('npm install');
    sh.echo(done('✔ Node Modules successfully installed!'));

}

// Final Message
sh.echo(done('✔ All Done!'));
sh.echo(warn('\n!!! Remember to setup your "wp_config.php" file'));
