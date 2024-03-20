const express = require("express");
const router = express.Router();
const PostController = require("../Controllers/Post.Controller.js");
const { verifyToken } = require("../Utils/VerifyUser.js");

router.post("/create", verifyToken, PostController.create);
// router.get("/getposts", PostController.getPosts);
// router.delete(
//   "/deletepost/:postId/:userId",
//   verifyToken,
//   PostController.deletePost
// );
// router.put(
//   "/updatepost/:postId/:userId",
//   verifyToken,
//   PostController.upadtePost
// );

module.exports = router;
