const express = require("express");
const app = express();
const PORT = 9009;
const router = require("./routes/index");
app.use("/", router);
app.listen(PORT, (err) => {
  if (err) {
    console.log("Error in server");
  }
  console.log(`Server is running on port: ${PORT}`);
});
