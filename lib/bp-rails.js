// // Modules
// var sh  = require('shelljs'),
//     cli = require('cli-color');

// // Messages
// var error = cli.red.bold,
//     info  = cli.cyan,
//     done  = cli.green;

// // Check
// var nodeCheck = sh.which('node'),
//     rubyCheck = sh.which('ruby');


// // Welcome Message
// sh.echo(info('→ Initializing...'));

// // Create
// sh.echo(info('→ Creating Structure'));
// sh.rm('-rf', ['./node_modules', './.git', '.gitignore', '.editorconfig', '.travis.yml', 'newproject.js', 'package.json', 'README.md', 'logo-bp.jpg']);
// sh.mv('./lib/templates/rails/*', './');
// sh.rm('-rf', ['./lib']);

// // Setup
// sh.echo(info('→ Setting up project'));

// sh.exec('subl .');

// if (!nodeCheck) {
//     sh.echo(error('✖ This task requires NodeJS to run.'));
//     exit(1);
// } else {
//     sh.exec('bower install');
// }

// if (!rubyCheck) {
//     sh.echo(error('✖ This task requires Ruby to run.'));
//     exit(1);
// } else {
//     sh.exec('bundle install');
//     sh.exec('guard');
// }

// sh.echo(done('✔ All Done!'));


// -----------------------------------------------------------------------------------------------


// Modules
var sh  = require('shelljs'),
    cli = require('cli-color');

// Messages
var error = cli.red.bold;

sh.echo(error('→ I\'m still in progress. Sorry.'));




