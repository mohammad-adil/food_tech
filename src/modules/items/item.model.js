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
    totalItemQuantity: {
      type: Number,
      default: 0,
    },
    itemCategory: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Category",
    },
    itemSubCategory: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "SubCategory",
    },
    quantityAvailable: {
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
    purchasedAt: [
      {
        purchaseId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Purchase",
        },
      },
    ],

    isDeleted: {
      type: Boolean,
      default: false,
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
