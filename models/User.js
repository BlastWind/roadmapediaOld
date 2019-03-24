const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  profile_picture: {
    type: String,
    default: "/static/media/user.9a3a77b0.svg"
  },
  bio: {
    type: String,
    trim: true,
    default: ""
  },
  savedRoadmap: {
    type: "object",
    default: []
  },
  createdRoadmap: {
    type: "object",
    default: []
  }
});
module.exports = User = mongoose.model("users", UserSchema);
