const express = require("express");

exports.getUsers = (req, res) => {
  res.send("<h1>Get All Users Route...</h1>");
};
exports.getUser = (req, res) => {
  res.send("<h1>Get Single User by ID Route...</h1>");
};
