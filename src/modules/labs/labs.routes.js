const router = require("express").Router();
const _labService = require("../labs/labs.services");
const prefix = "/stockpile/v1/lab";
router.post(prefix + "/addLab", _labService.doAddLab, (req, res) => {});
router.get(
  prefix + "/getLabByDepartmentId/:departmentId",
  _labService.doGetLabByDepartment,
  (req, res) => {}
);
router.patch(
  prefix + "/update/:labId",
  _labService.doUpdateLab,
  (req, res) => {}
);

module.exports = router;
