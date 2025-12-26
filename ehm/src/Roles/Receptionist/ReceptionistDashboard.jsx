import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

/* ---------- Dummy Data ---------- */

const stats = [
  { label: "Appointments", value: 18 },
  { label: "Registrations", value: 6 },
  { label: "Walk-ins", value: 4 }
];

const flowData = [
  { time: "Morning", count: 8 },
  { time: "Afternoon", count: 6 },
  { time: "Evening", count: 4 }
];

const notices = [
  "Peak OPD expected between 11 AM – 1 PM",
  "Two doctors unavailable post 4 PM"
];

export default function ReceptionistDashboard() {
  return (
    <div className="bg-[#f9fafb] min-h-screen p-6 space-y-10">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          Front Desk Overview
        </h1>
        <p className="text-sm text-gray-500">
          Live patient flow snapshot
        </p>
      </div>

      {/* FLOW CARDS */}
      <div className="grid grid-cols-3 gap-6">
        {stats.map((s, i) => (
          <div
            key={i}
            className="rounded-xl p-6
                       bg-gradient-to-br
                       from-white to-emerald-50
                       border border-emerald-100"
          >
            <p className="text-sm text-gray-600">
              {s.label}
            </p>
            <p className="text-4xl font-bold text-gray-900 mt-2">
              {s.value}
            </p>
            <div className="h-1 w-10 bg-emerald-400 rounded mt-4" />
          </div>
        ))}
      </div>

      {/* VISUAL FLOW */}
      <section className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-sm font-medium text-gray-700 mb-4">
          Patient Flow Today
        </h2>

        <div className="h-52">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={flowData}>
              <XAxis dataKey="time" />
              <Tooltip />
              <Bar
                dataKey="count"
                fill="#22c55e"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* SYSTEM NOTICES */}
      <section className="grid grid-cols-2 gap-6">
        {notices.map((n, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200
                       rounded-xl p-5"
          >
            <p className="text-sm text-gray-700">
              {n}
            </p>
          </div>
        ))}
      </section>

    </div>
  );
}
