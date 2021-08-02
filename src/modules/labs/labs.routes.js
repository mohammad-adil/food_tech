const router = require("express").Router();
const _labService = require("../labs/labs.services");
const prefix = "/stockpile/v1";
router.post(prefix + "/addLab", _labService.doAddLab, (req, res) => {});

module.exports = router;
