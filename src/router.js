const express = require('express');
const router = express.Router();
const Ctrl = require('@/controller')


router.get('', Ctrl.Landing);
router.get('/users', Ctrl.GetUsers);


module.exports = router;
