import DoctorCard from "./DoctorCard";

export default function Grid({ doctors, onBook }) {
  return (
    <div className="max-w-4xl mx-auto px-4 mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {doctors.map((d) => (
        <DoctorCard key={d.id} doc={d} onBook={onBook} />
      ))}
    </div>
  );
}
