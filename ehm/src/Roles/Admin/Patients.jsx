import { useEffect, useState } from "react";
import { patientsDummy } from "../../Data/patientsDummy";

export default function AdminPatients() {
  const [patients, setPatients] = useState([]);
  const [tab, setTab] = useState("admitted");
  const [search, setSearch] = useState("");

  /* ================= FETCH FROM RECEPTIONIST ================= */
  useEffect(() => {
    // Seed dummy data ONLY if not already present
    const stored = localStorage.getItem("patients");

    if (!stored) {
      localStorage.setItem(
        "patients",
        JSON.stringify(patientsDummy)
      );
      setPatients(patientsDummy);
    } else {
      setPatients(JSON.parse(stored));
    }
  }, []);

  /* ================= FILTER LOGIC ================= */
  const filteredPatients = patients
    .filter((p) =>
      tab === "admitted"
        ? p.status === "Admitted"
        : p.status === "Discharged"
    )
    .filter((p) => {
      const q = search.toLowerCase();
      return (
        p.name?.toLowerCase().includes(q) ||
        p.id?.toLowerCase().includes(q) ||
        p.mobile?.toLowerCase().includes(q)
      );
    });

  return (
    <div className="min-h-screen bg-white px-12 py-10">

      {/* ================= HEADER + SEARCH ================= */}
      <div className="flex items-end justify-between mb-8">

        {/* LEFT */}
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            Patients
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Patient records registered by receptionist
          </p>
        </div>

        {/* RIGHT: SEARCH */}
        <div className="flex flex-col items-end">
          <label className="text-xs text-slate-500 mb-1">
            Search Patient
          </label>
          <input
            type="text"
            placeholder="Name, Patient ID or Mobile"
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

      </div>

      {/* ================= TABS ================= */}
      <div className="flex gap-10 border-b border-slate-200 mb-6">
        <Tab
          label="Admitted Patients"
          active={tab === "admitted"}
          onClick={() => setTab("admitted")}
        />
        <Tab
          label="Discharged Patients"
          active={tab === "discharged"}
          onClick={() => setTab("discharged")}
        />
      </div>

      {/* ================= TABLE / EMPTY ================= */}
      <div className="border border-slate-200 rounded-lg overflow-hidden">

        {patients.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-sm text-slate-500">
              No patients registered yet
            </p>
          </div>
        ) : filteredPatients.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-sm text-slate-500">
              No patients found
            </p>
          </div>
        ) : (
          <table className="w-full text-sm table-fixed">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="px-6 py-3 text-left w-[30%]">
                  Patient
                </th>
                <th className="px-6 py-3 w-[20%]">
                  Mobile
                </th>
                <th className="px-6 py-3 w-[20%]">
                  Assigned Doctor
                </th>
                <th className="px-6 py-3 w-[15%]">
                  Status
                </th>
                <th className="px-6 py-3 w-[15%]">
                  Admitted On
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredPatients.map((p) => (
                <tr
                  key={p.id}
                  className="border-t border-slate-200
                             h-14 hover:bg-slate-50"
                >
                  {/* PATIENT */}
                  <td className="px-6">
                    <div className="flex flex-col leading-tight">
                      <span className="font-medium text-slate-900">
                        {p.name}
                      </span>
                      <span className="text-xs text-slate-400">
                        ID · {p.id}
                      </span>
                    </div>
                  </td>

                  {/* MOBILE */}
                  <td className="px-6 text-slate-700">
                    {p.mobile || "—"}
                  </td>

                  {/* DOCTOR */}
                  <td className="px-6 text-slate-700">
                    {p.assignedDoctor || "—"}
                  </td>

                  {/* STATUS */}
                  <td className="px-6">
                    {p.status === "Discharged" ? (
                      <span className="inline-flex px-3 py-1 rounded-full
                                       text-xs font-medium
                                       bg-slate-100 text-slate-600">
                        Discharged
                      </span>
                    ) : (
                      <span className="inline-flex px-3 py-1 rounded-full
                                       text-xs font-medium
                                       bg-emerald-50 text-emerald-700
                                       border border-emerald-200">
                        Admitted
                      </span>
                    )}
                  </td>

                  {/* ADMISSION DATE */}
                  <td className="px-6 text-slate-700">
                    {p.admittedOn || "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

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
