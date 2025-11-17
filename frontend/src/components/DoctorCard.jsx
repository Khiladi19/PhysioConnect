import { Star } from "lucide-react";

const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden cursor-pointer group">

      {/* Top Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
        />

        {/* Premium Badge */}
        <span className="absolute top-3 left-3 bg-black/80 text-white text-xs px-3 py-1 rounded-full tracking-wide">
          ★ Premium
        </span>

        {/* Specialization Badge */}
        <span className="absolute bottom-3 right-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
          {doctor.specialization}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">

        {/* Name */}
        <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
          {doctor.name}
        </h2>

        {/* Experience */}
        <p className="text-sm text-gray-600 mt-1">
          {doctor.experience} years experience • {doctor.city}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
          <span className="text-sm font-medium text-gray-800">{doctor.rating}</span>
          <span className="text-xs text-gray-500">({doctor.reviews} reviews)</span>
        </div>

        {/* Price */}
        <div className="mt-3 flex items-center justify-between">
          <p className="text-lg font-bold text-gray-900">
            ₹{doctor.fees}
            <span className="text-sm text-gray-500 ml-1">/ session</span>
          </p>
        </div>

        {/* Book Button */}
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition">
          Book Appointment
        </button>

      </div>
    </div>
  );
};

export default DoctorCard;

