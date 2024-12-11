import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginImg from "../assets/login_image-removebg-preview.png";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profile, setProfile] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!profile) {
            setError("Please select a user type.");
            return;
        }

        const res = await fetch("http://localhost:4000/api/user/login", {
            method: "POST",
            body: JSON.stringify({ email, password, profile }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const json = await res.json();

        if (res.ok) {
            setEmail("");
            setPassword("");
            setError(null);
            localStorage.setItem("user", JSON.stringify(json));

            // Navigate based on user type
            if (profile === "clinical_supervisor") {
                navigate("/clinical-supervisor");
            } else if (profile === "student_therapist") {
                navigate("/student-therapist");
            } 
            //else if (profile === "hod") {
            //     navigate("/hod");
            // } 
            else if (profile === "Admin") {
                navigate("/admin");
            }
        } else {
            setError(json.error);
        }
    };

    return (
        <div>
            {/* <Navbar /> */}
            <div className="flex flex-col">
                <section
                    id="login"
                   className="min-h-screen w-full flex flex-col-reverse lg:flex-row items-center justify-center bg-gradient-to-b from-white to-[#d2ddfc] pt-16"
                >
                    <div className="h-full mt-24 w-6/12 bg-white flex flex-col items-center justify-center pb-24 bg-gradient-to-b from-white to-[#d2ddfc]">
                        <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome Back</h1>
                        <p className="text-gray-600 mb-6 text-lg">I am a</p>
                        <div className="flex justify-center space-x-4 mb-6">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="userType"
                                    value="clinical_supervisor"
                                    onChange={(e) => setProfile(e.target.value)}
                                    className="mr-2"
                                />
                                Clinical Supervisor
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="userType"
                                    value="student_therapist"
                                    onChange={(e) => setProfile(e.target.value)}
                                    className="mr-2"
                                />
                                Student Therapist
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="userType"
                                    value="hod"
                                    onChange={(e) => setProfile(e.target.value)}
                                    className="mr-2"
                                />
                                HOD
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="userType"
                                    value="Admin"
                                    onChange={(e) => setProfile(e.target.value)}
                                    className="mr-2"
                                />
                                Admin
                            </label>
                        </div>

                        <form onSubmit={handleLogin} className="w-full px-8">
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="email">
                                    Email Id
                                </label>
                                <input
                                    id="email"
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Enter your password"
                                />
                            </div>
                            {error && <div className="text-red-500 mb-4">{error}</div>}
                            <button
                                type="submit"
                                className="w-full bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition"
                            >
                                Login
                            </button>
                        </form>
                    </div>

                    <div className="h-auto">
                        <img
                            className="h-full w-auto max-w-full object-contain"
                            src={loginImg}
                            alt="Work Progress"
                        />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Login;
