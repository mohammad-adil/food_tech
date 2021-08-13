const mongoose = require("mongoose");
const validator = require("validator");
const purchaseSchema = new mongoose.Schema(
  {
    Item: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Item",
    },
    purchaseDate: {
      type: String,
      required: true,
      trim: true,
      default: "2021-05-01",
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
    isDeleted: {
      type: Boolean,
      default: false,
    },
    source: {
      type: String,
      required: true,
      trim: true,
      default: "Loren Sans",
      enum: ["University", "Department", "External"],
    },
    unitPrice: {
      type: Number,
      required: true,
      trim: true,
      default: 0,
    },
    totalPrice: {
      type: Number,
      required: true,
      trim: true,
      default: 0,
    },
    itemQuantity: {
      type: Number,
      default: 0,
    },
    suppliedBy: {
      type: String,
      required: true,
      trim: true,
      default: "Loren Sans",
    },
    unit: {
      type: String,
      required: true,
      trim: true,
      default: "Units",
      enum: ["Kgs", "Liters", "Milligrams", "Grams", "Units", "Packets", "Box"],
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

    purchaseOrder: {
      type: String,
      required: true,
      trim: true,
      default: "NA",
    },

    enteredBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = Purchase = mongoose.model("Purchase", purchaseSchema);
