const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const path = require('path')

const htmlPath = path.join(__dirname, 'public/index.html')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(htmlPath, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('An error has occurred');
        }
    });
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})