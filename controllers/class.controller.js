const mongoose = require("mongoose");
require("../models/class.model");
const classSchema = mongoose.model("Classes");
class Class {
  static getAllClasses = (req, res, next) => {
    classSchema
      .find({})
      .populate({ path: "supervisor", select: { fullname: 1 } })
      .populate({ path: "children", select: { fullname: 1 } })
      .then((data) => res.status(200).json({ data }))
      .catch((e) => next(e));
  };
  static addClass = (req, res, next) => {
    let Class = new classSchema(req.body);
    Class.save()
      .then((data) => res.status(200).json({ data }))
      .catch((e) => next(e));
  };
  static updateClass = (req, res, next) => {
    classSchema
      .updateOne({ _id: req.params.id }, req.body)
      .then(() => res.status(200).json({ data: "updated" }))
      .catch((e) => next(e));
  };
  static deleteClass = (req, res, next) => {
    classSchema
      .findByIdAndRemove(req.params.id)
      .then(() => res.json({ message: "delete Class" }))
      .catch((e) => next(e));
  };
}
module.exports = Class;
