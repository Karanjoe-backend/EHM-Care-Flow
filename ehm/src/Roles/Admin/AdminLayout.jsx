import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function AdminLayout() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const navClass = ({ isActive }) =>
    `flex items-center px-4 py-2 rounded-md text-sm transition
     ${
       isActive
         ? "bg-slate-800 text-white"
         : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
     }`;

  return (
    <div className="min-h-screen flex bg-[#0f172a] text-slate-200">

      {/* SIDEBAR */}
      <aside className="w-64 bg-[#020617] border-r border-slate-800 flex flex-col">

        {/* Brand */}
        <div className="px-6 py-5 border-b border-slate-800">
          <h1 className="text-lg font-semibold text-slate-100">
            CareFlow
          </h1>
          <p className="text-xs text-slate-500">
            Administration
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          <NavLink to="/admin" end className={navClass}>
            Dashboard
          </NavLink>
          <NavLink to="/admin/monitoring" className={navClass}>
            Monitoring
          </NavLink>
          <NavLink to="/admin/patients" className={navClass}>
            Patients
          </NavLink>
          <NavLink to="/admin/doctors" className={navClass}>
            Doctors
          </NavLink>
          <NavLink to="/admin/nurses" className={navClass}>
            Staff / Nurses
          </NavLink>
          <NavLink to="/admin/settings" className={navClass}>
            Settings
          </NavLink>
        </nav>

        {/* Logout */}
        <div className="px-4 py-4 border-t border-slate-800">
          <button
            onClick={logout}
            className="w-full text-left text-sm text-slate-500 hover:text-red-400"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN */}
      <div className="flex-1 flex flex-col">

        {/* TOP BAR */}
        <header className="h-14 flex items-center justify-between
                           px-6 border-b border-slate-800
                           bg-[#020617]">
          <div>
            <h2 className="text-sm font-medium text-slate-200">
              Hospital Operations
            </h2>
            <p className="text-xs text-slate-500">
              Governance & oversight
            </p>
          </div>

          <div className="text-xs text-slate-400">
            Admin Console
          </div>
        </header>

        {/* CONTENT */}
        <main className="flex-1 p-6 overflow-y-auto bg-[#0b0f14] ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
