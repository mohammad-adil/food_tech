const mongoose = require("mongoose");
const validator = require("validator");
const SubCategorySchema = new mongoose.Schema(
  {
    subCategoryName: {
      type: String,
      required: true,
      trim: true,
      index: { unique: true, dropDups: true },
    },
    parentCategory: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Category",
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

module.exports = SubCategory = mongoose.model("SubCategory", SubCategorySchema);
