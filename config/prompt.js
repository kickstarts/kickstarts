var inquirer = require('inquirer');
var prompt = [
    {
        choices: [
            { name: "Assemble", vaule: "assemble" },
            { name: "Docpad", vaule: "docpad" },
            { name: "General", vaule: "general" },
            { name: "Ghost", vaule: "ghost" },
            { name: "Jekyll", vaule: "jekyll" },
            { name: "Rails", vaule: "rails" },
            { name: "WordPress", vaule: "wordpress" }
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
            require('./boilerplate-assemble');
        break;

        case 'docpad':
            require('./boilerplate-docpad');
        break;

        case 'general':
            require('./boilerplate-general');
        break;

        case 'ghost':
            require('./boilerplate-ghost');
        break;

        case 'jekyll':
            require('./boilerplate-jekyll');
        break;

        case 'mobile':
            require('./boilerplate-mobile');
        break;

        case 'node':
            require('./boilerplate-node');
        break;

        case 'rails':
            require('./boilerplate-rails');
        break;

        case 'wordpress':
            require('./boilerplate-wordpress');
        break;

    }

});
