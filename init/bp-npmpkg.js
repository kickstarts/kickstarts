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
sh.mv('./init/templates/libs/npmpkg/*', './');
sh.rm('-rf', ['./init', './lib']);

// Setup
sh.echo(info('→ Setting up project'));

if (!nodeCheck) {
    sh.echo(error('✖ This task requires NodeJS to run.'));
    process.exit(1);
} else {
    sh.exec('npm install');
}

sh.exec('subl .');

sh.echo(done('✔ All Done!'));
