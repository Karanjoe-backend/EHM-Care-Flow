import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { doctorsDummy } from "../../Data/doctorData";

export default function AdminDoctors() {
  const [doctors, setDoctors] = useState([]);
  const [tab, setTab] = useState("active");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Seed dummy data ONLY if not already present
    const stored = localStorage.getItem("doctors");

    if (!stored) {
      localStorage.setItem(
        "doctors",
        JSON.stringify(doctorsDummy)
      );
      setDoctors(doctorsDummy);
    } else {
      setDoctors(JSON.parse(stored));
    }
  }, []);

  const filtered = doctors.filter((d) => {
    const q = query.toLowerCase();
    const matchSearch =
      d.name.toLowerCase().includes(q) ||
      d.id.toLowerCase().includes(q) ||
      d.department.toLowerCase().includes(q);

    const matchTab =
      tab === "active"
        ? d.status === "Active"
        : d.status === "Resigned";

    return matchSearch && matchTab;
  });

  return (
    <div className="min-h-screen bg-white px-10 py-8">

      {/* PAGE HEADER */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-slate-900">
          Doctors
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Hospital medical staff registry
        </p>
      </div>

      {/* CONTROLS */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-10 border-b border-slate-200">
          <Tab
            label="Active Doctors"
            active={tab === "active"}
            onClick={() => setTab("active")}
          />
          <Tab
            label="Resigned Doctors"
            active={tab === "resigned"}
            onClick={() => setTab("resigned")}
          />
        </div>

        <input
          type="text"
          placeholder="Search by name, ID, or department"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-80 px-4 py-2 text-sm
                     border border-slate-300
                     rounded-md
                     text-slate-700
                     placeholder-slate-400
                     focus:outline-none
                     focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* TABLE */}
      <div className="border border-slate-200 rounded-lg overflow-hidden">
        <table className="w-full text-sm table-fixed">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="px-6 py-3 text-left w-[32%]">
                Doctor
              </th>
              <th className="px-6 py-3 text-left w-[24%]">
                Department
              </th>
              <th className="px-6 py-3 text-left w-[20%]">
                Designation
              </th>
              <th className="px-6 py-3 text-left w-[24%]">
                {tab === "active" ? "Status" : "Resigned On"}
              </th>
            </tr>
          </thead>

          <tbody>
            {filtered.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="px-6 py-14 text-center
                             text-slate-500"
                >
                  No doctors found
                </td>
              </tr>
            )}

            {filtered.map((d) => (
              <tr
                key={d.id}
                onClick={() =>
                  navigate(`/admin/doctors/${d.id}`)
                }
                className={`border-t border-slate-200
                            h-14 cursor-pointer
                            hover:bg-slate-50
                            ${
                              d.status === "Resigned"
                                ? "opacity-70"
                                : ""
                            }`}
              >
                {/* DOCTOR */}
                <td className="px-6">
                  <div className="flex flex-col leading-tight">
                    <span className="font-medium text-slate-900">
                      {d.name}
                    </span>
                    <span className="text-xs text-slate-400 mt-0.5">
                      ID · {d.id}
                    </span>
                  </div>
                </td>

                {/* DEPARTMENT */}
                <td className="px-6 text-slate-700 truncate">
                  {d.department}
                </td>

                {/* DESIGNATION */}
                <td className="px-6 text-slate-700 truncate">
                  {d.designation}
                </td>

                {/* STATUS / DATE */}
                <td className="px-6">
                  {tab === "active" ? (
                    <span
                      className="inline-flex items-center
                                 px-3 py-1
                                 rounded-full text-xs
                                 font-medium
                                 bg-emerald-50
                                 text-emerald-700
                                 border border-emerald-200"
                    >
                      Active
                    </span>
                  ) : (
                    <span className="text-slate-500 text-sm">
                      {d.resignedOn || "—"}
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

/* ===== TAB COMPONENT ===== */

function Tab({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`pb-3 text-sm font-medium
        ${
          active
            ? "border-b-2 border-blue-600 text-blue-600"
            : "text-slate-500 hover:text-slate-700"
        }`}
    >
      {label}
    </button>
  );
}
