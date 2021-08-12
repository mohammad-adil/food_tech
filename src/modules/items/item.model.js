const mongoose = require("mongoose");
const validator = require("validator");
const itemSchema = new mongoose.Schema(
  {
    itemName: {
      type: String,
      required: true,
      trim: true,
      default: "Loren Ipsum",
    },
    itemQuantity: {
      type: Number,
      required: true,
      trim: true,
      default: 0,
    },
    itemCatagory: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Category",
    },
    itemSubCatagory: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "SubCategory",
    },
    suppliedBy: {
      type: String,
      required: true,
      trim: true,
      default: "Loren Sans",
    },
    itemAvailible: {
      type: Number,
      required: true,
      trim: true,
      default: 0,
    },
    enteredBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    source: {
      type: String,
      required: true,
      trim: true,
      default: "Loren Sans",
      enum: ["University", "Department", "External"],
    },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Department",
    },
    lab: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Lab",
    },
    unitPrice: {
      type: Number,
      required: true,
      trim: true,
      default: "Loren Ipsum",
    },
    totalPrice: {
      type: Number,
      required: true,
      trim: true,
      default: 0,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    purchaseDate: {
      type: String,
      required: true,
      trim: true,
      default: "2021-05-01",
    },
    purchaseOrder: {
      type: String,
      required: true,
      trim: true,
      default: "NA",
    },
    currency: {
      type: String,
      required: true,
      trim: true,
      default: "INR",
      enum: [
        "INR",
        "AUD",
        "USD",
        "EUR",
        "GBP",
        "JPY",
        "HKD",
        "KRW",
        "LRD",
        "NZD",
        "RUB",
      ],
    },
    unit: {
      type: String,
      required: true,
      trim: true,
      default: "Loren Ipsum",
      enum: ["Kgs", "Liters", "Milligrams", "Grams", "Units", "Packets", "Box"],
    },
  },
  { timestamps: true }
);

module.exports = Item = mongoose.model("Item", itemSchema);
