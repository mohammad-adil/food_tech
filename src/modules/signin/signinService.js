const User = require("../signup/signup.model");
const jwt = require("jsonwebtoken");
//const cookieParser = require("cookie-parser");
exports.signinUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email, password: password });
    var Token = signJwt(user._id);
    if (user) {
      Token = await signJwt(user._id);
      console.log("token, ", Token);
    }

    if (user && user.userRole == "superAdmin") {
      res.cookie("data", { Token, user });
      res.redirect("/Panel/MasterAdmin/index.html");
      res.status(302);
    } else if (user && user.userRole == "user") {
      res.redirect("/Panel/User/index.html");
    } else if (user && user.userRole == "labAdmin") {
      res.redirect("/Panel/MasterAdmin/index.html");
    } else if (user && user.userRole == "admin") {
      res.redirect("/Panel/Admin/index.html");
    } else {
      res.status(404).send("User not found");
    }
  } catch (err) {
    next(err);
  }
};

const signJwt = async (payload) => {
  var token = jwt.sign({ data: payload._id }, "stockpIlebYaAdiL");

  return token;
};
