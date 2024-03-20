const createError = require("http-errors");
const PostModel = require("../Models/Post.model.js");

exports.create = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(createError(403, "You are not allowed to create a post"));
  }
  if (!req.body.title || !req.body.content) {
    return next(createError(400, "Please provide all required fields"));
  }
  const slug = req.body.title
    .split(" ")
    .join("-")
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, "");
  const newPost = new PostModel({
    ...req.body,
    slug,
    userId: req.user.id,
  });
  try {
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    next(error);
  }
};
// exports.getPosts = async (req, res, next) => {};
// exports.upadtePost = async (req, res, next) => {};
// exports.deletePost = async (req, res, next) => {};
