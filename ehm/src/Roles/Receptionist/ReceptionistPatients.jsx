import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PatientList() {
  const navigate = useNavigate();

  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("patients")) || [];
    setPatients(stored);
  }, []);

  const filteredPatients = patients.filter((p) => {
    const q = search.toLowerCase();
    return (
      p.name?.toLowerCase().includes(q) ||
      p.mobile?.toLowerCase().includes(q) ||
      p.id?.toLowerCase().includes(q)
    );
  });

  return (
    <div className="bg-[#f9fafb] min-h-screen p-6 space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Patient List
          </h1>
          <p className="text-sm text-gray-500">
            Registered patients
          </p>
        </div>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search by name, mobile or ID"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-72 px-4 py-2 border border-gray-300
                     rounded-md text-sm
                     focus:ring-1 focus:ring-emerald-500"
        />
      </div>

      {/* EMPTY (NO DATA) */}
      {patients.length === 0 && (
        <div className="bg-white border rounded-xl py-24 text-center">
          <p className="text-sm text-gray-600">
            No patients registered yet
          </p>
        </div>
      )}

      {/* EMPTY (NO MATCH) */}
      {patients.length > 0 && filteredPatients.length === 0 && (
        <div className="bg-white border rounded-xl py-24 text-center">
          <p className="text-sm text-gray-600">
            No matching patients found
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Try searching by name, mobile number, or patient ID
          </p>
        </div>
      )}

      {/* TABLE */}
      {filteredPatients.length > 0 && (
        <div className="bg-white border border-gray-200
                        rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="px-4 py-3 text-left">Patient</th>
                <th className="px-4 py-3 text-left">Mobile</th>
                <th className="px-4 py-3 text-left">Visit</th>
                <th className="px-4 py-3 text-left">Department</th>
                <th className="px-4 py-3 text-left">Registered</th>
              </tr>
            </thead>

            <tbody>
              {filteredPatients.map((p) => (
                <tr
                  key={p.id}
                  onClick={() =>
                    navigate(`/receptionist/patient/${p.id}`)
                  }
                  className="border-t hover:bg-gray-50
                             cursor-pointer"
                >
                  <td className="px-4 py-3">
                    <p className="font-medium text-gray-900">
                      {p.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {p.id}
                    </p>
                  </td>

                  <td className="px-4 py-3">
                    {p.mobile}
                  </td>

                  <td className="px-4 py-3">
                    <span className={`text-xs px-2 py-1 rounded
                      ${
                        p.visit === "Emergency"
                          ? "bg-red-50 text-red-600"
                          : "bg-emerald-50 text-emerald-700"
                      }`}
                    >
                      {p.visit}
                    </span>
                  </td>

                  <td className="px-4 py-3">
                    {p.department}
                  </td>

                  <td className="px-4 py-3 text-gray-500">
                    {p.registeredAt}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
