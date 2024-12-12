const mongoose = require("mongoose");

// Define the Patient schema
const PatientSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: function (v) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
      },
      message: "Invalid email format."
    }
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^\d{10}$/.test(v); // Validates a 10-digit phone number
      },
      message: "Phone number must be 10 digits."
    }
  },
  dob: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required: true
  },
  appointmentDate: {
    type: Date,
    required: true
  },
  appointmentTime: {
    type: String,
    required: true
  },
  typeOfDisorder: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    trim: true
  }
}, {
  timestamps: true // Adds createdAt and updatedAt timestamps
});

// Export the Patient model
const Patient = mongoose.model("Patient", PatientSchema);

// static register method
// we use a regular function instead of a arrow function because in arrow function we cannot use "this" keyword

PatientSchema.statics.register = async function(firstName,lastName,email,phone,dob,gender,
  appointmentDate,appointmentTime,typeOfDisorder,comment){

  //validation
  if(!firstName || !lastName || !email ||!phone){
      throw Error("All fields must be filled");
  }
  // if(!validator.isEmail(email)){
  //     throw Error("Email is not valid");
  // }

  // is email already exits
  const exists = await this.findOne({email});

  if(exists){
      throw Error("Email already exists");
  }

  const patient = await this.create({firstName,lastName,email,phone,dob,gender,
    appointmentDate,appointmentTime,typeOfDisorder,comment});
  
  return patient;
}



module.exports = Patient;
