import { SPECIALIZATIONS } from "../data/specializations";

export default function Tabs({ active, onChange }) {
  return (
    <div className="max-w-4xl mx-auto px-4 mt-6 overflow-x-auto">
      <div className="inline-flex gap-2">
        {SPECIALIZATIONS.map((s) => (
          <button
            key={s}
            onClick={() => onChange(s)}
            className={`py-2 px-4 rounded-full border ${
              active === s
                ? "bg-indigo-50 border-indigo-200 text-indigo-700"
                : "bg-white border-gray-200 text-gray-700"
            }`}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
