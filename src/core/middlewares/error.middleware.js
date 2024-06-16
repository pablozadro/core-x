const createError = require('http-errors');

module.exports = [
  (req,res,next) => {
    const err = createError(404, 'Resource Not Found');
    next(err);
  },
  (error, req, res, next) => {
    const status = error.status || 500;
    const message = error.message || 'Unknown Error';
    const cause = error.cause || null;

    return res.status(status).json({
      payload: null,
      error: {
        status,
        message,
        cause
      }
    })
  },
]