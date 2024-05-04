/**
 * Server.js is for running the network of application
 **/

const app = require("./src/app");

//Declare the port number
const PORT = process.env.PORT || 3056;

const server = app.listen (PORT, () => {
    console.log(`WSV eCommerce start with ${PORT}`)
});

process.on('SIGINT', () => {
    server.close(() => console.log(`Exit server express`))
});