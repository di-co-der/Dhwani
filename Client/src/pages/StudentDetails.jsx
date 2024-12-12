import React from 'react';

const StudentDetails = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-200 mt-32">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
            <div className="grid grid-cols-3 gap-4">
                {/* Sidebar */}
                <div className="col-span-1 bg-gray-300 p-4 rounded-lg">
                    <h2 className="text-center font-bold">
                        Admin Generated Registration Form
                    </h2>
                </div>
                {/* Main Content */}
                <div className="col-span-2">
                    {/* Primary Evaluation Section */}
                    <div className="mb-4">
                        <h3 className="font-bold">Primary Evaluation:</h3>
                        <div className="flex flex-col space-y-2">
                            {[...Array(6)].map((_, index) => (
                                <label key={index} className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    {`Stage ${index + 1}`}
                                </label>
                            ))}
                        </div>
                        <textarea
                            className="w-full mt-2 p-2 border rounded"
                            placeholder="Remarks / Description:"
                        ></textarea>
                    </div>

                    {/* Recommended Therapy Plan Section */}
                    <div className="mb-4">
                        <h3 className="font-bold">Recommended Therapy Plan:</h3>
                        <div className="flex space-x-4">
                            {["15 Days", "30 Days", "45 Days", "90 Days"].map((plan, index) => (
                                <label key={index} className="flex items-center">
                                    <input type="radio" name="therapy_plan" className="mr-2" />
                                    {plan}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Sessions Section */}
                    <div className="mb-4">
                        <h3 className="font-bold">Sessions:</h3>
                        <div className="flex items-center space-x-2">
                            <button className="bg-gray-300 p-2 rounded-full">+</button>
                            <button className="bg-gray-300 p-2 rounded-full">-</button>
                        </div>
                    </div>

                    {/* Dates and Remarks Section */}
                    <div className="space-y-4">
                        {[...Array(2)].map((_, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <input
                                    type="date"
                                    className="p-2 border rounded bg-gray-200"
                                />
                                <textarea
                                    className="flex-1 p-2 border rounded"
                                    placeholder="Remarks / Description:"
                                ></textarea>
                                <button className="bg-gray-300 p-2 rounded">Submit</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
// </div>
    );
}

export default StudentDetails;
