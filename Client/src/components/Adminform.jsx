import React, { useState, useContext, useEffect } from 'react';
// import { PatientContext } from '../pages/PatientContext';

const Adminform = () => {
//   const { setPatients } = useContext(PatientContext);
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [studentTherapist, setStudentTherapist] = useState('');
  const [typeOfDisorder, setTypeOfDisorder] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      
    const res = await fetch("http://localhost:4000/api/patient/register", {
      method: "POST",
      body: JSON.stringify({ firstName,lastName,email,phone,dob,gender,
        appointmentDate,appointmentTime,typeOfDisorder,comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await res.json();

    if (res.ok) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setDob("");
      setGender("");
      setAppointmentDate("");
      setAppointmentTime("");
      setTypeOfDisorder("");
      setComment("");
      setProfile("Admin"); // Reset profile to default
      setError(null);

      // Redirect to login page after successful signup
      navigate("/login");
    }
  }
     catch (error) {
      setError(json.error);
    }
    setIsSubmitted(true);
  };
  useEffect(()=>{
   const fetchStudentTherapists = async()=>{
       
   }

  },[]);
    return (
        <div>
     <section
        id="signup"
        className="min-h-screen w-full flex flex-col-reverse lg:flex-row items-center justify-center bg-gradient-to-b from-white to-[#d2ddfc]"
      >
        {/* Signup Form Section */}
        <div className="w-full lg:w-6/12 flex flex-col items-center justify-center py-8 px-4 lg:py-24 lg:px-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 text-center lg:text-left">
            Enter Patient Details
          </h1>
          {/* <p className="text-gray-600 mb-6 text-lg lg:text-xl text-center lg:text-left">
            Fill in the details to get started!
          </p> */}
          <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit}>
            {/* First Name */}
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="firstName">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter first name"
                value={firstName}
                onChange={(e)=>setFirstName(e.target.value)}
                required
              />
            </div>
            {/* Last Name */}
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="lastName">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter last name"
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)}
                required
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter phone number"
                required
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
              />
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="dob">
                Date of Birth
              </label>
              <input
                id="dob"
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={dob}
                onChange={(e)=>setDob(e.target.value)}
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="gender">
                Gender
              </label>
              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Appointment Date */}
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="appointmentDate">
                Appointment Date
              </label>
              <input
                id="appointmentDate"
                type="date"
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Appointment Time */}
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="appointmentTime">
                Appointment Time
              </label>
              <input
                id="appointmentTime"
                type="time"
                value={appointmentTime}
                onChange={(e) => setAppointmentTime(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Student Therapist */}
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="studentTherapist">
                Student Therapist
              </label>
              <select
                id="studentTherapist"
                value={studentTherapist}
                onChange={(e) => setStudentTherapist(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select Student Therapist</option>
                {/* Add options for available student therapists here */}
                <option value="Therapist1">Therapist 1</option>
                <option value="Therapist2">Therapist 2</option>
              </select>
            </div>

            {/* Disorder Type */}
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="typeofDisorder">
                Type of Disorder
              </label>
              <select
                id="disorderType"
                value={typeOfDisorder}
                onChange={(e) => setTypeOfDisorder(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Select Disorder Type</option>
                <option value="Virtual Autistic">Virtual Autistic</option>
                <option value="Autism">Autism</option>
                <option value="GDD">GDD</option>
                <option value="ADHD">ADHD</option>
                <option value="SLD">SLD</option>
                <option value="Stammering">Stammering</option>
              </select>
            </div>

            {/* Comment Box */}
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="comment">
                Comment
              </label>
              <textarea
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                rows="4"
                placeholder="Enter your comment here"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
              Pay and Register
            </button>
          </form>
          {isSubmitted && ( // Conditionally render success message
            <p className="text-green-500 text-center mt-4">
              Patient registered successfully!
            </p>
          )}
        </div>

  
      </section>
        </div>
    );
}

export default Adminform;


