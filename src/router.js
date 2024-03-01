const express = require('express');
const router = express.Router();
const Ctrl = require('@/controller')


router.get('', Ctrl.Landing);


module.exports = router;
