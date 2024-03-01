const config = require('@/config');

const Landing = (req, res, next) => {
  return res.json({
    message: `Welcome ${config.APP_TITLE} V1`,
    payload: null,
    error: null
  })
}

module.exports = {
  Landing
}