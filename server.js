const express = require('express')
const app = express()
const session = require('express-session');
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

// const authRoutes = require('./routes/auth');
// const profileRoutes = require('./routes/profile');

const PORT = process.env.PORT || 3000 
const path = require('path')

app.use(express.json());
let x = path.join(__dirname, '..', 'images');
console.log(x)
app.use(express.static(x));
app.use(express.static("../pages")) // currently unused
app.use(express.static(__dirname))

// 50275: you should contact me for more information but I'm tired rn
// this array contains objects, some of which will be passed to the user -- decided at runtime


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'), (err) => {
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

// View engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


// // Body parsing
// app.use(express.urlencoded({ extended: false }));

// // Session
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET || 'dev-secret-change-me',
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       httpOnly: true,
//       maxAge: 1000 * 60 * 60 // 1 hour
//     }
//   })
// );

// // Expose session user + messages to all views
// app.use((req, res, next) => {
//   if (req.session.userId) {
//     res.locals.currentUser = {
//       id: req.session.userId,
//       username: req.session.username,
//       email: req.session.email
//     };
//   } else {
//     res.locals.currentUser = null;
//   }

//   res.locals.success = req.session.success || null;
//   res.locals.error = req.session.error || null;

//   delete req.session.success;
//   delete req.session.error;

//   next();
// });

// // Routes
// app.use('/', authRoutes);
// app.use('/', profileRoutes);

// // Root
// app.get('/', (req, res) => {
//   if (req.session.userId) return res.redirect('/dashboard');
//   res.redirect('/login');
// });


// Error handler
// app.use((err, req, res, next) => {
//   console.error(err);
//   res.status(500).send('Something went wrong.');
// });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'), (err) => {
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