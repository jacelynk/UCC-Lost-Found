const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const initializeRoutes = require('./routes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Update with your DB credentials
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'lost-found'
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

// Initialize routes
const apiRoutes = initializeRoutes(db);
app.use('/api', apiRoutes);

// Example route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});