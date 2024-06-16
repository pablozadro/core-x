const express = require('express');
const router = express.Router();
const Ctrl = require('@/app.controller');


router.get('/users', Ctrl.GetUsers);


module.exports = router;
