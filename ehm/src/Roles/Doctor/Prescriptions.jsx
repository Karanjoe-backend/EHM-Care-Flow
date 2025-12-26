import { useNavigate } from "react-router-dom";

/* ---------- Dummy Data ---------- */
const patients = [
  {
    id: "P20488",
    name: "Meena Devi",
    lastUpdated: "Today"
  },
  {
    id: "P10239",
    name: "Arun Kumar",
    lastUpdated: "Yesterday"
  }
];

export default function Prescriptions() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen p-6 space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-xl font-semibold text-gray-900">
          Prescriptions
        </h1>
        <p className="text-sm text-gray-500">
          Select a patient to view or update prescriptions
        </p>
      </div>

      {/* Patient List */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="px-4 py-3 text-left">Patient</th>
              <th className="px-4 py-3 text-left">Last Updated</th>
            </tr>
          </thead>

          <tbody>
            {patients.map(p => (
              <tr
                key={p.id}
                onClick={() =>
                  navigate(`/doctor/prescriptions/${p.id}`)
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

                <td className="px-4 py-3 text-gray-500">
                  {p.lastUpdated}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
