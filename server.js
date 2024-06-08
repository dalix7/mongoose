// 1 - require express
const express = require("express");

// 2 - create instantce

const app = express();

// 5 - requiring dotenv & configure

require("dotenv").config();

// 8- middlewear body parser

app.use(express.json());

// 6- connecting database

const connectDB = require("./config/connectDB");
connectDB();

//7 - routes
app.use("/api/contact", require("./routes/contact.js"));

// 3 -  create PORT

const port = process.env.PORT;

// 4 - create server

app.listen(port, (err) => {
  err
    ? console.log(`server is failed ${err}`)
    : console.log(`server is running on ${port}...`);
});
