require('dotenv').config();
const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
});

const createUsersTableQuery = `
  CREATE TABLE IF NOT EXISTS notedata (
    id INT AUTO_INCREMENT PRIMARY KEY,
    notesdata VARCHAR(255) NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

// Function to execute the createUsersTableQuery
function createUsersTable() {
  db.query(createUsersTableQuery, function (err, results) {
    if (err) throw err;
    console.log('notedata table created successfully');
  });
}

db.connect(function (err) {
  if (err) throw err;
  console.log('Connected to the database');

  // Call the function to create the users table
  createUsersTable();
});

module.exports = db;
