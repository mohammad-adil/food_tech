const mongoose = require("mongoose");
const validator = require("validator");
const categorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: true,
      trim: true,
      index: { unique: true, dropDups: true },
    },
    enteredBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    isdeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = Category = mongoose.model("Category", categorySchema);
