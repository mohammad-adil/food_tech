const mongoose = require("mongoose");
const validator = require("validator");
const issueSchema = new mongoose.Schema(
  {
    item: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Item",
    },
    quantityIssued: {
      type: Number,
      default: 0,
    },
    issuedBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    issuedTo: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    returnable: {
      type: Boolean,
      default: false,
    },
    returnDate: {
      type: String,
      default: "2021-05-21",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    returned: {
      type: Boolean,
      default: false,
    },
    returnId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Return",
    },
    unit: {
      type: String,
      required: true,
      trim: true,
      default: "Units",
      enum: ["Kgs", "Liters", "Milligrams", "Grams", "Units", "Packets", "Box"],
    },
  },
  { timestamps: true }
);
module.exports = Issue = mongoose.model("Issue", issueSchema);
