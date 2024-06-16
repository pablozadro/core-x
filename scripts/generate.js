const path = require('path');
const fs = require('fs');


/**
 * Settings
 */

const DATA_DIR = path.resolve(__dirname, '../src/data');

const models = {
  user: i => {
    return {
      id: i, name: `User ${i}`
    }
  }
};



/**
 * Main
 */

const args = processArgs();

console.log('-> Generating...');
console.log('-> args', args);

const collection = generate(args.size, models[args.model]);
writeJson(collection, 'users-g-10');


/**
 * ----------------------------------------------------------------------------------------------- *
 * -- Functions ---------------------------------------------------------------------------------- *
 * ----------------------------------------------------------------------------------------------- *
 */


function generate(size, model) {
  const collection = [];
  for(let i=1; i<=size; i++) {
    const item = model(i);
    collection.push(item);
  }
  return collection;
}


function writeJson(collection, filename, cb) {
  const data = JSON.stringify(collection);
  const filePath = path.resolve(DATA_DIR, `${filename}.json`);
  fs.writeFile(
    filePath,
    data,
    err => {
      if(err) {
        console.error(err);
      } else {
        console.log('-> File writted successfully');
        console.log('file', filePath);
      }
      if(!cb) return;
      cb(err);
    }); 
}


function processArgs() {
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
        args[split[0]] = split[1]
      }
    }
  })
  return args;
}