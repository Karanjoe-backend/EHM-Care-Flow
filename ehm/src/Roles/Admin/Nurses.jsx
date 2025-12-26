import { useEffect, useState } from "react";
import { nursesDummy } from "../../Data/nurseData";

export default function AdminStaffNurses() {
  const [nurses, setNurses] = useState([]);
  const [tab, setTab] = useState("active");
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Seed dummy data ONLY if not already present
    const stored = localStorage.getItem("nurses");

    if (!stored) {
      localStorage.setItem(
        "nurses",
        JSON.stringify(nursesDummy)
      );
      setNurses(nursesDummy);
    } else {
      setNurses(JSON.parse(stored));
    }
  }, []);
  /* ================= FILTER LOGIC ================= */

  const filteredNurses = nurses
    .filter((n) =>
      tab === "active"
        ? n.status === "Active"
        : n.status === "Resigned"
    )
    .filter((n) => {
      const q = search.toLowerCase();
      return (
        n.name.toLowerCase().includes(q) ||
        n.id.toLowerCase().includes(q) ||
        n.department.toLowerCase().includes(q)
      );
    });

  return (
    <div className="min-h-screen bg-white px-10 py-8">

      {/* ================= HEADER ================= */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-slate-900">
          Nursing Staff
        </h1>
        <p className="text-sm text-slate-600 mt-1">
          Hospital nursing staff registry
        </p>
      </div>

      {/* ================= TOP BAR ================= */}
      <div className="flex items-center justify-between mb-6">

        {/* TABS */}
        <div className="flex gap-8 border-b border-slate-200">
          <Tab
            label="Active Nurses"
            active={tab === "active"}
            onClick={() => setTab("active")}
          />
          <Tab
            label="Resigned Nurses"
            active={tab === "resigned"}
            onClick={() => setTab("resigned")}
          />
        </div>

        {/* SEARCH */}
       <input
      type="text"
      placeholder="Search by name, ID or department"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-80 px-4 py-2.5 text-sm
                 border border-slate-300
                 rounded-md
                 text-slate-800
                 placeholder:text-slate-400
                 bg-white
                 focus:outline-none
                 focus:ring-2
                 focus:ring-[#1e3a8a]
                 focus:border-[#1e3a8a]"
    />
      </div>

      {/* ================= TABLE ================= */}
      <div className="border border-slate-200 rounded-lg overflow-hidden">
        <table className="w-full text-sm table-fixed">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="px-6 py-3 text-left w-[30%]">
                Nurse
              </th>
              <th className="px-6 py-3 w-[20%]">
                Department
              </th>
              <th className="px-6 py-3 w-[20%]">
                Shift
              </th>
              <th className="px-6 py-3 w-[30%]">
                {tab === "active" ? "Status" : "Resigned On"}
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredNurses.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="px-6 py-14 text-center
                             text-slate-500"
                >
                  No nurses found
                </td>
              </tr>
            )}

            {filteredNurses.map((n) => (
              <tr
                key={n.id}
                className={`border-t border-slate-200 h-14
                  ${n.status === "Resigned" ? "opacity-70" : ""}`}
              >
                {/* NURSE */}
                <td className="px-6">
                  <div className="flex flex-col leading-tight">
                    <span className="font-medium text-slate-900">
                      {n.name}
                    </span>
                    <span className="text-xs text-slate-400">
                      ID · {n.id}
                    </span>
                  </div>
                </td>

                {/* DEPARTMENT */}
                <td className="px-6 text-slate-700">
                  {n.department}
                </td>

                {/* SHIFT */}
                <td className="px-6 text-slate-700">
                  {n.shift}
                </td>

                {/* STATUS / RESIGNED */}
                <td className="px-6">
                  {tab === "active" ? (
                    <span className="inline-flex items-center
                                     px-3 py-1 rounded-full
                                     text-xs font-medium
                                     bg-emerald-50
                                     text-emerald-700
                                     border border-emerald-200">
                      Active
                    </span>
                  ) : (
                    <span className="text-slate-500 text-sm">
                      {n.resignedOn || "—"}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ================= TAB COMPONENT ================= */

function Tab({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`pb-3 text-sm font-medium
        ${
          active
            ? "border-b-2 border-[#1e3a8a] text-[#1e3a8a]"
            : "text-slate-500 hover:text-slate-700"
        }`}
    >
      {label}
    </button>
  );
}
