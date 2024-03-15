const express = require("express");
const app = express();
const cors = require("cors");

app.set("view engine ", "ejs");

const PORT = process.env.PORT || 5000;

const data = {
  message: "This is a message",
};

app.use(cors());
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(data);
});
