const User = require("../signup/signup.model");

exports.doSignupUser = async (req, res, next) => {
  try {
    let createUser = req.body;
    const user = await User.create({ ...createUser });
    if (user.length > 0) {
      return res.status(201).send("User has been Created");
    } else {
      return res.status(500).send("Cannot Create User");
    }
  } catch (err) {
    next(err);
  }
};

exports.doGetUser = async (req, res, next) => {
  try {
    const getUser = await User.find();
    return res.status(200).send(getUser);
  } catch (err) {
    next(err);
  }
};

exports.doGetUser = async (req, res, next) => {
  try {
    const getUser = await User.find();
    return res.status(200).send(getUser);
  } catch (err) {
    next(err);
  }
};
