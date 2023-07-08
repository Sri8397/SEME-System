// Export mongoose
const mongoose = require("mongoose");
require('dotenv').config(); 
//Assign MongoDB connection string to Uri and declare options settings
const uri = process.env.MONGO_URI; 

// Declare a variable named option and assign optional settings
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    family: 4
};

// Connect MongoDB Atlas using 
const connectToMongo = () => {
    mongoose.connect(uri, options)
        .then(() => {
            console.log("Database connection established!");
        })
        .catch((err) => { console.log("Error connecting Database instance due to:", err); });
}; 

module.exports = connectToMongo; 
