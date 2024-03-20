const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const UserRouter = require("./Routes/User.Router.js");
const AuthRouter = require("./Routes/Auth.Router.js");
const PostRouter = require("./Routes/Post.Router.js");
const Error = require("./Middlewares/Error.Middleware.js");
const PORT = process.env.PORT || 5000;
const app = express();

//Application Level Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Route Level Middleware
app.use("/api/v1/auth", AuthRouter);
app.use("/api/v1/users", UserRouter);
app.use("/api/v1/posts", PostRouter);

//Error Handling Middleware
app.use(Error.pageNotFound, async (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
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
