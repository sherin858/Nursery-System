const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  try {
    const token = req.get("Authorization").split(" ")[1];
    const decodedToken = jwt.verify(token, "ITIPDAlexTrack");
    req.decodedToken = decodedToken;
    next();
  } catch (e) {
    console.log(e);
    next(new Error("not Athenticated"));
  }
};
module.exports.checkAdmin = (req, res, next) => {
  if (req.decodedToken.role !== "admin") next(new Error("Not Authorized"));
  next();
};
module.exports.checkTeacher = (req, res, next) => {
  if (
    req.decodedToken.role !== "teacher" ||
    req.decodedToken._id == req.params._id
  )
    next(new Error("Not Authorized"));
  next();
};
module.exports.checkChild = (req, res, next) => {
  if (
    req.decodedToken.role !== "child" ||
    req.decodedToken._id == req.params._id
  )
    next(new Error("Not Authorized"));
  next();
};
