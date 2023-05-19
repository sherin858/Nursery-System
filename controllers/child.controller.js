const mongoose = require("mongoose");
require("../models/child.model");
const childSchema = mongoose.model("Childs");
const bcryptjs = require("bcryptjs");
class Child {
  static getAllChildren = (req, res, next) => {
    childSchema
      .find({})
      .then((data) => res.status(200).json({ data }))
      .catch((e) => next(e));
  };
  static addChild = (req, res, next) => {
    bcryptjs
      .hash(req.body.password, 12)
      .then((password) => {
        let child = new childSchema({ ...req.body, password });
        return child.save();
      })
      .then((data) => res.status(200).json({ data }))
      .catch((e) => {
        next(e);
      });
  };
  static updateChild = (req, res, next) => {
    childSchema
      .updateOne({ _id: req.params.id }, req.body)
      .then((data) => res.status(200).json({ data: "updated" }))
      .catch((e) => next(e));
  };
  static deleteChild = (req, res, next) => {
    childSchema
      .findByIdAndRemove(req.params.id)
      .then(() => res.json({ message: "delete Child" }))
      .catch((e) => next(e));
  };
}
module.exports = Child;
