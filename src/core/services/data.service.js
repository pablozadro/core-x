const fs = require('node:fs/promises');
const path = require('path');
const FileService = require('@/core/services/file.service');

const DATA_DIR = path.resolve(__dirname, '../../data');

async function read(fileName) {
  const filePath = path.resolve(DATA_DIR, `${fileName}.json`);
  const data = await FileService.read(filePath);
  return data;
}

module.exports = {
  read
}