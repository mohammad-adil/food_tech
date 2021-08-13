const router = require("express").Router();
const _purchaseService = require("../purchase/purchase.service");
const auth = require("../../middleware/Auth");
const prefix = "/stockpile/v1/purchase";

router.post(
  prefix + "/purchaseItem",
  auth,
  _purchaseService.doPurchaseItem,
  (req, res) => {}
);

router.get(
  prefix + "/getPurchasebyId/:purchaseId",
  auth,
  _purchaseService.doGetPurchasebyId,
  (req, res) => {}
);

router.get(
  prefix + "/getPurchasebyLab/:labId",
  auth,
  _purchaseService.doGetPurchasebyLab,
  (req, res) => {}
);

router.get(
  prefix + "/getPurchasebyDepartment/:departmentId",
  auth,
  _purchaseService.doGetPurchasebyDepartment,
  (req, res) => {}
);

router.patch(
  prefix + "/update/:purchaseId",
  auth,
  _purchaseService.doUpdatePurchase,
  (req, res) => {}
);

module.exports = router;
