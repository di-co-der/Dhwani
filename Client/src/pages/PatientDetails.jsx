// PatientDetails.js
import React, { useContext } from 'react';
import { PatientContext } from './PatientContext';

const PatientDetails = () => {
  const { patients } = useContext(PatientContext);

  return (
    <div>
      <h1>Patient Details</h1>
      {patients.map((patient, index) => (
        <div key={index}>
          <h2>Patient {index + 1}</h2>
          <p>Date of Birth: {patient.dateOfBirth}</p>
          <p>Gender: {patient.gender}</p>
          <p>Appointment Date: {patient.appointmentDate}</p>
          <p>Appointment Time: {patient.appointmentTime}</p>
          <p>Student Therapist: {patient.studentTherapist}</p>
          <p>Disorder Type: {patient.disorderType}</p>
          <p>Comment: {patient.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default PatientDetails;
