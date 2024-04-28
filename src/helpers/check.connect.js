'use strict'

const { default: mongoose } = require('mongoose');
const mongo = require('mongoose');

const countConnect = () => {
    const numConnection = mongoose.connection.length;
    console.log(`Number of connection: ${numConnection}`);
};

module.exports = {
    countConnect
};