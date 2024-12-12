const express = require("express");
const {registerPatient,addPatient,showPatient} = require("../controllers/patientControllers");
const router = express.Router();


router.post("/register",registerPatient);
router.post("/addpatient",addPatient);
router.get("/showpatient",showPatient);

module.exports = router;