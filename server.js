// ./planets.js: A file that must be run manually by the host. Adds all planet objects to the database. Does not stack. 
// ./expressApp.js: A file that contains all express-related code. 
// ./server.js: A file containing code I haven't organized yet. 

const {closeDb, addProduct, getProductByName, getProductById, getAllProducts} = require("./db/db.js");
var planets = undefined; 

async function startServer() {
    planets = await getAllProducts(); 
    module.exports = planets;
    const {app, PORT} = require("./expressApp"); 
}

// Kick off the combined process
startServer();