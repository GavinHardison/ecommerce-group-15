const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000 
const path = require('path')

const htmlPath = path.join(__dirname, 'public/index.html')

const planets = [
    "sun"
]; 

app.use(express.json());
app.use(express.static("public"))

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