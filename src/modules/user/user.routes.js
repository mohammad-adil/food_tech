const router = require("express").Router();
const _signupService = require("./user.services");
const prefix = "/stockpile/v1";
router.post(prefix + "/signUp", _signupService.doSignupUser, (req, res) => {});

router.get(
  prefix + "/getUser/:department",
  _signupService.doGetUser,
  (req, res) => {}
);
router.delete(
  prefix + "/deleteUser",
  _signupService.doDeleteUser,
  (req, res) => {}
);

router.patch(
  prefix + "/activeUser",
  _signupService.doActiveUser,
  (req, res) => {}
);

module.exports = router;
