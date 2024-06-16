const path = require('path');
const fs = require('fs');
const url = require('url');


function getArgs() {
  const args = {};

  process.argv.slice(2).forEach(arg => {
    const split = arg.split('=');

    if (split.length === 1) {
      args[arg] = true;
    }

    if (split.length === 2) {
      if(split[0].slice(0,2) === '--') {
        args[split[0].slice(2,split[0].length)] = split[1];
      } else {
        args[split[0]] = split[1];
      }
    }
  })

  return args;
}


function getUrlFromPath(path) {
  if (!fs.existsSync(path)) {
    throw new Error(`File ${path} doest not exists.`)
  }

  const _url = url.pathToFileURL(path);
  return _url.href;
}


function generateCollection(model, size) {
  const collection = [];
  
  for(let i=1; i<=size; i++) {
    const item = model(i);
    collection.push(item);
  }

  return collection;
}


function writeCollection(filePath, collection, cb) {
  const data = JSON.stringify(collection);

  fs.writeFile(
    filePath,
    data,
    err => {
      cb(err);
    }); 
}



module.exports = {
  getArgs,
  getUrlFromPath,
  generateCollection,
  writeCollection
}