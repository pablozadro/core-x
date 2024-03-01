const dotenv = require('dotenv');
const development = require('./development');
const production = require('./production');

const dotenvConfig = dotenv.config()
const dotenvParsed = dotenvConfig.parsed;
const configs = { development, production };
const NODE_ENV = process.env.NODE_ENV || 'development';

const config = configs[NODE_ENV];

module.exports = {
  ...config,
  ...dotenvParsed
}