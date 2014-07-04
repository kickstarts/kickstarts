// Modules
var sh  = require('shelljs'),
    cli = require('cli-color');

// Messages
var error = cli.red.bold,
    info  = cli.cyan,
    done  = cli.green;

// Check
var nodeCheck = sh.which('node'),
    rubyCheck = sh.which('ruby');


// Welcome Message
sh.echo(info('→ Initializing...'));

// Create
sh.echo(info('→ Creating Structure'));
sh.rm('-rf', ['./node_modules', './.git', '.gitignore', '.editorconfig', '.travis.yml', 'newproject.js', 'package.json', 'README.md', 'logo-bp.jpg']);
sh.mv('./lib/templates/jekyll/*', './');
sh.rm('-rf', ['./lib']);
sh.exec('git clone git://github.com/ambitiousframework/main-css.scss.git assets/sass');
sh.rm('-rf', ['./assets/styles/.git', './assets/styles/.gitignore', './assets/styles/README.md']);

// Setup
sh.echo(info('→ Setting up project'));

if (!nodeCheck) {
    sh.echo(error('✖ This task requires NodeJS to run.'));
    process.exit(1);
} else {
    sh.exec('bower install');
    sh.exec('npm install');
}

if (!rubyCheck) {
    sh.echo(error('✖ This task requires Ruby to run.'));
    exit(1);
} else {
    sh.exec('rake');
}

sh.exec('subl .');

sh.echo(done('✔ All Done!'));
