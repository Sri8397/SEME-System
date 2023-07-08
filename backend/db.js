// const mongoose = require('mongoose');
require('dotenv').config();

// mongoose.set("strictQuery", false);

// const connectToMongo = () => {
//     mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() =>
//         console.log(`Connected to mongodb sucessfully`)
//     )
//     .catch((err) => console.log(err));
// }
// module.exports = connectToMongo; 


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = 'mongodb+srv://srikantagr8:sgtHlO5i3zfldLWU@cluster0.pgchj9k.mongodb.net/?retryWrites=true&w=majority'

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

module.exports = run; 
