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
/* router.get(
  prefix + "/getLabByDepartmentId/:departmentId",
  auth,
  _labService.doGetLabByDepartment,
  (req, res) => {}
);
router.patch(
  prefix + "/update/:labId",
  auth,
  _labService.doUpdateLab,
  (req, res) => {}
);

router.get(
  prefix + "/getlab/:labId",
  auth,
  _labService.doGetLabById,
  (req, res) => {}
);
 */
module.exports = router;
