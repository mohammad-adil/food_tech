const mongoose = require("mongoose");
const validator = require("validator");
const labSchema = new mongoose.Schema(
  {
    departmentName: {
      type: String,
      required: true,
      trim: true,
      default: "Loren Ipsumgit ",
    },
    hod: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = Lab = mongoose.model("Labs", labSchema);
