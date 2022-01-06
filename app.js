var express = require("express");
var path = require("path");
var app = express();

var apiRouter = require("./routes");

var staticPath = path.resolve(__dirname, "public");
app.use(express.static(staticPath));

app.use("/", apiRouter);

const PORT = 3000
let hostname = "0.0.0.0";

app.listen(PORT, hostname, () => {
  console.log(`Listening on port: ${PORT}`);
});