const cookieParser = require("cookie-parser");
const express = require("express");
const Auth = require("../middleware/Auth.js");
const approveUser = require("../mod/approveUser.js");
const path = require("path");
const router = new express.Router();

module.exports = router;
