const User = require("../signup/signup.model");

exports.doSignupUser = async (req, res, next) => {
  try {
    let createUser = req.body;
    console.log(createUser);
    const user = await User.create({ ...createUser });
    console.log(user);
  } catch (err) {
    next(err);
  }
};
