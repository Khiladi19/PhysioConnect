import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-slate-200 pt-14 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1 */}
          <div>
            <h3 className="text-2xl font-bold text-white tracking-wide">HealPlus</h3>
            <p className="mt-4 text-sm leading-relaxed opacity-90 max-w-xs">
              Trusted home physiotherapy & doctor consultation services
              delivered by certified medical professionals.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 mt-6">
              {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-700 hover:bg-blue-600 transition cursor-pointer"
                  >
                    <Icon size={16} />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
              Services
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link to="/doctors" className="hover:text-white transition">Find Doctors</Link></li>
              <li><Link to="/physiotherapy" className="hover:text-white transition">Home Physiotherapy</Link></li>
              <li><Link to="/consult" className="hover:text-white transition">Online Consultation</Link></li>
              <li><Link to="/clinic" className="hover:text-white transition">Clinic Visits</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
              Support
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link to="/help" className="hover:text-white transition">Help Center</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition">Terms of Service</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
              Download App
            </h4>

            <div className="mt-4 space-y-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-12 cursor-pointer hover:scale-105 transition"
              />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-12 cursor-pointer hover:scale-105 transition"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-700 mt-12 pt-6 text-center">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} <span className="font-semibold">HealPlus</span> — All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

