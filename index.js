#!/usr/bin/env node
'use strict';

const program = require('commander');
const fse = require('fs-extra')
const path = require('path');

const generate = (name, options) => {
    
    const componentsPath = `${__dirname}/src/components`;
    fse.ensureDirSync(componentsPath)
    
    const templateType = options.single ? 'single' : 'split';
    const templatePath = `${__dirname}/templates/${templateType}`;

    const newComponentPath = `${componentsPath}/${name}`;
    fse.removeSync(newComponentPath);
    fse.ensureDirSync(newComponentPath)
    
    const filesToCreate = fse.readdirSync(templatePath);

    filesToCreate.forEach(file => {
      
      const templateFilePath = `${templatePath}/${file}`;
      const templateFileContent = fse.readFileSync(templateFilePath, 'utf8');
      const newComponentFile = `${newComponentPath}/${file.replace('component', name)}`;

      fse.outputFileSync(newComponentFile, templateFileContent);

    });
}

program
    .arguments('<name>')
    .option('-s, --single', 'Componente Single-File')
    .action(generate);
program.parse(process.argv);