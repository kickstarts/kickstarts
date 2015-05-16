// Modules
var sh  = require('shelljs'),
    cli = require('cli-color');

// Messages
var error = cli.red.bold,
    info  = cli.cyan,
    done  = cli.green;

// Check
var rubyCheck = sh.which('ruby');


// Welcome Message
sh.echo(info('→ Initializing...'));

// Create
sh.echo(info('→ Creating Structure'));
sh.rm('-rf', ['./node_modules', './.git', '.gitignore', '.editorconfig', '.travis.yml', 'newproject.js', 'package.json', 'README.md', 'logo-bp.jpg']);
sh.mv('./init/templates/sinatra/*', './');
sh.rm('-rf', ['./init']);
sh.exec('svn checkout https://github.com/ambitiouswebkit/webkit-css-starter
/trunk/sass assets/styles');

// Setup
sh.echo(info('→ Setting up project'));

if (!rubyCheck) {
    sh.echo(error('✖ This task requires Ruby to run.'));
    exit(1);
} else {
    sh.exec('rake');
}

sh.exec('subl .');

sh.echo(done('✔ All Done!'));
