const Patient = require("../models/PatientModel");
// register Patient
const registerUser = async (req,res)=>{
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

module.exports = {
    registerPatient
}