const User = require("../signup/signup.model");

exports.doSignupUser = async (req, res, next) => {
  try {
    let createUser = req.body;
    const user = await User.create({ ...createUser });

    return res.status(200).send(user);
  } catch (err) {
    next(err);
  }
};
