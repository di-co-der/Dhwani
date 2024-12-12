// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import ClinicalSupervisor from "./pages/ClinicalSupervisor";
import StudentTherapist from "./pages/StudentTherapist";
import Admin from "./pages/Admin";
import PatientDetails from "./pages/PatientDetails";

const App = () => {
  const [patients, setPatients] = useState([]); // State to hold patient data

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/clinical-supervisor" element={<ClinicalSupervisor />} />
        <Route path="/student-therapist" element={<StudentTherapist />} />
        <Route
          path="/admin"
          element={<Admin setPatients={setPatients} patients={patients} />}
        />
        <Route
          path="/patient/:id"
          element={<PatientDetails patients={patients} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
