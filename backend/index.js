const express = require('express');
const connectToMongo = require('./db');
const cors = require('cors');

connectToMongo();

const app = express();
const PORT = 4000;
app.use(express.json());
app.use(cors());

// Using routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/vehicles', require('./routes/vehicle'));
app.use('/api/entries', require('./routes/entries'));

app.listen(PORT, (() =>
    console.log(`Listening to the port at http://localhost:${PORT}`)
)); 