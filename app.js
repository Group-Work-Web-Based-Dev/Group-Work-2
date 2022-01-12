//Requires the Express module //
var express = require("express");
var path = require("path");
//Calls the express function to start a new Express application //
var app = express();

//Requires  the  apiRouter  module/
var apiRouter = require("./routes");

//The path-segments with the current directory by using express static//
var staticPath = path.resolve(__dirname, "public");

//middleware function of static function//
app.use(express.static(staticPath));

//middleware function at the path which is being specified to connect the API router//
app.use("/", apiRouter);

const PORT = 3000
let hostname = "0.0.0.0";

// listen the connections on the specified host and port that been defined//
app.listen(PORT, hostname, () => {
  console.log(`Listening on port: ${PORT}`);
});