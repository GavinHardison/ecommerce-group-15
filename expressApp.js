// Starts the express server. Exports express app. 
const express = require('express');
const path = require('path');
const session = require('express-session');
// const planets = require("./planets"); 
const planets = require("./server"); 

const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');

const app = express();
const PORT = process.env.PORT || 3000;

// View engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Body parsing
app.use(express.urlencoded({ extended: false }));

// Session
app.use(
    session({
        secret: process.env.SESSION_SECRET || 'dev-secret-change-me',
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 // 1 hour
        }
    })
);

// Expose session user + messages to all views
app.use((req, res, next) => {
    if (req.session.userId) {
        res.locals.currentUser = {
            id: req.session.userId,
            username: req.session.username,
            email: req.session.email
        };
    } else {
        res.locals.currentUser = null;
    }

    res.locals.success = req.session.success || null;
    res.locals.error = req.session.error || null;

    delete req.session.success;
    delete req.session.error;

    next();
});

// Routes
app.use('/', authRoutes);
app.use('/', profileRoutes);

// Root
app.get('/', (req, res) => {
    if (req.session.userId) return res.redirect('/dashboard');
    res.redirect('/login');
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Something went wrong.');
});

// serve cart.html
app.get('/cart', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cart.html'), (err) => {
        if (err) {
            console.error(err)
            res.status(500).send('An error has occurred')
        }
    })
})

app.get('/login', (req, res) => {
    res.redirect('/login')
    // res.sendFile(path.join(__dirname, 'public', 'login.html'), (err) => {
    //     if (err) {
    //         console.error(err)   
    //         res.status(500).send('An error has occurred')
    //     }
    // })
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'), (err) => {
        if (err) {
            console.error(err)
            res.status(500).send('An error has occurred')
        }
    })
})

app.get('/faq', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'faq.html'), (err) => {
        if (err) {
            console.error(err)
            res.status(500).send('An error has occurred')
        }
    })
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'), (err) => {
        if (err) {
            console.error(err)
            res.status(500).send('An error has occurred')
        }
    })
})

app.get('/cart', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cart.html'), (err) => {
        if (err) {
            console.error(err)
            res.status(500).send('An error has occurred')
        }
    })
})

// serve all product pages at once actually
app.get('/products/:planet', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', "products", 'mercury.html'), (err) => {
        if (err) {
            console.error(err)
            res.status(500).send('An error has occurred')
        }
    })
})

// // serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'), (err) => {
        if (err) {
            console.error(err)
            res.status(500).send('An error has occurred')
        }
    })
})
// send planets JSON
// it would be better if you sent a version with the descriptions sent by default, but I'm out of time
app.get('/planets', (req, res) => {
    res.json(planets)
})
// planets.forEach(product => addProduct(product.name, "description", product.src, product.price));

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
module.exports = {app, PORT}; 