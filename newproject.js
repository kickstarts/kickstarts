#!/usr/bin/env node

var inquirer = require('inquirer');
var prompt = [
    {
        choices: [
            { name: "Assemble", value: "assemble" },
            { name: "Docpad", value: "docpad" },
            { name: "General", value: "general" },
            { name: "Ghost", value: "ghost" },
            { name: "Jekyll", value: "jekyll" },
            { name: "Harp", value: "harp" },
            { name: "Mobile", value: "mobile" },
            { name: "Node", value: "node" },
            { name: "Rails", value: "rails" },
            { name: "WordPress", value: "wordpress" }
        ],
        name: 'boilerplate',
        message: 'Wich boilerplate method would you like to use?',
        type: 'list'
    }
];

inquirer.prompt(prompt, function(answers) {

    var boilerplate = answers.boilerplate;

    switch (boilerplate) {

        case 'assemble':
            require('./lib/bp-assemble');
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
