import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-blue-900 text-white flex flex-col transition-all duration-300 ">
        <div className="flex flex-col justify-between h-full">
      {/* Menu Items */}
      <ul className="mt-4 space-y-4 px-4">
        <li className="hover:text-blue-300 cursor-pointer">Dashboard</li>
        <li className="hover:text-blue-300 cursor-pointer">Staff</li>
        <li className="hover:text-blue-300 cursor-pointer">Lab</li>
        <li className="hover:text-blue-300 cursor-pointer">Ward</li>
        <li className="hover:text-blue-300 cursor-pointer">Treatment</li>
        <li className="hover:text-blue-300 cursor-pointer">Pharmacy</li>
        <li className="hover:text-blue-300 cursor-pointer">Patient</li>
        {/* <li className="hover:text-blue-300 cursor-pointer">Claim</li> */}
      </ul>

      {/* Logout Section */}
      <div className="p-4 border-t border-blue-700 mt-60">
        <button className="w-full text-left hover:text-blue-300">Logout</button>
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
