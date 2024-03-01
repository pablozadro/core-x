const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const router = require('@/router');
const errorMiddleware = require('@/middlewares/error.middleware');


/**
 * App
 */

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



/**
 * Router & Middlewares
 */

app.use('/api/v1', router);
app.use('/api/v1', errorMiddleware);

module.exports = app;
