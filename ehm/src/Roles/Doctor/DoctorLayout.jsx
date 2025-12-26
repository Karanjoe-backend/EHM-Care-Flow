import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function DoctorLayout() {
  const navigate = useNavigate();

  const navClass = ({ isActive }) =>
    `block px-4 py-2 rounded-md text-sm
     ${
       isActive
         ? "bg-indigo-50 text-indigo-700"
         : "text-gray-700 hover:bg-gray-100"
     }`;

  return (
    <div className="min-h-screen flex bg-[#f8fafc] text-gray-900">

      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">

        {/* Brand */}
        <div className="px-6 py-5 border-b border-gray-200">
          <h1 className="text-lg font-semibold">
            CareFlow
          </h1>
          <p className="text-xs text-gray-500">
            Doctor Portal
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          <NavLink to="/doctor" end className={navClass}>
            Dashboard
          </NavLink>
          <NavLink to="/doctor/patients" className={navClass}>
            My Patients
          </NavLink>
          <NavLink to="/doctor/prescriptions" className={navClass}>
            Prescriptions
          </NavLink>
          <NavLink to="/doctor/appointments" className={navClass}>
            Appointments
          </NavLink>
        </nav>

        {/* Logout */}
        <div className="px-4 py-4 border-t border-gray-200">
          <button
            onClick={() => navigate("/")}
            className="text-sm text-gray-500 hover:text-gray-800"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN */}
      <div className="flex-1 flex flex-col">

        {/* HEADER */}
        <header className="h-12 bg-white border-b border-gray-200
                           flex items-center justify-between px-6">
          <div className="text-sm text-gray-500">
            Doctor Workspace
          </div>

          <div className="text-sm text-gray-600">
            Dr. Suresh Kumar
          </div>
        </header>

        {/* CONTENT */}
        <main className="flex-1 p-6 bg-[#f8fafc] overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
