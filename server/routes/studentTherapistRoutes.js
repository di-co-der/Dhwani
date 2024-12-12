const express = require("express");
const {registerStudentTherapist} = require("../controllers/studentTherapistControllers");
const router = express.Router();


router.post("/register",registerStudentTherapist);

module.exports = router;