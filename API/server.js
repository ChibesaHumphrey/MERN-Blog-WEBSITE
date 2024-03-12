const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const app = express();

app.listen(PORT, () => {
  console.log(`Server connected and running on port : ${PORT}`);
});