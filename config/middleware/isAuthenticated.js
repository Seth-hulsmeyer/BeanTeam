module.exports = (req, res, next) => {
  // If the user is logged in the request will go through
  if (req.user) {
    return next();
  }
  return res.status(403).send({ error: "Must be logged in" });
};
