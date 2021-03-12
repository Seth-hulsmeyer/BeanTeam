module.exports = (req, res, next) => {
  // If the user is logged in the request will go through
  if (req.user) {
    return next();
  }
  if (req.xhr) {
    return res.status(403).send({ error: "Must be logged in" });
  }
  // if the user is not logged in it will shoot them to the log in page
  else {
    return res.redirect("/login");
  }
};
