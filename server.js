const express = require("express");
const app = express();

app.set("view engine ", "ejs");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello");
});
