const mongoose = require("mongoose");
const returnSchema = new mongoose.Schema(
  {
    issueId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Issue",
    },
    returnedDate: {
      type: String,
      default: "2021-07-01",
    },
    recievedBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
module.exports = Return = mongoose.model("Return", returnSchema);
