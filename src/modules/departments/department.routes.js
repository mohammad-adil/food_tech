const router = require("express").Router();
const _departmentService = require("../departments/departments.services");
const auth = require("../../middleware/Auth");
const prefix = "/stockpile/v1/department";
router.post(
  prefix + "/addDepartment",
  _departmentService.doAddDepartment,
  (req, res) => {}
);

router.get(
  prefix + "/getDepartment",
  auth,
  _departmentService.doGetDepartment,
  (req, res) => {}
);

router.get(
  prefix + "/getDepartment/:departmentId",
  auth,
  _departmentService.doGetDepartmentById,
  (req, res) => {}
);

router.patch(
  prefix + "/update/:departmentId",
  _departmentService.doUpdateDepartment,
  auth,
  (req, res) => {}
);

module.exports = router;
