const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");
const mongoURI = process.env.MONGO_URI;

mongoose
  .connect(mongoURI, { serverSelectionTimeoutMS: 10000 })
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

// Post Schema
const postSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  caption: { type: String, default: '' },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  comments: {
    type: Array,
    default: [],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  shares: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  picture: Buffer,
});

module.exports = mongoose.model("post", postSchema);