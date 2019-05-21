const fs = require('fs');
var express = require("express");
var path = require("path");

var app = express();

// A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
app.get("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "friends.js"));
  });

// A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

app.post("/api/friends", function (req, res) { 
    fs.appendFile('./api/friends.js', res, 'utf8', callback);
 });