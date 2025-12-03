import React from "react";

import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 text-white py-10 mt-20 border-t border-orange-200">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">WarmPaws</h2>
          <p className="text-sm text-white">
            Caring for your pets this winter with love, warmth, and expert care. 🐾
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2  tex-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
            <li><Link to="/services" className="hover:text-orange-500">Services</Link></li>
            <li><Link to="/blogposts" className="hover:text-orange-500">Blogs</Link></li>
            <li><Link to="/auth/login" className="hover:text-orange-500">Login</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold mb-2 text-white">Contact Us</h3>
          <p className="text-sm text-white">Chattogram, Bangladesh</p>
          <p className="text-sm text-white">Email: support@warmpaws.com</p>
          <div className="flex space-x-4 mt-4 text-white text-xl ">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="mailto:support@warmpaws.com"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-white mt-10">
        &copy; {new Date().getFullYear()} WarmPaws. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;