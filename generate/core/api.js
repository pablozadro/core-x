const crypto = require("crypto");
const names = require('../data/names');


function generateRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function generateRandomDate() {
  const DIVIDER = '-';
  const nowEpoch = Date.now();
  const randomEpoch = generateRandomNumber(0, nowEpoch);
  const randomDate = new Date(randomEpoch);
  const year = randomDate.getFullYear();
  let month = randomDate.getMonth() + 1;
  let day = randomDate.getDate();

  if (month < 10) {
    month = `0${month}`;
  }

  if (day < 10) {
    day = `0${day}`;
  }

  return `${day}${DIVIDER}${month}${DIVIDER}${year}`;
}


function generateUUID() {
  return crypto.randomUUID();
}


function generateRandomName() {
  const i = generateRandomNumber(0, names.length-1);
  return names[i];
}





module.exports.GenerateAPI = {
  generateRandomNumber,
  generateRandomDate,
  generateUUID,
  generateRandomName
}