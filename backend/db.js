const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set("strictQuery", false);

const connectToMongo = () => {
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() =>
        console.log(`Connected to mongodb sucessfully`)
    )
    .catch((err) => console.log(err));
}
module.exports = connectToMongo; 