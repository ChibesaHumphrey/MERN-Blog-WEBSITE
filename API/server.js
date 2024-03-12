const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const UserRouter = require("./Routes/User.Router.js");
const AuthRouter = require("./Routes/Auth.Router.js");
const Error = require("./Middlewares/Error.Middleware.js");
const PORT = process.env.PORT || 5000;
const app = express();
commit;

//Application Level Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route Level Middleware
app.use("/api/v1/auth", AuthRouter);
app.use("/api/v1/users", UserRouter);

//Error Handling Middleware
app.use(Error.pageNotFound, async (err, req, res, next) => {
  res.status(err.status || 500).json({
    Error: `Error status code (${err.status || 500}),  ${err.message}`,
  });
});

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log("Database Connected Succesfully...");
    app.listen(PORT, () => {
      console.log(`And Server Running on PORT  ${PORT}...`);
    });
  })
  .catch((err) => console.log(`${err.message}:Connection Failed...`));
