const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

app.set("view engine", "ejs"); // Removed extra space

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

//This is user route Pages

app.get("/user", (req, res) => {
  res.send("This is a User page");
});

mongoose.connect(process.env.MONGODB_API);

const Schema = mongoose.Schema;

const dummySchema = new Schema({
  count: Number,
  email: String,
});

const dummyModel = mongoose.model("mongodb_practice", dummySchema);

const DummyData = [
  {
    email: "test@gmail.com",
    count: 10,
  },
  {
    email: "test@gmail.com",
    count: 20,
  },
];

dummyModel
  .insertMany(DummyData)
  .then((result) => {
    console.log("Document inserted successfully:", result);
  })
  .catch((error) => {
    console.error("Error inserting document:", error);
  });

// dummyModel
//   .findOneAndUpdate({ count: 20 }, { $set: { count: 30 } }, { new: true })
//   .then((updatedDocument) => {
//     console.log("Document updated successfully:", updatedDocument);
//   })
//   .catch((error) => {
//     console.error("Error updating document:", error);
//   });

dummyModel
  .updateMany(
    { email: "test@gmail.com" },
    { $set: { email: "dhanush@gmail.com" } },
    { new: true }
  )
  .then((document) => {
    console.log("Updated document", document);
  })
  .catch((error) => {
    console.log("Error updating document:", error);
  });
