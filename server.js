const express = require('express');
const path = require('path');
const session = require('express-session');

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

// serve mercury product page
app.get('/products/mercury', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'products', 'mercury.html'), (err) => {
        if (err) {
            console.error(err)
            res.status(500).send('An error has occurred')
        }
    })
})

app.get('/products/venus', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'products', 'venus.html'), (err) => {
        if (err) {
            console.error(err)
            res.status(500).send('An error has occurred')
        }
    })
})

app.get('/products/earth', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'products', 'earth.html'), (err) => {
        if (err) {
            console.error(err)
            res.status(500).send('An error has occurred')
        }
    })
})

app.get('/products/mars', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'products', 'mars.html'), (err) => {
        if (err) {
            console.error(err)
            res.status(500).send('An error has occurred')
        }
    })
})

app.get('/products/jupiter', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'products', 'jupiter.html'), (err) => {
        if (err) {
            console.error(err)
            res.status(500).send('An error has occurred')
        }
    })
})

app.get('/products/saturn', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'products', 'saturn.html'), (err) => {
        if (err) {
            console.error(err)
            res.status(500).send('An error has occurred')
        }
    })
})

app.get('/products/uranus', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'products', 'uranus.html'), (err) => {
        if (err) {
            console.error(err)
            res.status(500).send('An error has occurred')
        }
    })
})

app.get('/products/neptune', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'products', 'neptune.html'), (err) => {
        if (err) {
            console.error(err)
            res.status(500).send('An error has occurred')
        }
    })
})

app.get('/products/tic241249530b', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'products', 'tic241249530b.html'), (err) => {
        if (err) {
            console.error(err)
            res.status(500).send('An error has occurred')
        }
    })
})

app.get('/products/hd189773b', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'products', 'hd189773b.html'), (err) => {
        if (err) {
            console.error(err)
            res.status(500).send('An error has occurred')
        }
    })
})

app.get('/products/toi849b', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'products', 'toi849b.html'), (err) => {
        if (err) {
            console.error(err)
            res.status(500).send('An error has occurred')
        }
    })
})

app.get('/products/wasp12b', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'products', 'wasp12b.html'), (err) => {
        if (err) {
            console.error(err)
            res.status(500).send('An error has occurred')
        }
    })
})

// send planets JSON
app.get('/planets', (req, res) => {
    res.json(starSystems)
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








app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
