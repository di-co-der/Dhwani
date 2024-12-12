const StudentTherapist = require("../models/StudentTherapistModel");
// register Patient
const registerStudentTherapist = async (req,res)=>{
    const {userId,patientId} = req.body;

    try {
      const studentTherapist = await StudentTherapist.register(userId,patientId);
  
      res.status(200).json({studentTherapist});
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }

module.exports = {
    registerStudentTherapist
}