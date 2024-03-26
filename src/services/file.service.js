const fs = require('node:fs/promises');
const path = require('path');


async function read(fileName) {
  const filePath = path.resolve(__dirname, `../data/${fileName}.json`);
  const data = await fs.readFile(filePath, { encoding: 'utf8' });
  const parsed = JSON.parse(data);
  return parsed;
}


module.exports = {
  read
}