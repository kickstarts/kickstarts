#!/usr/bin/env node

var inquirer = require('inquirer');

var prompt = [
    {
        choices: [
            { name: 'General', value: 'general' },
            { name: 'Mobile', value: 'mobile' },
            { name: 'NodeJS', value: 'node' },
            { name: 'Backbone', value: 'backbone' },
            { name: 'B.E.N.M. Stack', value: 'benmstack' },
            { name: 'CLI Tool', value: 'clitool' },
            { name: 'Rails', value: 'rails' },
            { name: 'WordPress', value: 'wordpress' },
            { name: 'Docpad', value: 'docpad' },
            { name: 'Ghost', value: 'ghost' },
            { name: 'Jekyll', value: 'jekyll' },
            { name: 'Harp', value: 'harp' }
        ],
        name: 'boilerplate',
        message: 'Which boilerplate would you like to use?',
        type: 'list'
    }
];

inquirer.prompt(prompt, function(answers) {

    var boilerplate = answers.boilerplate;

    switch (boilerplate) {

        case 'backbone':
            require('./lib/bp-backbone');
        break;

        case 'benmstack':
            require('./lib/bp-benmstack');
        break;

        case 'clitool':
            require('./lib/bp-clitool');
        break;

        case 'docpad':
            require('./lib/bp-docpad');
        break;

        case 'general':
            require('./lib/bp-general');
        break;

        case 'ghost':
            require('./lib/bp-ghost');
        break;

        case 'harp':
            require('./lib/bp-harp');
        break;

        case 'jekyll':
            require('./lib/bp-jekyll');
        break;

        case 'mobile':
            require('./lib/bp-mobile');
        break;

        case 'node':
            require('./lib/bp-node');
        break;

        case 'rails':
            require('./lib/bp-rails');
        break;

        case 'wordpress':
            require('./lib/bp-wordpress');
        break;

    }

});
