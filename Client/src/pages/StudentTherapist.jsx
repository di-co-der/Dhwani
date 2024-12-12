import React from 'react';

const StudentTherapist = () => {
    return (
        <div>
            {/* <h1 className="mt-52">Student Therapist</h1> */}

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
                        <tr className="bg-gray-200">
                            <td className="py-3 px-4 text-sm text-gray-700">1.</td>
                            <td className="py-3 px-4 text-sm text-gray-700">Patient 1</td>
                            <td className="py-3 px-4 text-sm text-gray-700">dd/mm/yyyy</td>
                            <td className="py-3 px-4 text-sm text-gray-700">hh:mm</td>
                            <td className="py-3 px-4 text-sm text-gray-700">
                                <select className="bg-gray-200 text-gray-700">
                                    <option>Unmarked</option>
                                </select>
                            </td>
                        </tr>
                        <tr className="bg-gray-200">
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
                        <tr className="bg-gray-200">
                            <td className="py-3 px-4 text-sm text-gray-700">3.</td>
                            <td className="py-3 px-4 text-sm text-gray-700">Patient 3</td>
                            <td className="py-3 px-4 text-sm text-gray-700">dd/mm/yyyy</td>
                            <td className="py-3 px-4 text-sm text-gray-700">hh:mm</td>
                            <td className="py-3 px-4 text-sm text-gray-700">
                                <select className="bg-gray-200 text-gray-700">
                                    <option>Unmarked</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    );
}

export default StudentTherapist;
