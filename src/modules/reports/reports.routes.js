const router = require("express").Router();
const auth = require("../../middleware/Auth");
const _reportService = require("./reports.service");
const prefix = "/stockpile/v1/reports";

router.get(
  prefix + "/issue/:startDate/:endDate",
  auth,
  _reportService.doGetByDate
);

router.get(
  prefix + "/return/:startDate/:endDate",
  auth,
  _reportService.doGetReturnReport
);

module.exports = router;
