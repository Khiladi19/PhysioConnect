import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white/60 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center shadow">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M12 2v20"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 9h14"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-slate-900 font-semibold text-lg">
                  HealPlus
                </span>
                <span className="text-slate-500 text-xs -mt-0.5">
                  Trusted home healthcare
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link className="text-slate-600 hover:text-slate-900" to="/doctors">
              Doctors
            </Link>
            <Link
              className="text-slate-600 hover:text-slate-900"
              to="/specialties"
            >
              Specialties
            </Link>
            <Link className="text-slate-600 hover:text-slate-900" to="/about">
              About
            </Link>
            <Link className="text-slate-600 hover:text-slate-900" to="/contact">
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="hidden md:inline-block text-sm px-4 py-2 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50"
            >
              Login
            </Link>
            {/* <Link to="/book" className="inline-block text-sm px-4 py-2 rounded-full bg-blue-600 text-white shadow hover:brightness-95">
              Book Appointment
            </Link> */}
            <Link to="/book" className=" inline-block text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-600 text-white shadow hover:brightness-95">
              Book Appointment
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100"
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                {open ? (
                  <path
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 7h18M3 12h18M3 17h18"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white/95">
          <div className="px-4 pt-3 pb-6 space-y-2">
            <Link
              onClick={() => setOpen(false)}
              className="block py-2 text-slate-700"
              to="/doctors"
            >
              Doctors
            </Link>
            <Link
              onClick={() => setOpen(false)}
              className="block py-2 text-slate-700"
              to="/specialties"
            >
              Specialties
            </Link>
            <Link
              onClick={() => setOpen(false)}
              className="block py-2 text-slate-700"
              to="/about"
            >
              About
            </Link>
            <Link
              onClick={() => setOpen(false)}
              className="block py-2 text-slate-700"
              to="/contact"
            >
              Contact
            </Link>
            <div className="pt-2">
              <Link
                onClick={() => setOpen(false)}
                to="/book"
                className="w-full block text-center py-2 rounded-full bg-blue-600 text-white"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
