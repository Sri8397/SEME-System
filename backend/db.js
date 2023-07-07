const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/seme";


const connectToMongo = () => {
    mongoose.connect(mongoURI).then(() =>
        console.log(`Connected to mongodb sucessfully`)
    );
}
module.exports = connectToMongo; 