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
sh.mv('./init/templates/wordpress/*', './');
sh.rm('-rf', ['./init']);
sh.exec('svn checkout https://github.com/ambitiouswebkit/ui-starter/trunk/sass assets/styles');

// Setup
sh.echo(info('→ Setting up project'));

sh.exec('subl .');
sh.cd('./src');

if (!nodeCheck) {
    sh.echo(error('✖ This task requires NodeJS to run.'));
    process.exit(1);
} else {
    sh.exec('bower install');
    sh.exec('npm install');
}

sh.echo(done('✔ All Done!'));
sh.echo(info('\n→ Remember to replace/move "wp_config.php" file'));
