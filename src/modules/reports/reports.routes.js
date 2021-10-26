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

router.get(
  prefix + "/item/:startDate/:endDate",
  auth,
  _reportService.doGetItemReport
);

router.get(
  prefix + "/purchase/:startDate/:endDate",
  auth,
  _reportService.doGetPurchaseReport
);

module.exports = router;
