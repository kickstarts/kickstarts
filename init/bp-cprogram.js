// Modules
var sh  = require('shelljs'),
    cli = require('cli-color');

// Messages
var error = cli.red.bold,
    info  = cli.cyan,
    done  = cli.green;


// Scaffolding
// ----------------------------------

sh.echo(info('→ Initializing...'));

sh.rm('-rf', ['./node_modules', './.git', '.gitignore', '.editorconfig', '.travis.yml', 'newproject.js', 'package.json', 'README.md', 'logo-bp.jpg']);

sh.echo(info('→ Creating Structure...'));
sh.mv('./init/templates/desktop/cprogram/*', './');
sh.rm('-rf', ['./init', './lib']);
sh.echo(done('✔ All Done!'));
