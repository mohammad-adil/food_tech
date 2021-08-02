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
      type: String,
      required: true,
      trim: true,
    },
    estdDate: {
      type: String,
      required: true,
      trim: true,
    },
    labAdmin: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = Lab = mongoose.model("Labs", labSchema);
