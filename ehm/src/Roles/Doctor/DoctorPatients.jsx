import { useNavigate } from "react-router-dom";
import { useState } from "react";

/* ---------- Dummy Data ---------- */
// const patients = []; // try empty state
const patients = [
  {
    id: "P20488",
    name: "Meena Devi",
    condition: "Respiratory distress",
    priority: "High",
    updated: "10 mins ago"
  },
  {
    id: "P10239",
    name: "Arun Kumar",
    condition: "Post-op review",
    priority: "Normal",
    updated: "1 hour ago"
  }
];

export default function MyPatients() {
  const navigate = useNavigate();
  // const [expandedRow, setExpandedRow] = useState(null);
  

  return (
    <div className="bg-gray-50 min-h-screen p-6 space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-xl font-semibold text-gray-900">
          My Patients
        </h1>
        <p className="text-sm text-gray-500">
          Patients currently under your care
        </p>
      </div>

      {/* EMPTY STATE */}
      {patients.length === 0 && (
        <div className="bg-white border border-gray-200 rounded-lg
                        flex flex-col items-center justify-center
                        py-16 text-center">
          <p className="text-sm font-medium text-gray-700">
            No patients assigned
          </p>
          <p className="text-xs text-gray-500 mt-1">
            You currently have no patients under your care.
          </p>
        </div>
      )}

      {/* PATIENT TABLE */}
      {patients.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <table className="w-full text-sm table-fixed">

            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="px-4 py-3 text-left w-[30%]">Patient</th>
                <th className="px-4 py-3 text-left w-[30%]">Condition</th>
                <th className="px-4 py-3 text-left w-[15%]">Priority</th>
                <th className="px-4 py-3 text-left w-[15%]">Last Update</th>
                <th className="px-4 py-3 text-center w-[10%]">Actions</th>
              </tr>
            </thead>

            <tbody>
              {patients.map((p) => (
                <>
                  {/* MAIN ROW */}
                  <tr
                    key={p.id}
                    className="border-t hover:bg-gray-50"
                  >
                    <td
                      className="px-4 py-3 cursor-pointer"
                      onClick={() => navigate(`/doctor/patient/${p.id}`)}
                    >
                      <p className="font-medium text-gray-900">
                        {p.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {p.id}
                      </p>
                    </td>

                    <td className="px-4 py-3 text-gray-700">
                      {p.condition}
                    </td>

                    <td className="px-4 py-3">
                      <Priority level={p.priority} />
                    </td>

                    <td className="px-4 py-3 text-gray-500">
                      {p.updated}
                    </td>

                    {/* ACTION TOGGLE */}
                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() =>
                          setExpandedRow(
                            expandedRow === p.id ? null : p.id
                          )
                        }
                        className="text-gray-600 hover:text-black text-lg"
                      >
                        ⋮
                      </button>
                    </td>
                  </tr>

                  {/* EXPANDED ACTION ROW */}
                  {/* {expandedRow === p.id && (
                    <tr className="bg-gray-50">
                      <td colSpan={5} className="px-6 py-4">
                        <div className="flex gap-4">
                          <ActionButton
                            label="Read Patient"
                            onClick={() =>
                              navigate(`/doctor/patient/${p.id}`)
                            }
                          />
                          
                        </div>
                      </td>
                    </tr>
                  )} */}
                </>
              ))}
            </tbody>

          </table>
        </div>
      )}

    </div>
  );
}

/* ---------- Helpers ---------- */

function Priority({ level }) {
  const styles = {
    High: "text-red-600",
    Normal: "text-gray-700"
  };

  return (
    <span className={`text-sm font-medium ${styles[level]}`}>
      {level}
    </span>
  );
}

function ActionButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 border border-gray-300
                 rounded text-sm text-gray-700
                 hover:bg-gray-100"
    >
      {label}
    </button>
  );
}
