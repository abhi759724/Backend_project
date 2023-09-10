// create router Instance
const express = require("express");
const app = express();
const PORT = 9009;

// get router access
const router = require("./routes/index");

// setup and view engine

app.set("view engine", "ejs");
app.set("views", "./views");

// default route
app.use("/", router);

// call the server
app.listen(PORT, (err) => {
  if (err) {
    console.log("Error in server");
  }
  console.log(`Server is running on port: ${PORT}`);
});
