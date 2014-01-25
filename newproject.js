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
            require('./lib/boilerplate-assemble');
        break;

        case 'docpad':
            require('./lib/boilerplate-docpad');
        break;

        case 'general':
            require('./lib/boilerplate-general');
        break;

        case 'ghost':
            require('./lib/boilerplate-ghost');
        break;

        case 'jekyll':
            require('./lib/boilerplate-jekyll');
        break;

        case 'mobile':
            require('./lib/boilerplate-mobile');
        break;

        case 'node':
            require('./lib/boilerplate-node');
        break;

        case 'rails':
            require('./lib/boilerplate-rails');
        break;

        case 'wordpress':
            require('./lib/boilerplate-wordpress');
        break;

    }

});
