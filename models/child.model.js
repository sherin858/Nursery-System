const mongoose = require("mongoose");
const { AutoIncrementID } = require("@typegoose/auto-increment");
const schema = new mongoose.Schema({
  _id: Number,
  fullname: String,
  age: Number,
  level: String,
  address: {
    city: String,
    street: String,
    building: String,
  },
  role: { type: String, default: "child" },
  password: {
    type: String,
    required: true,
  },
});
schema.plugin(AutoIncrementID, { incrementBy: 1, startAt: 1 });
mongoose.model("Childs", schema);
