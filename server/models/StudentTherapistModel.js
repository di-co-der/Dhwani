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

// // Export the models
// const Patient = mongoose.model("Patient", PatientSchema);
// const User = mongoose.model("User", UserSchema);
const StudentTherapist = mongoose.model("StudentTherapist", StudentTherapistSchema);

module.exports = {StudentTherapist };