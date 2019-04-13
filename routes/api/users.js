const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
// Load User model
const User = require("../../models/User");
const Roadmap = require("../../models/Roadmap");
const fs = require("fs");
//Create register endpoint
// 1) pull the erros and isvalid from validateRegisterInput(req.body) function and check input validation
// if valid, use MongoDB's user.findOne() to check if user exists
// if new user, fill the fields of schema user with data sent in the body of the request
// use bcryptjs to hash the password before storing it in database

// @route POST api/users/register
// @desc Register user
// @access Public
// @route POST api/users/register
// @desc Register user
// @access Publi

router.post("/register", (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    }
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    // Hash password before saving in database
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then(user => res.json(user))
          .catch(err => console.log(err));
      });
    });
  });
});

router.put("/profilePicUpdate", (req, res) => {
  var user_id = req.body.user_id;
  var profile_pic = req.body.picture;

  User.findOneAndUpdate(
    { _id: req.body.user_id },
    { $set: { profile_picture: profile_pic } }
  ).then(user => {
    res.json(user.profile_picture);
  });
});

router.put("/bioTextUpdate", (req, res) => {
  var user_id = req.body.user_id;
  var bio = req.body.bio;

  User.findOneAndUpdate({ _id: req.body.user_id }, { $set: { bio: bio } }).then(
    user => {
      res.json(bio);
    }
  );
});
router.put("/saveroadmaptouser", (req, res) => {
  //first of all find user with id, then update the database's savedRoadmaps section

  const to_save_roadmap = new Roadmap({
    user_id: req.body.user_id,
    roadmap: req.body.roadmap,
    name: req.body.name,
    author: req.body.author,
    author_id: req.body.author_id,
    category: req.body.category,
    date: req.body.date,
    time_completion: req.body.time_completion,
    _id: req.body._id,
    _v: req.body._v,
    author_profile_pic: req.body.author_profile_pic,
    author_bio_text: req.body.author_bio_text
  });
  User.findOneAndUpdate(
    { _id: req.body.user_id },
    { $push: { savedRoadmap: to_save_roadmap } }
  ).then(user => res.json(user));
});

router.post("/getroadmapbyuser", (req, res) => {
  User.findOne({ _id: req.body.user_id }).then(user =>
    res.json({
      createdRoadmap: user.createdRoadmap,
      bio: user.bio,
      profile_pic: user.profile_picture
    })
  );
});

router.post("/getSavedRoadmapByUser", (req, res) => {
  User.findOne({ _id: req.body.user_id }).then(user =>
    res.json(user.savedRoadmap)
  );
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  //console.log("it came");
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
              profile_picture: user.profile_picture,
              bio: user.bio
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

module.exports = router;
