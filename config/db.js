const { MongoClient } = require('mongodb');
 const dotenv = require('dotenv');

dotenv.config();

 const uri = process.env.MONGO_URI;

 const client = new MongoClient(uri, {
   serverSelectionTimeoutMS: 5000, // Optional: Increase server selection timeout
 });

 async function connectDB() {
   try {
     await client.connect();
     console.log('Connected to MongoDB!');
   } catch (err) {
     console.error('Failed to connect to MongoDB:', err);
     process.exit(1);
   }
 }

 module.exports = { connectDB, client };
