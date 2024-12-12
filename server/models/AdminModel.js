const mongoose = require("mongoose");
const User = require("./UserModel");
const StudentTherapist = require("./StudentTherapistModel");
const ClinicalSupervisor = require("./ClinicalSupervisorModel");

// AdminSchema
const AdminSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to UserSchema
    studenttherapists: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "StudentTherapist", // Reference to StudentTherapist Schema
      },
    ],
    clinicalsupervisors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ClinicalSupervisor", // Reference to ClinicalSupervisor Schema
      },
    ]
  },
  {
    timestamps: true,
  }
);

// static register method
// we use a regular function instead of a arrow function because in arrow function we cannot use "this" keyword

AdminSchema.statics.register = async function(userId){
  
    //validation
    if(!userId){
        throw Error("userId must be filled");
    }
  
    // is userId already exits
    const exists = await this.findOne({userId});
  
    if(exists){
        throw Error("userId already exists");
    }
  
    const admin = await this.create({user:userId});
    
    return admin;
  }


module.exports = mongoose.model("Admin", AdminSchema);

