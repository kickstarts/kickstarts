#!/usr/bin/env node

'use strict';

var inquirer = require('inquirer');

var prompt = [
    {
        choices: [
            { name: 'General', value: 'general' },
            { name: 'Web App', value: 'webapp' },
            { name: 'Single App Page', value: 'spa'},
            { name: 'BENM Stack', value: 'benmstack' },
            { name: 'MEAN Stack', value: 'meanstack' },
            { name: 'NodeJS', value: 'nodeapp' },
            { name: 'Node Webkit', value: 'nwapp' },
            { name: 'CLI Tool', value: 'clitool' },
            { name: 'Node Package', value: 'npmpkg' },
            { name: 'Rails', value: 'rails' },
            { name: 'Sinatra', value: 'sinatra' },
            { name: 'WordPress', value: 'wordpress' },
            { name: 'Jekyll', value: 'jekyll' },
            { name: 'Harp', value: 'harp' }
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

    case 'spa':
        require('./lib/bp-spa');
        break;

    case 'webapp':
        require('./lib/bp-webapp');
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

    case 'nwapp':
        require('./lib/bp-nwapp');
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

    }

});
