const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;

// const { MongoClient } = require('mongodb');
//  const dotenv = require('dotenv');

// dotenv.config();

//  const uri = process.env.MONGO_URI;

//  const client = new MongoClient(uri, {
//    serverSelectionTimeoutMS: 5000, // Optional: Increase server selection timeout
//  });

//  async function connectDB() {
//    try {
//      await client.connect();
//      console.log('Connected to MongoDB!');
//    } catch (err) {
//      console.error('Failed to connect to MongoDB:', err);
//      process.exit(1);
//    }
//  }

//  module.exports = { connectDB, client };
