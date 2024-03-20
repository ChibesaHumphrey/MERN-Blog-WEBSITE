const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    content: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      default:
        "https://res.cloudinary.com/dneckxb9i/image/upload/v1710942627/pngegg-removebg-preview_vw3u0s.png",
    },
    category: {
      type: String,
      default: "uncategorized",
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const PostModel = mongoose.model("Post", userSchema);

module.exports = PostModel;
