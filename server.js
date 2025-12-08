const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000 
const path = require('path')

const htmlPath = path.join(__dirname, 'public/index.html')

// 50275: you should contact me for more information but I'm tired rn
// this array contains objects, some of which will be passed to the user -- decided at runtime
const planets = [
    {
        // https://www.pexels.com/search/earth/
        name: "Earth",
        src: "earth.png", // src: the filename of the image
        alt: "Picture of Earth"
        // todo add more planet information
    }
]; 

app.use(express.json());
app.use(express.static("public"))
app.use(express.static("images"))

app.get('/', (req, res) => {
    res.sendFile(htmlPath, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('An error has occurred');
        }
    });
})
app.get('/planets', (req, res) => {
    res.json(planets);
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})