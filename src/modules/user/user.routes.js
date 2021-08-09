const router = require("express").Router();
const _signupService = require("./user.services");
const auth = require("../../middleware/Auth");

const prefix = "/stockpile/v1";
router.post(prefix + "/signUp", _signupService.doSignupUser, (req, res) => {});

router.get(
  prefix + "/getUser/:department",
  auth,
  _signupService.doGetUserbyDepartment,
  (req, res) => {}
);
router.delete(
  prefix + "/deleteUser",
  auth,
  _signupService.doDeleteUser,
  (req, res) => {}
);

router.patch(
  prefix + "/activeUser",
  auth,
  _signupService.doActiveUser,
  (req, res) => {}
);

module.exports = router;
