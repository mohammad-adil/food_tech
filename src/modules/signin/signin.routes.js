const router = require("express").Router();
const _signinService = require("../signin/signinService");
const prefix = "/stockpile/v1";
const User = require("../user/user.model");
router.post(prefix + "/signin", _signinService.signinUser, (req, res) => {});

/* router.all(
  "/Panel/MasterAdmin/*",
  signinUser,
  _signinService.signinUser,
  (req, res, next) => {
    res.status(403).send({
      message: "Access Forbidden",
    });
    // or whatever
  }
);

const signinUser = async () => {
  const user = await User.findOne({ email: email, password: password });
}; */

module.exports = router;
