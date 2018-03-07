const fse = require('fs-extra')
const path = require('path');

module.exports = {
  getCurrentDirectoryBase : () => {
    return path.basename(process.cwd());
  },

  directoryExists : (filePath) => {
    try {
      return fse.statSync(filePath).isDirectory();
    } catch (err) {
      return false;
    }
  },

  createDirectory: (filePath) => {
    try {
      return fse.mkdirSync(filePath);
    } catch (err) {
      return false;
    }
  },

  createFile: (filePath, content) => {
    try {
      return fse.outputFileSync(file, content);
    } catch (err) {
      return false;
    }
  }

};