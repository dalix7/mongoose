//1
const express = require("express");
//5
const fs = require("fs");
const v = require("./verif");

const app = express();

const port = 5501;

//creating a router
app.get("/", v, (req, res) => {
  fs.readFile("./HomePage.html", "utf-8", (err, data) => {
    err ? res.end("an ERROR has accurd") && console.error(err) : res.end(data);
  });
});

app.get("/HomePage.html", v, (req, res) => {
  fs.readFile("./HomePage.html", "utf-8", (err, data) => {
    err ? res.end("an ERROR has accurd") && console.error(err) : res.end(data);
  });
});

app.get("/Contactus.html", v, (req, res) => {
  fs.readFile("./ContactUs.html", "utf-8", (err, data) => {
    err ? res.end("an ERROR has accurd") && console.error(err) : res.end(data);
  });
});

app.get("/OurServices.html", v, (req, res) => {
  fs.readFile("./OurServices.html", "utf-8", (err, data) => {
    err ? res.end("an ERROR has accurd") && console.error(err) : res.end(data);
  });
});

app.listen(port, (err) => {
  err
    ? console.log(`server is failed ${err}`)
    : console.log(`server is running on ${port}...`);
});
