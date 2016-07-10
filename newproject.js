#!/usr/bin/env node

'use strict';

var inquirer   = require('inquirer'),
    question   = require('./lib/prompts'),
    categories = question.category;

function main() {

    inquirer
        .prompt(categories)
        .then(function(answers) {

            var category = answers.category;

            // console.log(category);

            switch (category) {

                case 'general':
                    category = question.general;
                    options(category);
                    break;

                case 'desktop':
                    category = question.desktop;
                    options(category);
                    break;

                case 'webapp':
                    category = question.webapp;
                    options(category);
                    break;

                case 'mobile':
                    category = question.mobile;
                    options(category);
                    break;

                case 'api':
                    category = question.api;
                    options(category);
                    break;

                case 'fullstack':
                    category = question.fullstack;
                    options(category);
                    break;

                case 'staticgen':
                    category = question.staticgen;
                    options(category);
                    break;

                case 'tools':
                    category = question.tools;
                    options(category);
                    break;

                case 'libs':
                    category = question.libs;
                    options(category);
                    break;

            }

        });
}

function options(types) {
    inquirer
        .prompt(types)
        .then(function(answers) {
            var boilerplate = answers.type;
            console.log('Initializing %s boilerplate...', boilerplate);
            require('./init/bp-' + boilerplate);
        });
}

main();
