#!/usr/bin/env node

'use strict';

var inquirer = require('inquirer');

var prompt = [
    {
        choices: [
            { name: 'General', value: 'general' },
            { name: 'Mobile', value: 'mobile' },
            { name: 'Web App', value: 'webapp' },
            { name: 'Single Page App', value: 'spa' },
            { name: 'BENM Stack', value: 'benmstack' },
            { name: 'MEAN Stack', value: 'meanstack' },
            { name: 'NodeJS App', value: 'nodeapp' },
            { name: 'CLI Tool', value: 'clitool' },
            { name: 'npm package', value: 'npmpkg' },
            { name: 'Rails', value: 'rails' },
            { name: 'Sinatra', value: 'sinatra' },
            { name: 'WordPress', value: 'wordpress' },
            { name: 'Jekyll', value: 'jekyll' },
            { name: 'Harp', value: 'harp' },
            { name: 'Docpad', value: 'docpad' }
        ],
        name: 'boilerplate',
        message: 'Which boilerplate would you like to generate?',
        type: 'list'
    }
];

inquirer.prompt(prompt, function(answers) {

    var boilerplate = answers.boilerplate;

    switch (boilerplate) {

    case 'general':
        require('./lib/bp-general');
        break;

    case 'mobile':
        require('./lib/bp-mobile');
        break;

    case 'simpleapp':
        require('./lib/bp-webapp');
        break;

    case 'backbone':
        require('./lib/bp-spa');
        break;

    case 'benmstack':
        require('./lib/bp-benmstack');
        break;

    case 'meanstack':
        require('./lib/bp-meanstack');
        break;

    case 'nodeapp':
        require('./lib/bp-nodeapp');
        break;

    case 'clitool':
        require('./lib/bp-clitool');
        break;

    case 'npmpkg':
        require('./lib/bp-npmpkg');
        break;

    case 'rails':
        require('./lib/bp-rails');
        break;

    case 'sinatra':
        require('./lib/bp-sinatra');
        break;

    case 'wordpress':
        require('./lib/bp-wordpress');
        break;

    case 'jekyll':
        require('./lib/bp-jekyll');
        break;

    case 'harp':
        require('./lib/bp-harp');
        break;

    case 'docpad':
        require('./lib/bp-docpad');
        break;
    }

});
