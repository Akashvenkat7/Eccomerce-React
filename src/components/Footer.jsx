// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between mb-6">
          <div className="w-full md:w-1/4">
            <h5 className="font-bold mb-2">Get to Know Us</h5>
            <ul>
              <li className="mb-1"><a href="#" className="hover:underline">Careers</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Blog</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">About Us</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Investor Relations</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">AK Devices</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h5 className="font-bold mb-2">Make Money with Us</h5>
            <ul>
              <li className="mb-1"><a href="#" className="hover:underline">Sell on AK Store</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Affiliate Program</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Fulfillment by AK Store</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Advertise Your Products</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Razer Pay</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h5 className="font-bold mb-2">Customer Service</h5>
            <ul>
              <li className="mb-1"><a href="#" className="hover:underline">Help</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Returns</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Shipping Options</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Manage Your Content and Devices</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h5 className="font-bold mb-2">Join Us</h5>
            <ul>
              <li className="mb-1"><a href="#" className="hover:underline">Become an Affiliate</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Join the AK App</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Get the AK App</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Send Us Feedback</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} My Store. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
