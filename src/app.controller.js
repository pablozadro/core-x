const debug = require('debug')('core-x:app:controller');
const createError = require('http-errors');
const config = require('@/config');
const DataService = require('@/core/services/data.service');



module.exports.GetUsers = async (req, res, next) => {
  try {
    const users = await DataService.read('users');
    res.json({ payload: { users }, error: null });
  } catch (e) {
    debug(e);
    const err = createError(500, 'Error reading users.');
    next(err);
  }
}
