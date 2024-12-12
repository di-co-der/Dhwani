const express = require("express");
const {registerPatient,addPatient} = require("../controllers/patientControllers");
const router = express.Router();


router.post("/register",registerPatient);
router.post("/addpatient",addPatient);

module.exports = router;