// Modules
var sh  = require('shelljs'),
    cli = require('cli-color');

// Messages
var error   = cli.red.bold,
    warn    = cli.yellow,
    info    = cli.grey,
    notice  = cli.cyan,
    success = cli.green;


// Welcome Message
sh.echo(notice('→ Initializing...'));

// Create
sh.echo(info('→ Creating Structure'));
sh.rm('-rf', ['./node_modules', './.git', '.gitignore', '.editorconfig', '.travis.yml', 'newproject.js', 'package.json', 'README.md']);
sh.mv('./lib/templates/ghost/*', './');
sh.rm('-rf', ['./lib']);

// Setup
sh.echo(info('→ Setting up project'));

sh.echo(success('✔ All Done!'));
