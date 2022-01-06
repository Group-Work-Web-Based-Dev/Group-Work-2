var express = require("express");
var path = require("path");
var app = express();

var apiRouter = require("./Jamesroutes");

var staticPath = path.resolve(__dirname, "public");
app.use(express.static(staticPath));

app.use("/routes", apiRouter);
app.listen(3000);