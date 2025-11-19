import React from "react";

export default function LoadingScreen() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-white gap-5">

      {/* Logo + Text */}
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center shadow">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M12 2v20"
              stroke="white"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 9h14"
              stroke="white"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="flex flex-col leading-tight">
          <span className="text-slate-900 font-semibold text-xl">HealPlus</span>
          <span className="text-slate-500 text-xs -mt-0.5">
            Trusted home healthcare
          </span>
        </div>
      </div>

      {/* Circular Loader */}
      <div className="w-10 h-10 border-4 border-gray-200 rounded-full border-t-blue-500 animate-spin"></div>
    </div>
  );
}
