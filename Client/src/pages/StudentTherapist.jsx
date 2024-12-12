import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentTherapist = () => {
  const navigate = useNavigate();
  const [patients,setPatients] = useState([]);
  useEffect(()=>{
   const fetchPatients = async()=>{
    try {
      
      const res = await fetch("http://localhost:4000/api/patient/showpatient");
  
      const json = await res.json();
      setPatients(json);
      // if (res.ok) {
      //   setFirstName("");
      //   setLastName("");
      //   setEmail("");
      //   setPhone("");
      //   setDob("");
      //   setGender("");
      //   setAppointmentDate("");
      //   setAppointmentTime("");
      //   setTypeOfDisorder("");
      //   setComment("");
      //   setProfile("Admin"); // Reset profile to default
      //   setError(null);
  
      //   // Redirect to login page after successful signup
      //   navigate("/login");
      // }
    }
       catch (error) {
        setError(json.error);
      }
   }
  },[])
  // Function to handle row click
  const handlePatientClick = (patientId) => {
    navigate(`/patient/${patientId}`); // Replace `/patient/${patientId}` with your desired route
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-200">
        <div className="bg-white shadow-md rounded-lg w-full max-w-4xl">
          <h1 className="text-center text-xl font-bold mt-10">Student Therapist</h1>
          <table className="min-w-full border-collapse mt-5">
            <thead>
              <tr className="bg-gray-300">
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">S No.</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Name</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Date</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Time</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {patients?.map((ele,ind)=>{
                  return (
                    <tr
                className="bg-gray-200 cursor-pointer"
                onClick={() => handlePatientClick(1)} // Patient ID 1
              >
                <td className="py-3 px-4 text-sm text-gray-700">{ind+1}</td>
                <td className="py-3 px-4 text-sm text-gray-700">{ele.firstName} {ele.lastName}</td>
                <td className="py-3 px-4 text-sm text-gray-700">{ele.appointmentDate}</td>
                <td className="py-3 px-4 text-sm text-gray-700">{ele.appointmentTime}</td>
                <td className="py-3 px-4 text-sm text-gray-700">
                  <select className="bg-gray-200 text-gray-700">
                    <option>Unmarked</option>
                    <option>Marked</option>
                    <option>Completed</option>
                  </select>
                </td>
              </tr>
                  )
              })}
              
              {/* <tr
                className="bg-gray-200 cursor-pointer"
                onClick={() => handlePatientClick(2)} // Patient ID 2
              >
                <td className="py-3 px-4 text-sm text-gray-700">2.</td>
                <td className="py-3 px-4 text-sm text-gray-700">Patient 2</td>
                <td className="py-3 px-4 text-sm text-gray-700">dd/mm/yyyy</td>
                <td className="py-3 px-4 text-sm text-gray-700">hh:mm</td>
                <td className="py-3 px-4 text-sm text-gray-700">
                  <select className="bg-gray-200 text-gray-700">
                    <option>Unmarked</option>
                  </select>
                </td>
              </tr>
              <tr
                className="bg-gray-200 cursor-pointer"
                onClick={() => handlePatientClick(3)} // Patient ID 3
              >
                <td className="py-3 px-4 text-sm text-gray-700">3.</td>
                <td className="py-3 px-4 text-sm text-gray-700">Patient 3</td>
                <td className="py-3 px-4 text-sm text-gray-700">dd/mm/yyyy</td>
                <td className="py-3 px-4 text-sm text-gray-700">hh:mm</td>
                <td className="py-3 px-4 text-sm text-gray-700">
                  <select className="bg-gray-200 text-gray-700">
                    <option>Unmarked</option>
                  </select>
                </td> */}
              {/* </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentTherapist;
