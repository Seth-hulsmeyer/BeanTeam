const db = require("../models");
const passport = require("../config/passport");
// const isAuthenticated = require("../client/src/config/middleware/isAuthenticated");
// const passwordStrength = require("check-password-strength");

module.exports = (app) => {
  // APP.GET to view a route won't work, res.render is a handlebar functionality

  // app.get("/login", (req, res) => {
  //   res.render("login");
  // });

  //Post to verify user is in user table
  // api/ for us to know it's private from the user. They do not see this route
  app.post("/api/login", (req, res, next) => {
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
  //Get for signup page = DONT NEED, THIS IS SET THROUGH REACT-ROUTER-DOM
  // app.get("/signup", (req, res) => {
  //   res.render("signup");
  // });
  //Post to signup that add user info to users table
  app.post("/api/signup", (req, res) => {
    db.BeanUser.create({
      email: req.body.email,
      password: req.body.password,
      first_name: req.body.firstName,
      last_name: req.body.lastName,
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


  app.get("/api/users/:_id", (req, res) => {
    db.BeanUser.findOne({
      where: {_id: req.params._id},
      // email: req.body.email,
      // password: req.body.password,
      // first_name: req.body.firstName,
      // last_name: req.body.lastName,
      // videos: req.body.videos,
    })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      return err;
    })
  })










};
