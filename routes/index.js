const express = require('express');
const router = express.Router();

//setting routes
router.use("/", require("./home"));
router.use("/appo", require("./appo"))
router.use("/user", require("./user"))

module.exports = router;