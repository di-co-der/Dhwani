import React from 'react';
import Sidebar from '../components/Sidebar';
import Adminform from '../components/Adminform';

const Admin = () => {
    return (
        <div className="flex pt-8">
        {/* Sidebar - On the left side */}
        <Sidebar />
  
        {/* Main Content - on the right side */}
        <div className="flex-1 p-6 ">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <Adminform />
        </div>
      </div>
    );
}

export default Admin;