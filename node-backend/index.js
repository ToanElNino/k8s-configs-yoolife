const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
const port = 3001;

app.use(cors({
  origin: 'http://localhost:3000',  // Địa chỉ của frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Các phương thức HTTP cho phép
  allowedHeaders: ['Content-Type', 'Authorization'],  // Các headers cần thiết cho request
}));

// MySQL connection setup
const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

// Test MySQL connection
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Database!');
});

// Endpoint to get users
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
