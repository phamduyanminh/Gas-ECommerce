/**
 * App.js is the middleware
 */

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');

const app = express();

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
countConnect();

//Init routers
app.get('/', (req, res, next) => {
    const strCompress = 'Hello'
    return res.status(200).json({
        message: 'Welcome',
        metadata: strCompress.repeat(100000)
    })
});

//Handle errors

module.exports = app;