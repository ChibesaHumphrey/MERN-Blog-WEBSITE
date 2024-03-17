const express = require("express");
const UserModel = require("../Models/User.model.js");
const createError = require("http-errors");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");

exports.signUp = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    if (
      !username ||
      !email ||
      !password ||
      username === "" ||
      email === "" ||
      password === ""
    ) {
      return next(createError(400, "All fields are required"));
    }
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new UserModel({
      username,
      email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    res.status(200).json("User Sign-up Successfull ...");
  } catch (error) {
    next(error);
  }
};

exports.signIn = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!email || !password || email === "" || password === "")
    return next(createError(400, "All fields are required"));

  try {
    const validUser = await UserModel.findOne({ email });
    if (!validUser)
      return next(
        createError(
          404,
          "Wrong Credentials,Refresh Page And Enter Correct Details"
        )
      );

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword)
      return next(
        createError(
          400,
          "Wrong Credentials,Refresh Page And Enter Correct Details"
        )
      );

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

    const { password: pass, ...rest } = validUser._doc;
    // isAdmin: validUser.isAdmin;
    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};
