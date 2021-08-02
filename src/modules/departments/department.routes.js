const router = require("express").Router();
const _departmentService = require("../departments/departments.services");
const prefix = "/stockpile/v1";
router.post(
  prefix + "/addLab",
  _departmentService.doAddDepartment,
  (req, res) => {}
);

module.exports = router;
