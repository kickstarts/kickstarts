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


// Scaffolding
// ----------------------------------

sh.echo(info('→ Initializing...'));

sh.rm('-rf', ['./node_modules', './.git', '.gitignore', '.editorconfig', '.travis.yml', 'newproject.js', 'package.json', 'README.md', 'logo-bp.jpg']);

sh.echo(info('→ Creating Structure...'));
sh.mv('./init/templates/tools/clitool/*', './');
sh.rm('-rf', ['./init', './lib']);
sh.echo(done('✔ Created!'));


// Setup
// ----------------------------------

sh.echo(info('→ Setting up project...'));

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
