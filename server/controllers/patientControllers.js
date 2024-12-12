const Patient = require("../models/PatientModel");
const StudentTherapist = require("../models/StudentTherapistModel");
// register Patient
const registerPatient = async (req,res)=>{
    const {firstName,lastName,email,phone,dob,gender,
        appointmentDate,appointmentTime,typeOfDisorder,comment} = req.body;

    try {
      const user = await Patient.register(firstName,lastName,email,phone,dob,gender,
        appointmentDate,appointmentTime,typeOfDisorder,comment);
  
      res.status(200).json({firstName});
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }

  // add Patient to a specific StudentTherapist
const addPatient = async (req,res)=>{
    const {therapistId,patientId} = req.body;

    try {
      const user = await StudentTherapist.addPatient(therapistId,patientId);
  
      res.status(200).json({msg:"Patient added successfully"});
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }

module.exports = {
    registerPatient,addPatient
}