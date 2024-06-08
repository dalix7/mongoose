// 1- require

const mongoose = require("mongoose");

// 2- connectDB

const connectDB = async () => {
  try {
    // step 1
    await mongoose.connect(process.env.DB_URI);

    // step 2
    console.log("database connected");
  } catch (error) {
    console.log(`database is not connected ${error}`);
  }
};

//export

module.exports = connectDB;
