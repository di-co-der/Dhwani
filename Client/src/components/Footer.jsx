import React from "react";
import {
  faTwitter,
  faInstagram,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Brand Section */}
        <div>
          <h2 className="text-white text-3xl font-bold">
            Work<span className='text-[#6C6EF5]'>Track</span>
          </h2>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center">
              <span className="mr-2">✉</span> connect@Bluetown.com
            </li>
            <li className="flex items-center">
              <span className="mr-2">📞</span> 548 574 3679 42
            </li>
          </ul>
        </div>

        {/* Home Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Home</h3>
          <ul className="space-y-2 pl-2">
            <li >Features</li>
            <li>Pricing</li>
            <li>Knowledge Base</li>
            <li>Documentation</li>
            <li>Clients Feedback</li>
          </ul>
        </div>

        {/* Pages Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Pages</h3>
          <ul className="space-y-2 pl-2">
            <li>Blogs</li>
            <li>Careers</li>
            <li>Communities</li>
            <li>Webinars</li>
            <li>Videos</li>
          </ul>
        </div>

        {/* Address & Socials */}
        <div>
          <h3 className="text-white font-semibold mb-3">Our Address</h3>
          <p className="mb-4">Bluetown India Pvt Ltd, L6-602,6th Floor,Iconic Tower,Sector-62,Noida,Uttar Pradesh</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white transition-colors-duration-200">
              G
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors-duration-200">
              <i className="faTwitter"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors-duration-200">
              <i className="faInstagram"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors-duration-200">
              <i className="faLinkedin"></i>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;