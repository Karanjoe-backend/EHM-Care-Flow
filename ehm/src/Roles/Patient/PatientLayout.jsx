import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function PatientLayout() {
  const navigate = useNavigate();

  const navClass = ({ isActive }) =>
    `flex flex-col items-center text-xs transition
     ${isActive ? "text-blue-600" : "text-slate-500"}`;

  const handleLogout = () => {
    localStorage.removeItem("patientAuth");
    navigate("/patient-login");
  };

  return (
    <div className="h-screen flex flex-col bg-[#F8FAFC]">

      {/* HEADER */}
      <header
        className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500
                   text-white px-6 py-4 shadow-sm"
      >
        <div className="flex items-center justify-between">
          
          {/* LEFT */}
          <div>
            <h1 className="text-lg font-semibold">
              CareFlow
            </h1>
            <p className="text-xs text-white/80">
              Your health, clearly explained
            </p>
          </div>

          {/* RIGHT — LOGOUT (END) */}
          <button
            onClick={handleLogout}
            className="text-sm text-white/80
                       hover:text-white
                       transition"
          >
            Logout
          </button>

        </div>
      </header>

      {/* CONTENT */}
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>

      {/* BOTTOM NAV */}
      <nav className="h-16 bg-white border-t
                      flex justify-around items-center">
        <NavLink to="/patient" end className={navClass}>
          <span className="text-xl">🏠</span>
          Home
        </NavLink>

        <NavLink to="/patient/diary" className={navClass}>
          <span className="text-xl">📝</span>
          Diary
        </NavLink>

        <NavLink to="/patient/nutrition" className={navClass}>
          <span className="text-xl">🥗</span>
          Nutrition
        </NavLink>

        <NavLink to="/patient/meds" className={navClass}>
          <span className="text-xl">💊</span>
          Meds
        </NavLink>

        <NavLink to="/patient/education" className={navClass}>
          <span className="text-xl">📘</span>
          Info
        </NavLink>

        <NavLink to="/patient/profile" className={navClass}>
          <span className="text-xl">👤</span>
          Profile
        </NavLink>
      </nav>
    </div>
  );
}
