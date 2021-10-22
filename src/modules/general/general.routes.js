const router = require("express").Router();
const _generalService = require("./general.service");
const auth = require("../../middleware/Auth");
const prefix = "/stockpile/v1/general";

router.get(
  prefix + "/getDetails",
  auth,
  _generalService.doGetDetails,
  async (req, res, next) => {}
);

module.exports = router;
