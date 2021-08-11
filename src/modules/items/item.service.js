const Lab = require("../labs/labs.model");
const Department = require("../departments/department.model");
const User = require("../user/user.model");

exports.doAddItem = async (req, res, next) => {
  try {
    const { userId } = req;
    const user = await User.find({ _id: userId });
    if (user) {
      // console.log(user);
    }
  } catch (err) {
    console.log(err);
  }
};

exports.doGetItemById = async (req, res, next) => {};

exports.doUpdateItem = async (req, res, next) => {};
