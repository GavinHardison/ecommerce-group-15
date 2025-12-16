const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const dbPath = path.join(__dirname, '..', 'data.sqlite');
const db = new sqlite3.Database(dbPath);

// Create users table
db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`
  );
  // I know I will need this later
  // db.run(`DROP TABLE IF EXISTS products`,
  //   (err) => {
  //     if (err) {
  //       console.error("Error dropping products table:", err.message);
  //     } else {
  //       console.log("Products table dropped successfully.");
  //     }
  //   }
  // );
  db.run(
    `CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT UNIQUE NOT NULL, 
      description TEXT,
      src TEXT NOT NULL,
      price FLOAT NOT NULL, 
      stock INTEGER NOT NULL
    )`
  );
});
function addProduct({name, description, src, price}){
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO products (name, description, src, price, stock) VALUES (?, ?, ?, ?, ?)`;
    // planets are unique, you won't have clones
    db.run(sql, [name, description, src, price, 1], function (err) {
      if (err) return reject(err);
      resolve({ id: this.lastID, name: name, price: price });
    });
  });
}

function getProductByName(name){
  return new Promise((resolve, reject) => {
    db.get(`SELECT * FROM products WHERE name = ?`, [name], (err, row) => {
      if (err) return reject(err);
      resolve(row || null);
    });
  });
}

function getProductById(id){
  return new Promise((resolve, reject) => {
    db.get(`SELECT * FROM products WHERE id = ?`, [id], (err, row) => {
      if (err) return reject(err);
      resolve(row || null);
    });
  });
}
function getAllProducts() {
  return new Promise((resolve, reject) => {
    // db.all() is used here to select ALL rows from the 'products' table.
    // The result (rows) will be an array of all product objects.
    db.all(`SELECT * FROM products`, (err, rows) => {
      if (err) {
        // If there's an error, reject the promise
        return reject(err);
      }
      // Resolve with the array of all rows (products)
      resolve(rows);
    });
  });
}

function createUser({ username, email, passwordHash }) {
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)`;
    db.run(sql, [username, email, passwordHash], function (err) {
      if (err) return reject(err);
      resolve({ id: this.lastID, username, email });
    });
  });
}

function findUserByUsername(username) {
  return new Promise((resolve, reject) => {
    db.get(`SELECT * FROM users WHERE username = ?`, [username], (err, row) => {
      if (err) return reject(err);
      resolve(row || null);
    });
  });
}

function findUserByEmail(email) {
  return new Promise((resolve, reject) => {
    db.get(`SELECT * FROM users WHERE email = ?`, [email], (err, row) => {
      if (err) return reject(err);
      resolve(row || null);
    });
  });
}

function findUserById(id) {
  return new Promise((resolve, reject) => {
    db.get(`SELECT * FROM users WHERE id = ?`, [id], (err, row) => {
      if (err) return reject(err);
      resolve(row || null);
    });
  });
}
function closeDb() {
  return new Promise((resolve, reject) => {
    db.close(err => {
      if (err) {
        console.error("Error closing database:", err.message);
        return reject(err);
      }
      console.log('Database connection closed.');
      resolve();
    });
  });
}

module.exports = {
  db,

  closeDb, 

  createUser,
  findUserByUsername,
  findUserByEmail,
  findUserById, 
  
  addProduct, 
  getProductByName, 
  getProductById,
  getAllProducts
};