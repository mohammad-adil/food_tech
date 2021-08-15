const router = require("express").Router();
const _returnService = require("../return/return.service");
const auth = require("../../middleware/Auth");
const prefix = "/stockpile/v1/return";

router.post(
  prefix + "/returnItem/:issueId",
  auth,
  _returnService.doReturnItem,
  (req, res) => {}
);

router.get(
  prefix + "/getReturnById/:returnId",
  auth,
  _returnService.doGetReturnById,
  (req, res) => {}
);

/*
router.get(
  prefix + "/getItemsByDepartment/:departmentId",
  auth,
  _itemService.doGetItemByDepartment,
  (req, res) => {}
);

router.get(
  prefix + "/getItemsByLab/:labId",
  auth,
  _itemService.doGetItemByLab,
  (req, res) => {}
);
*/
router.patch(
  prefix + "/update/:returnId",
  auth,
  _returnService.doUpdateReturn,
  (req, res) => {}
);

module.exports = router;
