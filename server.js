/**
 * Server.js is for running the network of application
 **/

const app = require("./src/app");

//Declare the port number
const PORT = 3055;

const server = app.listen (3055, () => {
    console.log(`WSV eCommerce start with ${PORT}`)
});

process.on('SIGINT', () => {
    server.close(() => console.log(`Exit server express`))
});