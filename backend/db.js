const mongoose = require('mongoose');
require('dotenv').config(); 


const connectToMongo = () => {
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() =>
        console.log(`Connected to mongodb sucessfully`)
    );
}
module.exports = connectToMongo; 