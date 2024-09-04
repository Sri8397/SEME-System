const express = require("express");
const connectToMongo = require("./db");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8888;

connectToMongo();
app.use(express.static(path.join(__dirname, "..", "dist")));
app.use(express.static("public"));

app.use("/api/auth", require("./routes/auth"));
app.use("/api/vehicles", require("./routes/vehicle"));
app.use("/api/entries", require("./routes/entries"));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
