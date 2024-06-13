const fs = require('node:fs/promises');
const path = require('path');
const FileService = require('@/core/services/file.service');


async function read(fileName) {
  const filePath = path.resolve(__dirname, `../data/${fileName}.json`);
  const data = await FileService.read(filePath);
  return data;
}


module.exports = {
  read
}