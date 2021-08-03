const router = require("express").Router();
const _departmentService = require("../departments/departments.services");
const prefix = "/stockpile/v1/department";
router.post(
  prefix + "/addDepartment",
  _departmentService.doAddDepartment,
  (req, res) => {}
);

router.get(
  prefix + "/getDepartment",
  _departmentService.doGetDepartment,
  (req, res) => {}
);

module.exports = router;
