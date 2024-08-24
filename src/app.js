/**
 * App.js is the middleware
 */
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');

const app = express();

console.log(`Process: `, process.env);

//Init middlewares
//Morgan has 5 mode types: dev, combined, common, short, tiny
//Helmet is used for protection from third parties accessing to your website looking for loop holes
//Compression is used for improving bandwidth transmission 
app.use(morgan("dev"));
app.use(helmet());
app.use(compression())

//Init db
require('./dbs/init.mongodb');
const {countConnect} = require('./helpers/check.connect');
const {checkOverload} = require('./helpers/check.connect');
countConnect();
checkOverload();

//Init routes
app.use('/', require('./routes'))

//Handle errors

module.exports = app;