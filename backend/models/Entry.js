const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  vehicle_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "vehicle",
  },
  name: {
    type: String,
    required: true,
  },
  vehicle_number: {
    type: String,
    required: true,
  },
  exit: {
    type: Date,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("entry", entrySchema);
