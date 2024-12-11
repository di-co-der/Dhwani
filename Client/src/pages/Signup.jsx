import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import signupImg from "../assets/login_image-removebg-preview.png";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profile, setProfile] = useState("Admin"); // Default profile
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    // Validation for password confirmation
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const res = await fetch("http://localhost:4000/api/user/register", {
      method: "POST",
      body: JSON.stringify({ name:fullName, email, phone, password, profile }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await res.json();

    if (res.ok) {
      setFullName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setConfirmPassword("");
      setProfile("Admin"); // Reset profile to default
      setError(null);

      // Redirect to login page after successful signup
      navigate("/login");
    } else {
      setError(json.error);
    }
  };

  return (
    <div>
      <section
        id="signup"
        className="min-h-screen w-full flex flex-col-reverse lg:flex-row items-center justify-center bg-gradient-to-b from-white to-[#d2ddfc] pt-16"
      >
        {/* Signup Form Section */}
        <div className="w-full lg:w-6/12 flex flex-col items-center justify-center py-8 px-4 lg:py-24 lg:px-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 text-center lg:text-left">
            Create Your Account
          </h1>
          <p className="text-gray-600 mb-6 text-lg lg:text-xl text-center lg:text-left">
            Fill in the details to get started!
          </p>
          <form onSubmit={handleSignup} className="w-full max-w-md space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="fullName">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your full name"
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
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
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your phone number"
                required
              />
            </div>

            {/* Profile Selection */}
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="profile">
                Select Profile
              </label>
              <select
                id="profile"
                value={profile}
                onChange={(e) => setProfile(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              >
                <option value="admin">Admin</option>
                <option value="clinical-supervisor">clinical-supervisor</option>
                <option value="student-therapist">student-therapist</option>
              </select>
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Create a password"
                required
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label
                className="block text-gray-700 mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Re-enter your password"
                required
              />
            </div>

            {/* Error Display */}
            {error && <div className="text-red-500 mb-4">{error}</div>}

            {/* Terms and Conditions */}
            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                className="mr-2 h-5 w-5 text-blue-500 rounded"
                required
              />
              <label htmlFor="terms" className="text-gray-700 text-sm">
                I agree to the{" "}
                <a href="#" className="text-indigo-500 hover:underline">
                  Terms and Conditions
                </a>
              </label>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-6/12 flex items-center justify-center">
          <img
            className="w-full max-w-lg object-contain lg:h-screen"
            src={signupImg}
            alt="Signup"
          />
        </div>
      </section>
    </div>
  );
};

export default Signup;
