const db = require("../models");
const passport = require("../config/passport");
const isAuthenticated = require("../config/middleware/isAuthenticated");
const passwordStrength = require("check-password-strength");

module.exports = (app) => {
  // APP.GET to view a route won't work, res.render is a handlebar functionality

  // app.get("/login", (req, res) => {
  //   res.render("login");
  // });

  //Post to verify user is in user table
  // api/ for us to know it's private from the user. They do not see this route
  app.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (!user) res.redirect("/login", { error: info.message });
      else {
        req.logIn(user, (err) => {
          //If present returns to home page or displays errors
          if (err) {
            return next(err);
          }
          return res.redirect("/main");
        });
      }
    })(req, res, next);
  });
  //Post to signup that add user info to users table
  app.post("/api/signup", (req, res) => {
    db.BeanUser.create({
      email: req.body.email,
      password: req.body.password,
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      topics: {
        JS: req.body.JS,
        React: req.body.React,
        HTML: req.body.HTML,
        CSS: req.body.CSS,
      },
      videos: req.body.videos,
    })
      .then((data) => {
        //Redirects to login
        res.status(200).json(data);
      })
      .catch((err) => {
        //If failure renders signup page with error message
        // res.render("signup", { error: "Unable to sign up, try again" });
      });
  });

  app.get("/api/users/current", isAuthenticated, (req, res) => {
    db.BeanUser.findOne({
      email: req.user.email,
    })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        return err;
      });
  });

  app.post("/api/checkpassword", (req, res) => {
    if (req.body.password === "") {
      res.json({
        strength: "Weak",
      });
    } else {
      res.json({
        strength: passwordStrength(req.body.password).value,
      });
    }
  });

  app.post("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  app.put("/api/add-video", (req, res) => {
    console.log(req.body);
    db.BeanUser.findByIdAndUpdate(
      req.user._id,
      {
        // $set: { topics: { [req.body.topic]: req.body[req.body.topic] } },
        $push: { videos: req.body.videos },
      },
      { new: true }
    )
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        // Internal server error
        res.status(500).send(err);
      });
  });
};
