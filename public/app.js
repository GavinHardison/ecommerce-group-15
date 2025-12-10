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

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// it seems like Gavin made this redundant. makes authentication easier to add actually

// // If you run the HTML file directly, destroy the website. You must run server.js. 
// if (!window.location.host || window.location.protocol.substring(0, "file:".length) == "file:"){
//     document.body.innerHTML = ""; 
//     let message = "You aren't opening this page correctly. You need to run server.js, then connect to http://localhost:<port>."; 
//     alert(message); 
// }
// 
// (async function() { 
//     let response = await fetch(`${window.location.origin}/planets`); 
//     if (!response.ok){
//         // p.textContent = `Error Status: ${response.status}.`;
//         document.body.style.backgroundColor = "red";
//         // return;
//     }
//     else{
//         let data = await response.json(); 
//         if (!data.ok){
//             // p.textContent = "Couldn't find that word.";
//             document.body.style.backgroundColor = "blue";
//         }
// 
//         // Remove all planets from the website; prepare to show the new ones
//         planetsLeft = document.getElementById("planets-left");  
//         planetsRight = document.getElementById("planets-right"); 
//         planetsLeft.innerHTML = ""; 
//         planetsRight.innerHTML = ""; 
// 
//         // 50275 TODO: load more; make solar systems distinct
//         let left = true; 
//         for(let planet of data[0][0].planets){
//             // console.log(planet); 
//             
//             let image = document.createElement("img");
//             image.id = "planet-image";
//             image.src = planet.src; 
//             image.loading = "lazy";
// 
//             let header = document.createElement("h4");
//             header.id = "planet-text"; 
//             header.textContent = `${planet.name}: ${planet.price}`;  
//             header.style.color = "white"; // this should be css
//             
//             let divider = document.createElement("div"); 
//             divider.id = "planet-container";
//             divider.appendChild(image); 
//             divider.appendChild(header); 
// 
//             // Alternate adding planets between left and right side
//             if (left){
//                 planetsLeft.appendChild(divider); 
//             } else {
//                 planetsRight.appendChild(divider); 
//             }
//             left = !left; 
//         }
//     }
//     document.body.style.backgroundColor = "lightblue";
// })(); // <--- Immediately call the function
// 