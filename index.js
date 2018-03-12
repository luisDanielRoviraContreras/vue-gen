#!/usr/bin/env node
'use strict';

const program = require('commander');
const fse = require('fs-extra')
const path = require('path');
const camelCase = require('camelcase');

const generate = (name, options) => {

    const nameCamelCase = camelCase(name);
    
    const componentsPath = `${__dirname}/src/components`;
    fse.ensureDirSync(componentsPath)
    
    const templateType = options.single ? 'single' : 'split';
    const templatePath = `${__dirname}/templates/${templateType}`;

    const newComponentPath = `${componentsPath}/${nameCamelCase}`;
    fse.removeSync(newComponentPath);
    fse.ensureDirSync(newComponentPath)
    
    const filesToCreate = fse.readdirSync(templatePath);

    filesToCreate.forEach(file => {
      
      const templateFilePath = `${templatePath}/${file}`;
      const templateFileContent = fse.readFileSync(templateFilePath, 'utf8');
      const newComponentFile = `${newComponentPath}/${file.replace(/component/g, nameCamelCase)}`;

      fse.outputFileSync(newComponentFile, templateFileContent.replace(/component/g, nameCamelCase));

    });
}

program
    .arguments('<name>')
    .option('-s, --single', 'Componente Single-File')
    .action(generate);
program.parse(process.argv);