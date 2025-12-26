import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function NurseLayout() {
  const navigate = useNavigate();

  const navClass = ({ isActive }) =>
    `block px-4 py-2 rounded-md text-sm transition
     ${
       isActive
         ? "bg-sky-50 text-sky-700"
         : "text-gray-700 hover:bg-gray-100"
     }`;

  return (
    <div className="h-screen flex overflow-hidden bg-[#f8fafc] text-gray-900">

      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-gray-200
                        flex flex-col shrink-0">

        {/* Brand */}
        <div className="px-6 py-5 border-b border-gray-200">
          <h1 className="text-lg font-semibold">
            CareFlow
          </h1>
          <p className="text-xs text-gray-500">
            Nurse Station
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          <NavLink to="/nurse" end className={navClass}>
            Dashboard
          </NavLink>

          <NavLink to="/nurse/patients" className={navClass}>
            Assigned Patients
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
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* HEADER */}
        <header className="h-12 bg-white border-b border-gray-200
                           flex items-center justify-between px-6
                           sticky top-0 z-10">
          <div className="text-sm text-gray-500">
            Nursing Workspace
          </div>

          <div className="text-sm text-gray-600">
            Nurse Mary
          </div>
        </header>

        {/* CONTENT */}
        <main className="flex-1 overflow-y-auto p-6 bg-[#f8fafc]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
