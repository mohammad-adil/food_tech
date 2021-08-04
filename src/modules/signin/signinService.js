const User = require("../signup/signup.model");
exports.signinUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email, password: password });
    if (user) {
      res.redirect("/Panel/MasterAdmin/index.html");
    } else {
      res.status(404).send("User not found");
    }
  } catch (err) {
    next(err);
  }
};
