const express = require("express");
const {registerStudentTherapist} = require("../controllers/studentTherapistControllers");
const router = express.Router();


router.post("/add",registerStudentTherapist);

module.exports = router;