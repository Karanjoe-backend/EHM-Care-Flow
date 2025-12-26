import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const STATUS_OPTIONS = ["Normal", "Attention", "Doctor Notified"];

export default function AdminMonitoringPatients() {
  const [patients, setPatients] = useState([]);
  const [openStatus, setOpenStatus] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("patients")) || [];
    setPatients(data);
  }, []);

  const updateStatus = (id, status) => {
    const updated = patients.map((p) =>
      p.id === id
        ? {
            ...p,
            monitoringStatus: status,
            adminUpdatedAt: new Date().toLocaleString()
          }
        : p
    );

    localStorage.setItem("patients", JSON.stringify(updated));
    setPatients(updated);
    setOpenStatus(null);
  };

  return (
    <div className="min-h-screen bg-white px-8 py-6">

      {/* PAGE HEADER */}
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-slate-900">
          Patient Monitoring
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Overview of patient vitals status
        </p>
      </div>

      {/* TABLE */}
      <div className="border border-slate-200 rounded-lg overflow-hidden">
        <table className="w-full text-sm table-fixed">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="px-6 py-3 text-left w-[34%]">Patient</th>
              <th className="px-6 py-3 text-left w-[24%]">Assigned Doctor</th>
              <th className="px-6 py-3 text-left w-[22%]">Last Updated</th>
              <th className="px-6 py-3 text-left w-[20%]">Status</th>
            </tr>
          </thead>

          <tbody>
            {patients.map((p) => (
              <tr
                key={p.id}
                className="border-t border-slate-200
                           hover:bg-slate-50
                           h-14"
              >
                {/* PATIENT */}
                <td
                  onClick={() =>
                    navigate(`/admin/monitoring/${p.id}`)
                  }
                  className="px-6 cursor-pointer"
                >
                  <div className="flex flex-col">
                    <span className="font-medium text-slate-900 truncate">
                      {p.name}
                    </span>
                    <span className="text-xs text-slate-400">
                      ID · {p.id}
                    </span>
                  </div>
                </td>

                {/* DOCTOR */}
                <td className="px-6 text-slate-700 truncate">
                  {p.assignedDoctor || "—"}
                </td>

                {/* LAST UPDATE */}
                <td className="px-6 text-slate-500 truncate">
                  {p.lastVitalsAt || "—"}
                </td>

                {/* STATUS */}
                <td className="px-6 relative">
                  <button
                    onClick={() =>
                      setOpenStatus(
                        openStatus === p.id ? null : p.id
                      )
                    }
                    className="flex items-center gap-2
                               focus:outline-none"
                  >
                    <StatusBadge status={p.monitoringStatus} />
                    <span className="text-slate-400 text-xs">
                      ▾
                    </span>
                  </button>

                  {/* DROPDOWN */}
                  {openStatus === p.id && (
                    <div
                      className="mt-2 w-44
                                 bg-white border border-slate-200
                                 rounded-md shadow-sm"
                    >
                      {STATUS_OPTIONS.map((status) => (
                        <button
                          key={status}
                          onClick={() =>
                            updateStatus(p.id, status)
                          }
                          className="block w-full text-left
                                     px-4 py-2 text-sm
                                     text-slate-700
                                     hover:bg-slate-100"
                        >
                          {status}
                        </button>
                      ))}
                    </div>
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

/* ===== STATUS BADGE ===== */

function StatusBadge({ status }) {
  const styles = {
    Normal:
      "bg-emerald-50 text-emerald-700 border border-emerald-200",
    Attention:
      "bg-amber-50 text-amber-700 border border-amber-200",
    "Doctor Notified":
      "bg-blue-50 text-blue-700 border border-blue-200"
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium
        ${styles[status] || "bg-slate-100 text-slate-600"}
      `}
    >
      {status || "—"}
    </span>
  );
}
