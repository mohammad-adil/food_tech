const mongoose = require("mongoose");
const validator = require("validator");
const departmentSchema = new mongoose.Schema(
  {
    departmentName: {
      type: String,
      required: true,
      trim: true,
    },
    totalLabs: {
      type: Number,
      required: true,
      trim: true,
      default: 0,
    },
    isdeleted: {
      type: Boolean,
      default: false,
    },

    estDate: {
      type: String,
      required: true,
      trim: true,
    },
    estSource: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = Department = mongoose.model("Department", departmentSchema);
