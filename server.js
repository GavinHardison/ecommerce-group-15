// ./planets.js: When run manually: attempts to add all planet objects to the database. Database doesn't accept duplicates. 
// ./expressApp.js: Contains all serverside express-related code.  
// ./server.js: A file containing code I haven't organized yet. 

const {closeDb, addProduct, getProductByName, getProductById, getAllProducts, dbReady} = require("./db/db.js");
async function function1(){
    await dbReady; 
    require("./planets") // reset products table.. sort of
}
async function startServer() {
    await function1(); 
    let planets = await getAllProducts(); 
    module.exports = planets;
    const {app, PORT} = require("./expressApp"); 
}

// Kick off the combined process
startServer();