import { useNavigate } from "react-router-dom";

/* ---------- Dummy Data ---------- */
const patients = [
  {
    id: "P20488",
    name: "Meena Devi",
    ward: "ICU - Bed 3",
    lastVitals: "30 mins ago",
    alert: "Low SpO₂"
  },
  {
    id: "P10239",
    name: "Arun Kumar",
    ward: "Ward 5 - Bed 12",
    lastVitals: "2 hrs ago",
    alert: null
  }
];

export default function AssignedPatients() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f8fafc] min-h-screen p-6 space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-xl font-semibold text-gray-900">
          Assigned Patients
        </h1>
        <p className="text-sm text-gray-500">
          Patients under your nursing care
        </p>
      </div>

      {/* EMPTY STATE */}
      {patients.length === 0 && (
        <div className="bg-white border border-gray-200 rounded-lg
                        py-16 text-center">
          <p className="text-sm font-medium text-gray-700">
            No patients assigned
          </p>
          <p className="text-xs text-gray-500 mt-1">
            You currently have no assigned patients.
          </p>
        </div>
      )}

      {/* PATIENT LIST */}
      {patients.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="px-4 py-3 text-left">Patient</th>
                <th className="px-4 py-3 text-left">Ward / Bed</th>
                <th className="px-4 py-3 text-left">Last Vitals</th>
                <th className="px-4 py-3 text-left">Alert</th>
              </tr>
            </thead>

            <tbody>
              {patients.map((p) => (
                <tr
                  key={p.id}
                  onClick={() =>
                    navigate(`/nurse/patient/${p.id}`)
                  }
                  className="border-t hover:bg-gray-50 cursor-pointer"
                >
                  <td className="px-4 py-3">
                    <p className="font-medium text-gray-900">
                      {p.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {p.id}
                    </p>
                  </td>

                  <td className="px-4 py-3 text-gray-700">
                    {p.ward}
                  </td>

                  <td className="px-4 py-3 text-gray-500">
                    {p.lastVitals}
                  </td>

                  <td className="px-4 py-3">
                    {p.alert ? (
                      <span className="text-xs text-red-600">
                        {p.alert}
                      </span>
                    ) : (
                      <span className="text-xs text-gray-400">
                        —
                      </span>
                    )}
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
