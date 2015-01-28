#!/usr/bin/env node

'use strict';

var inquirer = require('inquirer');

var prompt = [
    {
        choices: [
            { name: 'General', value: 'general' },
            { name: 'Web App', value: 'webapp' },
            { name: 'React + Backbone', value: 'reactbone' },
            { name: 'NodeJS', value: 'nodeapp' },
            { name: 'Node Webkit', value: 'nwapp' },
            { name: 'B.E.N.M. Stack', value: 'benmstack' },
            { name: 'M.E.A.N. Stack', value: 'meanstack' },
            { name: 'Node Package', value: 'npmpkg' },
            { name: 'React Package', value: 'reactpkg' },
            { name: 'CLI Tool', value: 'clitool' },
            { name: 'WordPress', value: 'wordpress' },
            { name: 'WordPress Plugin', value: 'wpplugin' },
            { name: 'Sinatra', value: 'sinatra' },
            { name: 'Jekyll', value: 'jekyll' },
            { name: 'Harp', value: 'harp' },
            { name: 'C Program', value: 'cprogram' },
            { name: 'Shell Script', value: 'shellscript' }

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

    case 'webapp':
        require('./lib/bp-webapp');
        break;

    case 'reactbone':
        require('./lib/bp-reactbone');
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

    case 'reactpkg':
        require('./lib/bp-reactpkg');
        break;

    case 'sinatra':
        require('./lib/bp-sinatra');
        break;

    case 'wordpress':
        require('./lib/bp-wordpress');
        break;

    case 'wpplugin':
        require('./lib/bp-wpplugin');
        break;

    case 'jekyll':
        require('./lib/bp-jekyll');
        break;

    case 'harp':
        require('./lib/bp-harp');
        break;

    case 'cprogram':
        require('./lib/bp-cprogram');
        break;

    case 'shellscript':
        require('./lib/bp-shellscript');
        break;

    }

});
