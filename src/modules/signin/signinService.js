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
      if (user && user.userRole == "superAdmin") {
        res.cookie("data", { Token, user });
        res.redirect("/Panel/MasterAdmin/index.html");
        res.status(302);
      } else if (user && user.userRole == "user") {
        res.cookie("data", { Token, user });
        res.redirect("/Panel/User/index.html");
        res.status(302);
      } else if (user && user.userRole == "labAdmin") {
        res.cookie("data", { Token, user });
        res.redirect("/Panel/MasterAdmin/index.html");
        res.status(302);
      } else if (user && user.userRole == "admin") {
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

const signJwt = async (payload) => {
  var token = jwt.sign({ data: payload._id }, "stockpIlebYaAdiL");

  return token;
};
