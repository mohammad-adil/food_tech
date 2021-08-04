const router = require("express").Router();
const _signinService = require("../signin/signinService");
const prefix = "/stockpile/v1";
router.post(prefix + "/signin", _signinService.signinUser, (req, res) => {});

module.exports = router;
