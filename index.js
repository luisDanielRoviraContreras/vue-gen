#!/usr/bin/env node
'use strict';

const program = require('commander');
const files = require('./files');
const clear = require('clear');

const componentsPath = './src/components'

if (files.directoryExists(componentsPath)) {
    process.exit();
}

const generate = (name, options) => {
    console.log(name);
}

program
    .arguments('<name>')
    .version('0.0.1')
    .action(generate);
program.parse(process.argv);