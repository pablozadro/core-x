const express = require('express');
const router = express.Router();
const Landing = require('@/features/landing/landing.controller');
const Users = require('@/features/users/users.controller');


router.get('', Landing.Landing);
router.get('/users', Users.GetUsers);


module.exports = router;
