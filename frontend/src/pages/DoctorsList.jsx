import React, { useState } from "react";
import DoctorCard from "../components/DoctorCard";
import { sampleDoctors } from "../data/sampleDoctors";

export default function DoctorsList() {
  const [search, setSearch] = useState("");
  const [selectedCity, setSelectedCity] = useState("All");
  const [selectedSpecialization, setSelectedSpecialization] = useState("All");

  const cities = ["All", ...new Set(sampleDoctors.map((d) => d.city))];
  const specializations = [
    "All",
    ...new Set(sampleDoctors.map((d) => d.specialization)),
  ];

  // --- FILTER LOGIC ----
  const filteredDoctors = sampleDoctors.filter((doc) => {
    return (
      (search === "" ||
        doc.name.toLowerCase().includes(search.toLowerCase()) ||
        doc.specialization.toLowerCase().includes(search.toLowerCase())) &&
      (selectedCity === "All" || doc.city === selectedCity) &&
      (selectedSpecialization === "All" ||
        doc.specialization === selectedSpecialization)
    );
  });

  return (
    <section className="min-h-screen bg-slate-50 pb-20">
      {/* Header */}
      <div className="max-w-5xl mx-auto pt-12 px-4">
        <h1 className="text-3xl font-semibold text-slate-800">
          Find the Right Doctor
        </h1>
        <p className="text-slate-500 mt-2">
          Book trusted specialists with verified experience & patient reviews.
        </p>
      </div>

      {/* Filters Panel */}
      <div className="max-w-5xl mx-auto mt-8 px-4">
        <div className="bg-white rounded-2xl shadow-sm p-4 border border-slate-100">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Search */}
            <input
              type="text"
              placeholder="Search by name or specialization"
              className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {/* Specialization */}
            <select
              className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={selectedSpecialization}
              onChange={(e) => setSelectedSpecialization(e.target.value)}
            >
              {specializations.map((spec) => (
                <option key={spec} value={spec}>
                  {spec}
                </option>
              ))}
            </select>

            {/* City */}
            <select
              className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              {cities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Doctors Grid */}
      <div className="max-w-5xl mx-auto mt-10 px-4">
        {filteredDoctors.length === 0 ? (
          <div className="text-center py-20 text-slate-600">
            <p className="text-xl font-medium">No doctors found</p>
            <p className="text-sm mt-2">Try changing your filters or search.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.map((doc, idx) => (
              <DoctorCard key={idx} doctor={doc} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
