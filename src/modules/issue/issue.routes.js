const router = require("express").Router();
const _issueService = require("../issue/issue.service");
const auth = require("../../middleware/Auth");
const prefix = "/stockpile/v1/issue";

router.post(
  prefix + "/issueItem/:itemId",
  auth,
  _issueService.doIssueItem,
  (req, res) => {}
);

router.patch(
  prefix + "/update/:issueId",
  auth,
  _issueService.doUpdateIssueItem,
  (req, res) => {}
);

router.get(
  prefix + "/getIssueByDepartment/:departmentId",
  auth,
  _issueService.getIssueByDepartment,
  (req, res) => {}
);

router.get(
  prefix + "/getIssueItemById/:issueId",
  auth,
  _issueService.doGetIssueItemById,
  (req, res) => {}
);

router.get(
  prefix + "/getIssueItemLab/:labId",
  auth,
  _issueService.doGetIssueByLab,
  (req, res) => {}
);
module.exports = router;
