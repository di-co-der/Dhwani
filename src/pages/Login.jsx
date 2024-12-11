import React from 'react';
import loginImg from "../assets/login_image-removebg-preview.png";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            {/* Login Section */}
            <section
                id="login"
                className="h-full w-full bg-white flex pt-16 bg-gradient-to-b from-white to-[#d2ddfc]"
            >
                <div className="h-full mt-24 w-6/12 bg-white flex flex-col items-center justify-center pb-24 bg-gradient-to-b from-white to-[#d2ddfc]">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">
                        Welcome Back
                    </h1>
                    <p className="text-gray-600 mb-6 text-lg">
                        I am a
                    </p>
                    <div className="flex justify-center space-x-4 mb-6">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="userType"
                                value="clinical_supervisor"
                                className="mr-2"
                            />
                            Clinical Supervisor
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="userType"
                                value="student_therapist"
                                className="mr-2"
                            />
                            Student Therapist
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="userType"
                                value="hod"
                                className="mr-2"
                            />
                            HOD
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="userType"
                                value="admin"
                                className="mr-2"
                            />
                            Admin
                        </label>
                    </div>

                    <form className="w-full px-8">
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="email">
                                User Name
                            </label>
                            <input
                                id="email"
                                type="text"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Enter your username"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Enter your password"
                            />
                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <a href="#" className="text-indigo-500 text-sm hover:underline">
                                Reset Password?
                            </a>
                        </div>
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
    );
};

export default Login;
