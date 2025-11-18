import React from "react";
import Hero from "../components/Hero";
import DoctorCard from "../components/DoctorCard";
import { Link } from "react-router-dom";
import { sampleDoctors } from "../data/sampleDoctors";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Recommended Doctors Section */}
      <section className="relative mt-16">
        {/* Background Layer */}
        <div className="absolute inset-0 bg-slate-50 rounded-t-[40px] -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-slate-800">
              Recommended Doctors
            </h2>

            <Link
              to="/doctors"
              className="text-blue-600 text-sm font-medium hover:underline"
            >
              View all →
            </Link>
          </div>

          <p className="text-slate-500 text-sm mt-1">
            Trusted and verified specialists near you.
          </p>

          {/* Doctors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {sampleDoctors.slice(0, 6).map((doc, idx) => (
              <DoctorCard key={idx} doctor={doc} />
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-10 text-center">
            <Link
              to="/doctors"
              className="inline-block px-6 py-3 rounded-xl bg-blue-600 text-white text-sm font-medium shadow hover:bg-blue-700"
            >
              Explore All Doctors
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

