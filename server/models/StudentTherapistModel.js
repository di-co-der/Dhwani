const mongoose = require("mongoose");
const User = require("./UserModel");
const Patient = require("./PatientModel");

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

// StudentTherapistSchema
const StudentTherapistSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to UserSchema
    patients: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient", // Reference to PatientSchema
      },
    ],
  },
  {
    timestamps: true,
  }
);

// static register method
// we use a regular function instead of a arrow function because in arrow function we cannot use "this" keyword

StudentTherapistSchema.statics.register = async function(userId){
  
  //validation
  if(!userId){
      throw Error("userId must be filled");
  }

  // is userId already exits
  const exists = await this.findOne({userId});

  if(exists){
      throw Error("userId already exists");
  }

  const studentTherapist = await this.create({user:userId});
  
  return studentTherapist;
}

// Instance method to add a patient to the therapist's list of patients
StudentTherapistSchema.statics.addPatient = async function (therapistId, patientId) {
  // Find the specific therapist document by therapistId
  const therapist = await this.findOne({ user: therapistId });
  
  if (!therapist) {
    throw Error("Therapist not found");
  }

  // Check if the patient already exists in the therapist's list
  if (therapist.patients.includes(patientId)) {
    throw Error("Patient is already assigned to this therapist");
  }

  // Check if the patient exists
  const patient = await Patient.findOne({ _id: patientId });
  if (!patient) {
    throw Error("Patient does not exist");
  }

  // Add the patient to the therapist's patients list
  therapist.patients.push(patientId);

  // Save the updated therapist document
  await therapist.save();

  return therapist;
};

module.exports = mongoose.model("StudentTherapist", StudentTherapistSchema);

// module.exports = {StudentTherapist };
