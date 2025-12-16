const planets = require("./planets"); 
const app = require("./expressApp"); 

const {closeDb, addProduct, getProductByName, getProductById } = require("./db/db.js");

async function initializeData() {
    console.log("before");
    for (const planet of planets) {
        try {
            await addProduct(planet); 
        } catch (error) {
            if (!error.message.includes('SQLITE_CONSTRAINT')) {
                console.error('Error adding product:', error);
            }
        }
    }
    console.log("middle");
    const firstPlanet = await getProductById(1); 
    console.log("after");
    console.log(firstPlanet);
}

async function startServer() {
    // 1. Wait for database initialization to fully complete
    await initializeData(); 

    // 2. Start the Express server ONLY after the data is ready
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

// Kick off the combined process
startServer();