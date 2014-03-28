// Modules
var sh  = require('shelljs'),
    cli = require('cli-color');

// Messages
var error   = cli.red.bold,
    info    = cli.grey,
    notice  = cli.cyan,
    success = cli.green;

// Check
var nodeCheck = sh.witch('node');


// Welcome Message
sh.echo(notice('→ Initializing...'));

// Create
sh.echo(info('→ Creating Structure'));
sh.rm('-rf', ['./node_modules', './.git', '.gitignore', '.editorconfig', '.travis.yml', 'newproject.js', 'package.json', 'README.md', 'logo-bp.jpg']);
sh.mv('./lib/templates/wordpress/*', './');
sh.rm('-rf', ['./lib']);

// Setup
sh.echo(info('→ Setting up project'));

sh.exec('subl .');
if (!nodeCheck) {
    sh.echo(error('✖ This task requires NodeJS to run.'));
    exit(1);
} else {
    sh.exec('bower install');
    sh.exec('npm install');
    sh.exec('grunt');
}

sh.echo(success('✔ All Done!'));
