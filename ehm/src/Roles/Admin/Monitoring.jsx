import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { patients, vitalsTrend } from "../../Data/monitoringData";

export default function PatientMonitoring() {
  return (
    <div className="min-h-screen bg-slate-50 px-8 py-6 space-y-8">

      {/* ================= HEADER ================= */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Patient Monitoring
        </h1>
        <p className="text-sm text-slate-600 mt-1">
          Real-time vitals and condition overview
        </p>
      </div>

      {/* ================= PATIENT INFO ================= */}
      <section className="bg-white border border-slate-200 rounded-lg p-6">
        <h2 className="text-sm font-semibold text-slate-700 mb-4">
          Patient Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Info label="Patient ID" value={patients.id} />
          <Info label="Name" value={patients.name} />
          <Info
            label="Age / Gender"
            value={`${patients.age}, ${patients.gender}`}
          />
          <Info label="Ward" value={patients.ward} />
          <Info label="Assigned Doctor" value={patients.assignedDoctor} />
          <Info
            label="Current Status"
            value={
              <span className="inline-flex px-3 py-1 rounded-full
                               text-xs font-medium
                               bg-red-50 text-red-700
                               border border-red-200">
                {patients.status}
              </span>
            }
          />
        </div>
      </section>

      {/* ================= VITALS TREND ================= */}
      <section className="bg-white border border-slate-200 rounded-lg p-6">
        <h2 className="text-sm font-semibold text-slate-700 mb-4">
          Vitals Trend (SpO₂ & Pulse)
        </h2>

        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={vitalsTrend}>
              <XAxis
                dataKey="time"
                tick={{ fill: "#64748b", fontSize: 12 }}
              />
              <YAxis
                tick={{ fill: "#64748b", fontSize: 12 }}
              />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="spo2"
                stroke="#dc2626"
                strokeWidth={2.5}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="pulse"
                stroke="#1e3a8a"
                strokeWidth={2.5}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* ================= LATEST VITALS ================= */}
      <section className="bg-white border border-slate-200 rounded-lg p-6">
        <h2 className="text-sm font-semibold text-slate-700 mb-4">
          Latest Vitals
        </h2>

        <table className="w-full text-sm table-fixed">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-4 py-2 text-left w-[25%]">Time</th>
              <th className="px-4 py-2 text-left w-[25%]">SpO₂ (%)</th>
              <th className="px-4 py-2 text-left w-[25%]">Pulse (bpm)</th>
              <th className="px-4 py-2 text-left w-[25%]">Flag</th>
            </tr>
          </thead>

          <tbody>
            {vitalsTrend.map((v, i) => (
              <tr
                key={i}
                className="border-t border-slate-200"
              >
                <td className="px-4 py-2 text-slate-700">
                  {v.time}
                </td>
                <td className="px-4 py-2 text-slate-700">
                  {v.spo2}
                </td>
                <td className="px-4 py-2 text-slate-700">
                  {v.pulse}
                </td>
                <td className="px-4 py-2">
                  {v.spo2 < 92 ? (
                    <span className="inline-flex px-3 py-1 rounded-full
                                     text-xs font-medium
                                     bg-red-50 text-red-700
                                     border border-red-200">
                      Critical
                    </span>
                  ) : (
                    <span className="inline-flex px-3 py-1 rounded-full
                                     text-xs font-medium
                                     bg-emerald-50 text-emerald-700
                                     border border-emerald-200">
                      Normal
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

    </div>
  );
}

/* ================= HELPERS ================= */

function Info({ label, value }) {
  return (
    <div>
      <p className="text-xs text-slate-500">{label}</p>
      <p className="text-sm font-medium text-slate-900 mt-1">
        {value}
      </p>
    </div>
  );
}
