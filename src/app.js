const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const router = require('@/app.router');
const errorMiddleware = require('@/core/middlewares/error.middleware');


/**
 * App
 */

const app = express();
app.use(cors());
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
