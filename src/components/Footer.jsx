import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">SriLanka Guide</h2>
          <p className="text-gray-400">
            Your trusted travel companion in Sri Lanka.  
            Plan, explore, and enjoy your journey from start to finish.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link to="/destinations" className="hover:text-yellow-400">Destinations</Link></li>
            <li><Link to="/packages" className="hover:text-yellow-400">Packages</Link></li>
            <li><Link to="/advice" className="hover:text-yellow-400">Travel Advice</Link></li>
            <li><Link to="/blog" className="hover:text-yellow-400">Blog</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Email: info@srilankaguide.com</li>
            <li>Phone: +94 77 123 4567</li>
            <li>Colombo, Sri Lanka</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-yellow-500 transition">
              <FaFacebookF className="text-white" />
            </a>
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-yellow-500 transition">
              <FaInstagram className="text-white" />
            </a>
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-yellow-500 transition">
              <FaYoutube className="text-white" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500">
        © {new Date().getFullYear()} SriLanka Guide. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
