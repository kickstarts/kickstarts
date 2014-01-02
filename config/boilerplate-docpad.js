// Modules
var sh  = require('shelljs'),
    cli = require('cli-color');

// Messages
var error    = cli.red.bold,
    warn     = cli.yellow,
    info     = cli.grey,
    notice   = cli.cyan,
    success  = cli.green;

sh.echo(notice('! Initialize Building process...'));
sh.mv(__dirname + '/docpad', './');
sh.rm('-rf', [
        './boilerplates',
        './config',
        './node_modules',
        './git',
        '.gitignore',
        '.travis.yml',
        'LICENSE',
        'newproject.js',
        'package.json',
        'README.md'
    ]
);
sh.echo(success('✔ All Done!'));

