const router = require("express").Router();
const _signupService = require("../signup/signup.services");
const prefix = "/stockpile/v1";
router.post(prefix + "/signUp", _signupService.doSignupUser, (req, res) => {});

module.exports = router;
