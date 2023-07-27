const express = require('express');
const router = express.Router();

router.get("/", require("../controllers/appointments/getAppoController"))
//router.post("/insert", require("../controllers/appointments/insertAppoController"))
//router.post("/update/:id", require("../controllers/appointments/updateAppoController"))
//router.get("/delete/:id", require("../controllers/appointments/deleteAppoController"))



module.exports = router