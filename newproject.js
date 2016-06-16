#!/usr/bin/env node

'use strict';

var inquirer = require('inquirer');

var prompt = [
    {
        choices: [
            { name: '------ STATIC SITES ------', value: '' },
            { name: 'Landing Page', value: 'landingpage' },
            { name: 'Web Site', value: 'website' },
            { name: '------ APPS ------', value: '' },
            { name: 'Web App', value: 'webapp' },
            { name: 'Simple ngApp', value: 'ngapp' },
            { name: 'Ionic', value: 'ionic' },
            { name: 'React + Flux', value: 'reactflux' },
            { name: '------ CMS ------', value: '' },
            { name: 'WordPress', value: 'wordpress' },
            { name: '------ E-COMMERCE ------', value: '' },
            { name: 'WooCommerce', value: 'woocommerce' },
            { name: '------ SERVER / API ------', value: '' },
            { name: 'API (JavaScript / NodeJS)', value: 'nodeapp' },
            { name: 'API (Ruby / Sinatra)', value: 'sinatra' },
            { name: 'API (PHP / Slim)', value: 'slim' },
            { name: '------ FULL-STACK ------', value: '' },
            { name: 'B.E.N.M. Stack', value: 'benmstack' },
            { name: 'M.E.A.N. Stack', value: 'meanstack' },
            { name: '------ MODULES ------', value: '' },
            { name: 'WP Plugin', value: 'wpplugin' },
            { name: 'JS Component', value: 'jscomponent' },
            { name: 'jQuery Plugin', value: 'jqueryplugin' },
            { name: 'Node Package', value: 'npmpkg' },
            { name: '------ STATIC GENERATORS ------', value: '' },
            { name: 'Jekyll', value: 'jekyll' },
            { name: 'Harp', value: 'harp' },
            { name: '------ TOOLS ------', value: '' },
            { name: 'CLI Tool', value: 'clitool' },
            { name: 'C Program', value: 'cprogram' },
            { name: 'Shell Script', value: 'shellscript' },
            { name: '------ NATIVE APPS ------', value: '' },
            { name: 'Node Webkit', value: 'nwapp' },
            { name: 'Electron', value: 'electron' }

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
        require('./init/bp-general');
        break;

    case 'webapp':
        require('./init/bp-webapp');
        break;

    case 'reactflux':
        require('./init/bp-reactflux');
        break;

    case 'benmstack':
        require('./init/bp-benmstack');
        break;

    case 'meanstack':
        require('./init/bp-meanstack');
        break;

    case 'jscomponent':
        require('./init/bp-jscomponent');
        break;

    case 'jqueryplugin':
        require('./init/bp-jqueryplugin');
        break;

    case 'nodeapp':
        require('./init/bp-nodeapp');
        break;

    case 'nwapp':
        require('./init/bp-nwapp');
        break;

        case 'ngapp':
            require('./init/bp-ngapp');
            break;

    case 'clitool':
        require('./init/bp-clitool');
        break;

    case 'npmpkg':
        require('./init/bp-npmpkg');
        break;

    case 'sinatra':
        require('./init/bp-sinatra');
        break;

    case 'slim':
        require('./init/bp-slim');
        break;

    case 'wordpress':
        require('./init/bp-wordpress');
        break;

    case 'wpplugin':
        require('./init/bp-wpplugin');
        break;

    case 'jekyll':
        require('./init/bp-jekyll');
        break;

    case 'harp':
        require('./init/bp-harp');
        break;

    case 'cprogram':
        require('./init/bp-cprogram');
        break;

    case 'shellscript':
        require('./init/bp-shellscript');
        break;

    case 'ionic':
        require('./init/bp-ionic');
        break;

    case 'electron':
        require('./init/bp-electron');
        break;

    }

});
