// Variables
// ----------------------------------

// Modules
var path = require('path'),
    sh  = require('shelljs'),
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
    gitClone    = 'git clone https://github.com',
    svnClone    = 'svn checkout http://plugins.svn.wordpress.org/',
    wpRepo      = 'WordPress/WordPress',
    wpBranch    = '4.4-branch',
    twentyList  = [
        './wp-content/themes/twentyten',
        './wp-content/themes/twentyeleven',
        './wp-content/themes/twentytwelve',
        './wp-content/themes/twentythirteen',
        './wp-content/themes/twentyfourteen',
        './wp-content/themes/twentyfifteen'
    ];


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
    sh.exec('git clone -b ' + wpBranch + '/' + wpRepo);
    sh.mv('./WordPress/*', './');
    sh.rm('-rf', ['./WordPress']);
    sh.echo(done('✔ WordPress successfully installed!'));

    // Scaffolding
    sh.echo(info('→ Creating Structure...'));
    sh.mkdir('-p', themePath);
    sh.mv('./init/templates/wordpress/*', themePath);
    sh.mv(themePath + '__wp-config.txt', './wp-config.php');
    sh.mv(themePath + '__gitignore.txt', './.gitignore');
    sh.mv(themePath + '__htaccess.txt', themePath + 'htaccess.txt');
    sh.rm('-rf', ['./init']);
    sh.rm('-rf', twentyList);
    sh.echo(done('✔ Created!'));

    // Install WP Plugins
    sh.echo(info('→ Installing Plugins...'));

    function clonePlugin(pluginSrc, pluginDist, pluginName, pluginType) {
        sh.echo(info('→ Clonning ' + pluginName + '...'));
        if (pluginType === 'git') {
            sh.exec(path.join(gitClone, pluginSrc));
        }
        if (pluginType === 'svn') {
            sh.exec(path.join(svnClone, pluginSrc));
        }
        sh.mv(pluginDist, pluginsPath);
        sh.echo(done('✔ ' + pluginName + ' successfully cloned!'));
    }

    // Design Optimization and Performance
    clonePlugin('/elliotcondon/acf.git', './acf', 'Advanced Custom Fields', 'git');
    clonePlugin('/wp-plugins/admin-menu-editor.git', './admin-menu-editor', 'Admin Menu Editor', 'git');
    clonePlugin('/wp-plugins/contact-form-7.git', './contact-form-7', 'Contact Form 7', 'git');
    clonePlugin('/wp-plugins/w3-total-cache.git', './w3-total-cache', 'W3 Total Cache', 'git');

    // SEO Tools
    clonePlugin('/Yoast/wordpress-seo.git', './wordpress-seo', 'Yoast', 'git');
    clonePlugin('/Yoast/google-analytics-for-wordpress.git', './google-analytics-for-wordpress', 'Google Analytics for WordPress', 'git');
    clonePlugin('/wp-plugins/reduce-bounce-rate.git', './reduce-bounce-rate', 'Reduce Bounce Rate', 'git');
    clonePlugin('/Automattic/jetpack.git', './jetpack', 'Jetpack', 'git');


    // Security and Backup
    clonePlugin('/wp-plugins/updraftplus.git', './updraftplus', 'UpdraftPlus Backup and Restoration', 'git');
    clonePlugin('/wp-plugins/wordfence.git', './wordfence', 'Wordfence Security', 'git');
    clonePlugin('/login-lockdown/trunk login-lockdown', './login-lockdown', 'Login LockDown', 'svn');

    sh.echo(done('✔ Plugins successfully installed!'));
}


// Setup
// ----------------------------------

sh.echo(info('→ Setting up project...'));

// Grant Permission
sh.echo(info('→ Setting permission to folders and files...'));
sh.chmod('755', './');
sh.echo(done('✔ Done!'));

// Move on to "./src" folder
sh.echo(info('→ Installing dependencies....'));
sh.cd(themePath + './src');

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
sh.echo(info('\n!!! Remember to setup your "wp_config.php" file'));
