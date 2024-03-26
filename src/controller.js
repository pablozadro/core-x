const config = require('@/config');
const createError = require('http-errors');
const FileService = require('@/services/file.service');


const Landing = (req, res, next) => {
  return res.json({
    message: `Welcome ${config.APP_TITLE} V1`,
    payload: null,
    error: null
  })
}


const GetUsers = async (req,res,next) => {
  try {
    const users = await FileService.read('users');
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