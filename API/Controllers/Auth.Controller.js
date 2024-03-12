const express = require("express");
const UserModel = require("../Models/User.model.js");
const createError = require("http-errors");
const bcryptjs = require("bcryptjs");

exports.signUp = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new UserModel({
      username,
      email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    res.status(200).send("User Sign-up Successfull ...");
  } catch (error) {
    return next(createError(409, error.message));
    next();
  }
};

exports.signIn = async (req, res, next) => {
  res.send("<h1>Sign-in Route</h1>");
};
