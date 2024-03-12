const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const app = express();

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log("Database Connected Succesfully...");
    app.listen(PORT, () => {
      console.log(`And Server Running on PORT  ${PORT}...`);
    });
  })
  .catch((err) => console.log(`${err.message}:Connection Failed...`));
