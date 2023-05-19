const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  _id: Number,
  fullname: String,
  password: Number,
  email: {
    type: String,
    unique: true,
  },
  role: { type: String, default: "admin" },
});
mongoose.model("Admins", schema);
