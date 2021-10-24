const router = require("express").Router();
const auth = require("../../middleware/Auth");
const _reportService = require("./reports.service");
const prefix = "/stockpile/v1/reports";

router.get(
  prefix + "/getByDate/:startDate/:endDate",
  auth,
  _reportService.doGetByDate
);

module.exports = router;
