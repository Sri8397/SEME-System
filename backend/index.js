const express = require('express');
const connectToMongo = require('./db');
const cors = require('cors');
require('dotenv').config(); 

connectToMongo();

const app = express();
app.use(express.json());
app.use(cors());

// Using routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/vehicles', require('./routes/vehicle'));
app.use('/api/entries', require('./routes/entries'));

app.listen(process.env.PORT, (() =>
    console.log(`Listening to the port at http://localhost:${process.env.PORT}`)
)); 