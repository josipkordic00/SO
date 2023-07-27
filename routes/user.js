const express = require('express');
const router = express.Router();

router.get("/", require("../controllers/users/getUserController"))
//router.post("/insert", require("../controllers/users/insertUserController"))
//router.post("/update/:id", require("../controllers/users/updateUserController"))
//router.get("/delete/:id", require("../controllers/users/deleteUserController"))



module.exports = router