const mongoose = require("mongoose");
require("dotenv").config();
const uri = process.env.MONGO_URI || "mongodb://localhost:27017/seme";

const connectToMongo = () => {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("Database connection established!");
    })
    .catch((err) => {
      console.log("Error connecting Database instance due to:", err);
    });
};

module.exports = connectToMongo;
