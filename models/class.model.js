const mongoose = require("mongoose");
const { AutoIncrementID } = require("@typegoose/auto-increment");
const schema = new mongoose.Schema({
  _id: Number,
  supervisor: { type: mongoose.Schema.Types.ObjectId, ref: "Teachers" },
  children: [{ type: Number, ref: "Childs" }],
});
schema.plugin(AutoIncrementID, { incrementBy: 1, startAt: 1 });
mongoose.model("Classes", schema);
