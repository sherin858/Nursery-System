const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
require("../models/teacher.model");
const teacherSchema = mongoose.model("Teachers");
require("../models/child.model");
const childSchema = mongoose.model("Childs");
require("../models/admin.model");
const adminSchema = mongoose.model("Admins");
class Home {
  static login = async (req, res, next) => {
    try {
      let user = await teacherSchema.findOne({ email: req.body.email });
      if (!user) user = await childSchema.findOne({ email: req.body.email });
      if (!user) user = await adminSchema.findOne({ email: req.body.email });
      if (!user) throw new Error("user not found");
      let isCorrectPassword = await bcryptjs.compare(
        req.body.password,
        user.password
      );
      if (!isCorrectPassword) throw new Error("password incorrect");
      const token = jwt.sign(
        {
          _id: user._id,
          role: user.role,
          fullname: user.fullname,
        },
        "ITIPDAlexTrack"
      );
      res.status(200).json({ token });
    } catch (e) {
      next(e);
    }
  };
}
module.exports = Home;
