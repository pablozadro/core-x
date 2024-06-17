const path = require('path');
const { GenerateAPI } = require('./core/api');
const lib = require('./core/lib');


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


function CreateModel(config, cb) {
  if(!config.size) {
    throw new Error('Size is required.')
  }
  const collection = [];

  for (let i=1;i<config.size+1;i++) {
    const item = cb(GenerateAPI, i);
    collection.push(item);
  }

  return collection;
}


const collection = CreateModel({ size: 10 }, (api, i) => {
  const name = api.generateRandomName();
  const email = `${name}@localhost.io`;

  return {
    id: i,
    uuid: api.generateUUID(),
    info: {
      name,
      email
    },
    created: api.generateRandomDate()
  };
})

lib.writeFile(
  path.resolve(__dirname, '../src/data/users.json'),
  collection,
  err => {
    if(err) {
      console.log('Error creating collection...');
      console.error(err);
      return;
    }
    console.log('Collection created successfully.')
  }
)
