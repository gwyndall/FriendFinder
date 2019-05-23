// ==============================================================================
// DEPENDENCIES
// ==============================================================================

var express = require("express");
var path = require("path");
var fs = require("fs");

// ==============================================================================
// EXPRESS CONFIGURATION
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Takes in JSON input


app.post("/survey", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newMember = req.body;

  console.log(newMember);

  fs.appendFile(path.join(__dirname, './app/data/', 'friends.json'), JSON.stringify(newMember), (err) => {  
    if (err) throw err;
    console.log('File updated!');
});

  res.json(newMember);
});

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
