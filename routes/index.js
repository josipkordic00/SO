const express = require('express');
const { createRequire } = require('module');
const router = express.Router();

//setting routes
router.use("/", require("./home"));
router.use("/notes", require("./notes"))

module.exports = router;