const User = require("../user/user.model");
const jwt = require("jsonwebtoken");
//const cookieParser = require("cookie-parser");
exports.signinUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email, password: password });

    if (user != null) {
      Token = await signJwt(user._id);
      console.log("token, ", Token);
      if (user && user.userRole.toString() == "user") {
        res.cookie("data", { Token, user });
        res.redirect("/Panel/User/index.html");
        res.status(302);
      } else if (user && user.userRole.toString() == "admin") {
        res.cookie("data", { Token, user });
        res.redirect("/Panel/Admin/index.html");
        res.status(302);
      } else {
        res.status(404).send("User not found");
      }
    } else {
      res.status(404).send("User not found");
    }
  } catch (err) {
    next(err);
  }
};

exports.signiMasterUser = async (req, res, next) => {
  Token = await signJwt(user._id);
  res.cookie("data", { Token, user });
  res.redirect("/Panel/MasterAdmin/index.html");
  res.status(302);
};

exports.masterUser = async (req, res, next) => {
  console.log("admin route hit");
};

const signJwt = async (payload) => {
  var token = jwt.sign({ data: payload._id }, "stockpIlebYaAdiL");

  return token;
};
