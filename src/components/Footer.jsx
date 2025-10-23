import React from "react";

import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-10 mt-20 border-t border-orange-200">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500 mb-2">WarmPaws</h2>
          <p className="text-sm text-gray-600">
            Caring for your pets this winter with love, warmth, and expert care. 🐾
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
            <li><Link to="/services" className="hover:text-orange-500">Services</Link></li>
            <li><Link to="/auth/myprofile" className="hover:text-orange-500">My Profile</Link></li>
            <li><Link to="/auth/login" className="hover:text-orange-500">Login</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-sm text-gray-600">Chattogram, Bangladesh</p>
          <p className="text-sm text-gray-600">Email: support@warmpaws.com</p>
          <div className="flex space-x-4 mt-4 text-orange-500 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="mailto:support@warmpaws.com"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} WarmPaws. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;