const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const RoadmapSchema = new Schema({
  author: {
    type: String,
    require: true
  },
  author_id: {
    type: String,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  category: {
    type: String,
    require: true
  },
  time_completion: {
    type: String,
    require: false,
    default: "The author did not put a time completion"
  },
  date: {
    type: Date,
    default: Date.now
  },
  roadmap: {
    type: "object",
    require: true
  },
  roadmap_debrief: {
    type: String,
    require: true,
    default: "The author did not put any description"
  },
  author_profile_pic: {
    type: String,
    default: "The author does not have a profile pic"
  },
  author_bio_text: {
    type: String,
    default: ""
  },
  views: {
    type: Number,
    default: 0
  }
});

//Models are responsible for creating and reading documents from the underlying MongoDB database
//

module.exports = Roadmap = mongoose.model("roadmap", RoadmapSchema);
