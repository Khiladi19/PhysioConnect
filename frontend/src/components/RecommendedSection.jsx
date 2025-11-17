import DoctorCard from "./DoctorCard";

export default function RecommendedSection({ doctors }) {
  return (
    <section className="px-4 py-8 max-w-6xl mx-auto">
      <h2 className="text-xl font-semibold text-gray-900 mb-3">
        Our Specialized Doctor Recommendations
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {doctors.map((doc) => (
          <div key={doc.id} className="relative">
            <span className="absolute top-2 right-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded-full shadow">
              Trusted
            </span>
            <DoctorCard doc={doc} />
          </div>
        ))}
      </div>
    </section>
  );
}
