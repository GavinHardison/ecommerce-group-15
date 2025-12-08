const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000 
const path = require('path')

const htmlPath = path.join(__dirname, 'public/index.html')

// 50275: you should contact me for more information but I'm tired rn
// this array contains objects, some of which will be passed to the user -- decided at runtime
const starSystems = [
    [
        {
            name: "solarSystem",
            displayName: "Solar System",
            planets: [
                // TODO this should be loaded from an SQL database actually 
                // TODO track whether or not the object has been purchased
                // TODO shouldn't the alt text contain pricing information? 
                // https://www.pexels.com/search/earth/
                {
                    name: "Mercury",
                    src: "mercury.png",   
                    alt: "Picture of Mercury", 
                    price: 9.99
                }, {
                    name: "Venus", 
                    src: "venus.png", 
                    alt: "Picture of Venus",
                    price: 12.99
                }, {
                    name: "Earth",
                    src: "earth.png",
                    alt: "Picture of Earth",
                    price: 15.99
                }, {
                    name: "Mars",
                    src: "mars.png",
                    alt: "Picture of Mars", 
                    price: 18.99
                }, {
                    name: "Jupiter",
                    src: "jupiter.png",
                    alt: "Picture of Jupiter", 
                    price: 21.99
                }, {
                    name: "Saturn", 
                    src: "saturn.png",
                    alt: "Picture of Saturn", 
                    price: 24.99
                }, {
                    name: "Uranus", 
                    src: "uranus.png", 
                    alt: "Picture of Uranus", 
                    price: 27.99
                }, {
                    name: "Neptune", 
                    src: "neptune.png", 
                    alt: "Picture of Neptune", 
                    price: 30.99
                }
            ]
        }   
    ]
]; 

app.use(express.json());
app.use(express.static("public"))
app.use(express.static("images"))
app.use(express.static("pages"))

app.get('/', (req, res) => {
    res.sendFile(htmlPath, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('An error has occurred');
        }
    });
})
app.get('/planets', (req, res) => {
    res.json(starSystems);
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT} and the time is ${new Date()}`)
})