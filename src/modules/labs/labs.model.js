const mongoose = require("mongoose");
const validator = require("validator");
const labSchema = new mongoose.Schema(
  {
    labName: {
      type: String,
      required: true,
      trim: true,
      default: "Loren Ipsumgit ",
    },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Department",
    },
    labEstDate: {
      type: String,
    },
    labAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = Lab = mongoose.model("Labs", labSchema);
