const debug = require('debug')('core-x:middleares:throttling');
const config = require('@/config');


function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


module.exports = (req, res, next) => {
  const delay = getRandom(config.throttling.min, config.throttling.max);
  debug(`Delay ${delay} ms`)
  setTimeout(() => next(), delay);
};