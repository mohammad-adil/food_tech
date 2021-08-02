const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      default: "Loren Ipsumgit ",
    },
    dob: {
      type: String,
      required: true,
      trim: true,
    },
    department: {
      type: String,
      required: true,
      trim: true,
    },
    universityId: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    userRole: {
      type: String,
      required: true,
      trim: true,
      enum: ["user", "superAdmin", "labAdmin", "admin"],
    },

    phone: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Other"],
      trim: true,
    },
    address: {
      Landmark: {
        type: String,
        required: true,
        trim: true,
      },
      pin: {
        type: Number,
        required: true,
        trim: true,
      },
      street: {
        type: String,
        required: true,
        trim: true,
      },
    },
    email: {
      type: String,
      required: true,
      trim: true,
      trim: true,
      unique: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is invalid");
        }
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 7,
      trim: true,
      validate(value) {
        if (value.toLowerCase().includes("password")) {
          throw new Error('Password cannot contain "password"');
        }
      },
    },
  },
  { timestamps: true }
);

module.exports = User = mongoose.model("User", userSchema);
