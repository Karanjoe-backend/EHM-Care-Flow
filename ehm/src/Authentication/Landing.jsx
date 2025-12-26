import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Landing() {
  const navigate = useNavigate();
  const [turning, setTurning] = useState(false);

  const handleAccess = (route) => {
    if (turning) return;

    setTurning(true);

    
    setTimeout(() => {
      navigate(route);
    }, 700);
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
                    bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900">

      <div className="text-white flex flex-col items-center">

        {/* Title */}
        <h1 className="text-4xl font-semibold mb-2 tracking-wide">
          CareFlow
        </h1>
        <p className="text-sm text-indigo-200 mb-8">
          Your Digital Front Door to Care
        </p>

        {/* DOOR */}
        <div className="relative w-[360px] h-[520px] rounded-3xl 
                        bg-gradient-to-b from-indigo-700 to-blue-700
                        shadow-2xl border border-indigo-300/30
                        flex items-center justify-center">

          {/* Glow pulse when active */}
          <div
            className={`absolute inset-0 rounded-3xl 
              bg-gradient-to-b from-purple-400/20 to-blue-400/20
              transition-opacity duration-500
              ${turning ? "opacity-100" : "opacity-0"}`}
          />

          {/* KNOB */}
          <div
            className={`
              absolute right-6 top-1/2 -translate-y-1/2
              w-4 h-16 rounded-full bg-indigo-200
              origin-center
              transition-transform duration-500 ease-in-out
              ${turning ? "rotate-90" : "rotate-0"}
            `}
          />

          {/* CONTENT */}
          {!turning && (
            <div className="z-10 flex flex-col items-center space-y-6 px-6">

              <p className="text-center text-indigo-100 text-sm">
                Select your access path
              </p>

              {/* Patient */}
              <button
                onClick={() => handleAccess("/patient-login")}
                className="w-full py-3 rounded-xl 
                           bg-white text-indigo-800 font-medium
                           hover:bg-indigo-50 transition"
              >
                Access My Health
              </button>

              {/* Divider */}
              <div className="w-full flex items-center gap-3">
                <div className="flex-1 h-px bg-indigo-300/40" />
                <span className="text-xs text-indigo-200">OR</span>
                <div className="flex-1 h-px bg-indigo-300/40" />
              </div>

              {/* Staff */}
              <button
                onClick={() => handleAccess("/staff-login")}
                className="w-full py-3 px-3 rounded-xl 
                           border border-indigo-200/50 
                           text-indigo-100 font-medium
                           hover:bg-indigo-800/40 transition"
              >
                Hospital Staff Access
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <p className="mt-8 text-xs text-indigo-300 text-center max-w-md">
          Secure, role-based access for patients and healthcare professionals
        </p>
      </div>
    </div>
  );
}
