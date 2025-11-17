import { useState } from "react";

export default function SpecializationTabs({ selected, onChange }) {
  const tabs = [
    "Ortho",
    "Neuro",
    "Post-Operative",
    "Sports Injury",
    "Geriatric",
  ];

  return (
    <div className="flex gap-3 overflow-x-auto px-4 py-4 border-b bg-white sticky top-16 z-40">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap shadow-md transition-all duration-200
${
  selected === tab
    ? "bg-indigo-600 text-white"
    : "bg-gray-100 hover:bg-gray-200"
}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
