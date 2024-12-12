const mongoose = require("mongoose");
const User = require("./UserModel");
const StudentTherapist = require("./StudentTherapistModel");

// // PatientSchema (for reference)
// const PatientSchema = new mongoose.Schema(
//   {
//     firstName: { type: String, required: true, trim: true },
//     lastName: { type: String, required: true, trim: true },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       trim: true,
//       match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
//     },
//     phone: {
//       type: String,
//       required: true,
//       match: [/^\d{10}$/, "Please enter a valid 10-digit phone number"],
//     },
//     dob: { type: Date, required: true },
//     gender: {
//       type: String,
//       enum: ["Male", "Female", "Other"],
//       required: true,
//     },
//     appointmentDate: { type: Date, required: true },
//     appointmentTime: { type: String, required: true },
//     typeOfDisorder: { type: String, required: true, trim: true },
//     comment: { type: String, trim: true },
//   },
//   {
//     timestamps: true,
//   }
// );

// // UserSchema (for reference)
// const UserSchema = new mongoose.Schema(
//   {
//     username: { type: String, required: true, unique: true, trim: true },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       trim: true,
//       match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
//     },
//     patients: [PatientSchema], // Embedding PatientSchema as an array
//   },
//   {
//     timestamps: true,
//   }
// );

// ClinicalSupervisorSchema
const ClinicalSupervisorSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to UserSchema
    studenttherapists: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "StudentTherapist", // Reference to StudentTherapist Schema
      },
    ],
  },
  {
    timestamps: true,
  }
);

// static register method
// we use a regular function instead of a arrow function because in arrow function we cannot use "this" keyword

ClinicalSupervisorSchema.statics.register = async function(userId){
  
    //validation
    if(!userId){
        throw Error("userId must be filled");
    }
  
    // is userId already exits
    const exists = await this.findOne({userId});
  
    if(exists){
        throw Error("userId already exists");
    }
  
    const clinicalsupervisors = await this.create({user:userId});
    
    return clinicalsupervisors;
  }


// // Export the models
// const Patient = mongoose.model("Patient", PatientSchema);
// const User = mongoose.model("User", UserSchema);

module.exports = mongoose.model("ClinicalSupervisor",ClinicalSupervisorSchema);

