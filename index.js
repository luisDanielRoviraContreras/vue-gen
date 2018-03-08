#!/usr/bin/env node
'use strict';

const program = require('commander');
const fse = require('fs-extra')
const fs = require('fs');

const componentsPath = `${__dirname}/src/components`;
fse.ensureDirSync(componentsPath)

const generate = (name, options) => {
    
    const templateType = options.single ? 'single' : 'split';
    const templatePath = `${__dirname}/templates/${templateType}`;

    const newComponentPath = `${componentsPath}/${name}`;
    fse.ensureDirSync(newComponentPath)
    
    const filesToCreate = fs.readdirSync(templatePath);

    filesToCreate.forEach(file => {
      
      const templateFilePath = `${templatePath}/${file}`;
      const templateFileContent = fs.readFileSync(templateFilePath, 'utf8');

      const newComponentFile = `${newComponentPath}/${file}`;
      fse.outputFileSync(newComponentFile, templateFileContent)
    });
}

program
    .arguments('<name>')
    .option('-s, --single', 'Componente Single-File')
    .action(generate);
program.parse(process.argv);