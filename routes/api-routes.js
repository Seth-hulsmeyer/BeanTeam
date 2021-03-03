const db = require("../client/src/models");
const passport = require("../client/src/config/passport");
// const isAuthenticated = require("../client/src/config/middleware/isAuthenticated");
// const passwordStrength = require("check-password-strength");

module.exports = (app) => {
  app.get("/login", (req, res) => {
    res.render("login");
  });
  //Post to verify user is in user table
  app.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (!user) res.render("login", { error: info.message });
      else {
        req.logIn(user, (err) => {
          //If present returns to home page or displays errors
          if (err) {
            return next(err);
          }
          return res.redirect("/home");
        });
      }
    })(req, res, next);
  });
  //Get for signup page
  app.get("/signup", (req, res) => {
    res.render("signup");
  });
  //Post to signup that add user info to users table
  app.post("/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
    })
      .then(() => {
        //Redirects to login
        res.redirect("/login");
      })
      .catch((err) => {
        //If failure renders signup page with error message
        res.render("signup", { error: "Unable to sign up, try again" });
      });
  });
};
