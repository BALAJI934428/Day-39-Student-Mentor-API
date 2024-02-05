const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
// const env = require('../../src/')
const uri = "mongodb+srv://StudentMentor:xWACoIgvbOirEZqH@api.ujcyrov.mongodb.net/?retryWrites=true&w=majority";
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
