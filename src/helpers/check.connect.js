'use strict'

const { default: mongoose } = require('mongoose');
const mongo = require('mongoose');
const os = require('os');
const process = require('process');
const _SECONDS = 5000;

//Count connection
const countConnect = () => {
    const numConnection = mongoose.connection.length;
    console.log(`Number of connection: ${numConnection}`);
};

//Check overload connection
const checkOverload = () => {
    setInterval(() => {
        const numConnection = mongoose.connections.length;
        const numCores = os.cpus().length;
        const memoryUsage = process.memoryUsage().rss;
        //Example each core in your device can handle maximum 5 connection
        const maxConnections = numCores * 5;
        console.log(`Active connection: ${numConnection}`);
        console.log(`Memory usage: ${memoryUsage/1024/1024}MB`);

        if(numConnection > maxConnections){
            console.log('Connection overload detected')
        };
    }, _SECONDS); //Monitor every 5s
};

module.exports = {
    countConnect
};