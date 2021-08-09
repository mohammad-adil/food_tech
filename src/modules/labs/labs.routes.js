const router = require("express").Router();
const _labService = require("../labs/labs.services");
const auth = require("../../middleware/Auth");
const prefix = "/stockpile/v1/lab";
router.post(prefix + "/addLab", auth, _labService.doAddLab, (req, res) => {});
router.get(
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

module.exports = router;
