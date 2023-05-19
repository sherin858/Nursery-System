const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  fullname: String,
  password: { type: String, required: true },
  email: {
    type: String,
    unique: true,
  },
  role: { type: String, default: "teacher" },
});

mongoose.model("Teachers", schema);
