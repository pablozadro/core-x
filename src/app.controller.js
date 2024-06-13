const createError = require('http-errors');
const config = require('@/config');
const DataService = require('@/core/services/data.service');


const Landing = (req, res, next) => {
  return res.json({
    message: `Welcome ${config.APP_TITLE} V1`,
    payload: {},
    error: null
  })
}


const GetUsers = async (req,res,next) => {
  try {
    const users = await DataService.read('users');
    res.json({
      message: 'Users fetched successfully.',
      payload: { users },
      error: null
    });
  } catch (e) {
    const err = createError(500, 'Error reading users.');
    next(err);
  }
}



module.exports = {
  Landing,
  GetUsers,
}