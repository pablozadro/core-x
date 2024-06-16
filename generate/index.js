const path = require('path');
const lib = require('./lib');

const DATA_DIR = path.resolve(__dirname, '../src/data');
const MODELS_DIR = path.resolve(__dirname, '../src/models');


const { model, size } = lib.getArgs();

if(!model) {
  throw new Error('Argument "model" is required');
}

if(!size) {
  throw new Error('Argument "size" is required');
}

const modelUrl = lib.getUrlFromPath(path.resolve(MODELS_DIR, `${model}.js`));


import(modelUrl)
  .then(modelModule => {
    const collection = lib.generateCollection(modelModule.default, size);
    const dataFilePath = path.resolve(DATA_DIR, `${model}-${size}.json`);

    lib.writeCollection(dataFilePath, collection, err => {
      if(err) {
        console.log('Error generating collection');
        console.error(err);
        return;
      }
      console.log('-> Collection generated successfully.')
    });
  })
  .catch(err => {
    throw new Error(err);
  })

