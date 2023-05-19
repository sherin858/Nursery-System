const mongoose = require("mongoose");
require("../models/teacher.model");
const teacherSchema = mongoose.model("Teachers");
const bcryptjs = require("bcryptjs");
class Teacher {
  static getAllTeachers = (req, res, next) => {
    teacherSchema
      .find({})
      .then((data) => res.status(200).json({ data }))
      .catch((e) => next(e));
  };
  static addTeacher = (req, res, next) => {
    bcryptjs
      .hash(req.body.password, 12)
      .then((password) => {
        let teacher = new teacherSchema({ ...req.body, password });
        return teacher.save();
      })
      .then((data) => res.status(200).json({ data }))
      .catch((e) => {
        next(e);
      });
  };
  static updateTeacher = (req, res, next) => {
    teacherSchema
      .updateOne({ _id: req.params.id }, req.body)
      .then((data) => res.status(200).json({ data: "updated" }))
      .catch((e) => next(e));
  };
  static deleteTeacher = (req, res, next) => {
    teacherSchema
      .findByIdAndRemove(req.params.id)
      .then(() => res.json({ message: "delete Teacher" }))
      .catch((e) => next(e));
  };
}
module.exports = Teacher;
