const express = require('express');
const router = express.Router();

router.get("/", require("../controllers/notes"))



module.exports = router