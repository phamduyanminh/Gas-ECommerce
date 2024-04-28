'use strict'

const mongoose = require('mongoose');

const connectString = `mongodb://localhost:27017/shopDEV`;

class Database{
    constructor(){
        this.connect()
    }

    //Connect
    connect(type = 'mongodb'){
        //For dev environment
        if(1 === 1){
            mongoose.set('debug', true)
            mongoose.set('debug', {color: true})
        };

        mongoose.connect(connectString).then(_ => console.log('Connected Mongoose Pro Success'))
        .catch(err => console.log('Error Connect'));
    }

    static getInstance(){
        if(!Database.instance){
            Database.instance = new Database()
        }

        return Database.instance
    }
}

const instanceMongoDB = Database.getInstance();
module.exports = instanceMongoDB;