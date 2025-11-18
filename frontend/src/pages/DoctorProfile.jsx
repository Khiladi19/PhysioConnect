import {easeInOut, motion} from "framer-motion"
import React from "react";
import { useParams } from "react-router-dom";
import { sampleDoctors } from "../data/sampleDoctors";

export default function DoctorProfile() {
  const { id } = useParams();

  // Find doctor from URL id
  const doctor = sampleDoctors.find((d) => d.id === Number(id));

  // If wrong / invalid ID
  if (!doctor) {
    return (
      <div className="text-center py-20 text-xl font-semibold text-red-600">
         Doctor not found
      </div>
    );
  }
  return (
  <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

    {/* Page Container Animation */}
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6,  }}
    >

      {/* ===== Top Profile Banner ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
      >
        <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 p-8 sm:p-10 text-white">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">

            {/* Doctor Avatar */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-32 h-32 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-4xl font-bold shadow-lg border border-white/20 overflow-hidden"
            >
              <img src= {doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
            </motion.div>

            {/* Profile Info */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold">{doctor.name}</h1>
              <p className="text-blue-100 text-lg mt-1 font-medium">{doctor.specialization}</p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 mt-4 text-sm text-blue-100">
                <div className="flex items-center gap-2">🎓 {doctor.experience}+ yrs</div>
                <div className="flex items-center gap-2">⭐ {doctor.rating}</div>
                <div className="flex items-center gap-2">💬 {doctor.reviewsCount} reviews</div>
              </div>

              {/* Fee */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-5 inline-block bg-white/20 px-5 py-2 rounded-full text-sm backdrop-blur font-medium"
              >
                Consultation Fee: {doctor.fee}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ===== About Section ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-10 bg-white p-8 shadow-md rounded-3xl border border-slate-100 hover:shadow-xl transition-all"
      >
        <h2 className="text-xl font-semibold text-slate-900">About</h2>
        <p className="text-slate-600 mt-3 leading-relaxed">{doctor.about}</p>

        {/* Languages */}
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider">Languages</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {doctor.languages.map((lang, idx) => (
              <motion.span
                key={idx}
                whileHover={{ scale: 1.1 }}
                className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full shadow-sm text-sm"
              >
                {lang}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Clinic */}
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider">Clinic</h3>
          <p className="text-slate-600 mt-1">{doctor.clinicName}</p>
        </div>
      </motion.div>

      {/* ===== Availability Section ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-10 bg-white p-8 shadow-md rounded-3xl border border-slate-100 hover:shadow-xl transition-all"
      >
        <h2 className="text-xl font-semibold text-slate-900">Available Today</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
          {doctor.slots.map((slot, idx) => (
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              key={idx}
              className="px-4 py-2 border rounded-lg text-sm text-slate-700 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
            >
              {slot}
            </motion.button>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 w-full py-4 bg-blue-600 text-white rounded-2xl font-semibold shadow-lg hover:bg-blue-700 active:scale-95 transition-transform"
        >
          Book Appointment
        </motion.button>
      </motion.div>

      {/* ===== Reviews Section ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-10 bg-white p-8 shadow-md rounded-3xl border border-slate-100 hover:shadow-xl transition-all"
      >
        <h2 className="text-xl font-semibold text-slate-900">Patient Reviews</h2>

        <div className="mt-6 flex items-center gap-4">
          <div className="text-5xl font-bold text-blue-600">{doctor.rating}</div>
          <div className="text-slate-600 text-lg">{doctor.reviewsCount} total reviews</div>
        </div>

        <div className="mt-8 space-y-6">
          {doctor.reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + idx * 0.1, duration: 0.5 }}
              className="border-b pb-5 last:border-none"
            >
              <div className="flex justify-between items-center">
                <h4 className="font-medium text-slate-900">{review.user}</h4>
                <span className="text-yellow-500 font-semibold">⭐ {review.rating}</span>
              </div>
              <p className="text-slate-700 mt-2">{review.comment}</p>
              <div className="text-xs text-slate-400 mt-1">{review.date}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </motion.div>
  </section>
);

}

