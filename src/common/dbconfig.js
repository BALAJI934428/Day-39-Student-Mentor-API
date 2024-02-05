const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
// const env = require('../../src/')
const uri = "mongodb://localhost:27017";
console.log(uri);

async function connectDB() {
  try {
    await mongoose.connect(uri);
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectDB;
