const router = require("express").Router();
const _issueService = require("../issue/issue.service");
const auth = require("../../middleware/Auth");
const prefix = "/stockpile/v1/issue";

router.get(
  prefix + "/getIssue/:startDate/:endDate",
  auth,
  _issueService.doGetIssue,
  (req, res) => {}
);

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

router.post(
  prefix + "/getIssueItembyEmail",
  auth,
  _issueService.getIssueItembyEmail,
  (req, res) => {}
);

module.exports = router;
