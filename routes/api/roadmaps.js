const express = require("express");
const router = express.Router();

// Item Model
const Roadmap = require("../../models/Roadmap");
const User = require("../../models/User");

router.get("/getroadmapcount", (req, res) => {
  Roadmap.count().then(count => res.json(count));
});

router.get("/getroadmapviewscount", (req, res) => {
  Roadmap.aggregate([
    {
      $group: {
        _id: null,
        totalCount: { $sum: "$views" }
      }
    }
  ]).then(stuff => {
    res.json(stuff[0].totalCount);
  });
});

// @route GET api/items
// @desc Get ALL Item
// @access Public
router.get("/", (req, res) => {
  Roadmap.find()
    .sort({ date: -1 })
    .then(roadmaps => res.json(roadmaps));
});

router.get("/getRandomRoadmaps", (req, res) => {
  Roadmap.aggregate([{ $sample: { size: 5 } }]).then(roadmaps =>
    res.json(roadmaps)
  );
});

router.post("/getRoadmapById", (req, res) => {
  Roadmap.findOne({ _id: req.body.roadmap_id }).then(roadmap =>
    res.json(roadmap)
  );
});

router.put("/updateViews", (req, res) => {
  Roadmap.findOneAndUpdate(
    { _id: req.body.roadmap_id },
    { $inc: { views: 1 } }
  ).then(roadmap => res.json(roadmap));
});

// @route POST api/items
// @desc POST ALL Item
// @access Public
router.post("/", (req, res) => {
  const newRoadmap = new Roadmap({
    roadmap: req.body.roadmap.roadmap,
    name: req.body.roadmap.name,
    category: req.body.roadmap.category,
    time_completion: req.body.roadmap.time_completion,
    author: req.body.author_name,
    author_id: req.body.author_id,
    author_profile_pic: req.body.author_profile_pic,
    author_bio_text: req.body.author_bio_text,
    roadmap_debrief: req.body.roadmap.roadmap_debrief
  });

  newRoadmap.save().then(roadmap => {
    User.findOneAndUpdate(
      { _id: req.body.author_id },
      { $push: { createdRoadmap: roadmap, savedRoadmap: roadmap } }
    ).then(user => {});
    //find the user with req.body.user_id, then go to user's createdRoadmaps list and append roadmap_id
  });
});

// @route POST api/items
// @desc POST ALL Item
// @access Public

module.exports = router;
