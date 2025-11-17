import React from "react";
import { useParams, Link } from "react-router-dom";
import { DOCTORS } from "../data/doctors";

export default function DoctorProfile() {
  const { id } = useParams();
  const doc = DOCTORS.find((d) => String(d.id) === id);
  if (!doc) return <div className="p-6">Doctor not found</div>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <div className="flex gap-4 items-center">
        <img src={doc.photo} alt={doc.name} className="w-24 h-24 rounded-md" />
        <div>
          <h2 className="text-xl font-semibold">{doc.name}</h2>
          <div className="text-gray-600">
            {doc.qual} • {doc.spec}
          </div>
          <div className="text-xs text-gray-400">
            {doc.exp} years experience
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold">About</h3>
        <p className="text-sm text-gray-600 mt-2">
          Experienced physiotherapist with specialization in {doc.spec}. (Add
          more profile details when backend is ready.)
        </p>
      </div>

      <div className="mt-6 flex gap-2">
        <Link
          to="/booking"
          className="bg-indigo-600 text-white px-4 py-2 rounded"
        >
          Book Now
        </Link>
        <Link to="/doctors" className="border px-4 py-2 rounded">
          Back to list
        </Link>
      </div>
    </div>
  );
}
