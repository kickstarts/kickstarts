#!/usr/bin/env node

'use strict';

const inquirer = require('inquirer');
const question = require('./lib/prompts');

inquirer
.prompt(question)
.then(function(answers) {
    var boilerplate = answers.type;
    console.log('Initializing %s boilerplate...', boilerplate);
    require('./init/bp-' + boilerplate);
});
