import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 pt-8 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
              Trusted home healthcare — book certified professionals near you
            </h1>
            <p className="mt-4 text-slate-600 max-w-xl">
              HealPlus connects you with verified doctors and specialists for
              virtual consultations, in-clinic visits and home appointments.
              Fast booking, easy rescheduling, trusted care.
            </p>

            <div className="mt-6 bg-white rounded-2xl p-4 shadow-md max-w-2xl">
              <form className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <input
                    className="w-full px-4 py-3 rounded-lg border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="Search doctors, specialties or symptoms (e.g., physiotherapy, cardiology)"
                    type="text"
                  />
                </div>

                <div className="w-full sm:w-[220px]">
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-100 bg-white">
                    <option>All cities</option>
                    <option>Delhi</option>
                    <option>Mumbai</option>
                    <option>Bengaluru</option>
                  </select>
                </div>

                <div className="w-full sm:w-[140px]">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-blue-600 text-white font-medium shadow"
                  >
                    Search
                  </button>
                </div>
              </form>
              <div className="mt-3 text-xs text-slate-500">
                Pro tip: try "physiotherapist near me" or "knee pain".
              </div>
            </div>

            <div className="mt-6 flex gap-4 items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  ✓
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-800">
                    Verified Professionals
                  </div>
                  <div className="text-xs text-slate-500">
                    Background and license checked
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-green-50 text-green-600">
                  ⏱
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-800">
                    Quick Booking
                  </div>
                  <div className="text-xs text-slate-500">
                    Slots within 24 hours
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-slate-500">Top rated</div>
                  <div className="text-lg font-semibold text-slate-900">
                    Physiotherapy at home
                  </div>
                </div>
                <div className="text-blue-600 font-bold text-xl">4.8★</div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg border border-slate-100">
                  <div className="text-sm font-medium">Knee Pain</div>
                  <div className="text-xs text-slate-500">
                    Expert therapists
                  </div>
                </div>
                <div className="p-3 rounded-lg border border-slate-100">
                  <div className="text-sm font-medium">Back Pain</div>
                  <div className="text-xs text-slate-500">Certified care</div>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  to="/doctors"
                  className="inline-block px-4 py-3 rounded-full bg-blue-600 text-white font-medium shadow"
                >
                  Explore physiotherapists
                </Link>
              </div>
            </div>

            <div className="absolute -bottom-6 right-6 hidden sm:block">
              <div className="bg-white/90 rounded-xl px-4 py-3 shadow-sm border border-slate-100 w-64">
                <div className="flex items-center gap-3">
                  <img
                    src="/src/assets/clinic.png"
                    alt="clinic"
                    className="w-11 h-11 rounded-lg"
                  />
                  <div>
                    <div className="text-sm font-medium text-slate-900">
                      In-clinic visits available
                    </div>
                    <div className="text-xs text-slate-500">
                      Find nearest partner clinics
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
