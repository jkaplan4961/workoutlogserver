const router = require("express").Router();
const User = require("../db").import("../models/user.js")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
// Create a new endpoint : /create
// The endpoint is a post request
// have an object that matches the model of the userTable (email/Password
// Let sequelize create a new record in database (create))

router.post("/register", function (req, res) {
    User.create({
      username: req.body.user.username,
      password: bcrypt.hashSync(req.body.user.password, 13),
    })
      // .then(res.send('this is a user end point') )
      .then(function createSuccess(user) {
        let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: 60 * 60 * 24,
          });
        //   "im_a_secret", 
        // took this out 10.10

        console.log('hello', user);
        res.json({
          user: user,
          message: "User successfully created!",
          sessionToken: token,
        });
      })
      .catch((err) => res.status(500).json({ error: err }));
  });


  router.post("/login", function (req, res) {
    User.findOne({
      where: {
        username: req.body.user.username,
      },
    })
      .then(function loginSuccess(user) {
        if (user) {
          bcrypt.compare(req.body.user.password, user.password, function (
            err,
            matches
          ) {
            if (matches) {
              let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
                expiresIn: 60 * 60 * 24,
              });
              res.status(200).json({
                user: user,
                message: "User Succesfully logged in!",
                sessionToken: token,
              });
            } else {
              res.status(502).send({ error: "Login Failed us" });
            }
          });
        } else {
          res.status(500).json({ error: "User does not exist." });
        }
      })
      .catch((err) => res.status(500).json({ error: err }));
  });
  module.exports = router;