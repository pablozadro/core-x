const fs = require('node:fs/promises');
const path = require('path');


async function read(path) {
  const data = await fs.readFile(path, { encoding: 'utf8' });
  const parsed = JSON.parse(data);
  return parsed;
}


module.exports = {
  read
}