import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

/* ---------- Dummy Data ---------- */

const summary = {
  totalPatients: 12,
  needsReview: 3,
  appointments: 5
};

const vitalsTrend = [
  { time: "8 AM", alerts: 1 },
  { time: "10 AM", alerts: 2 },
  { time: "12 PM", alerts: 3 },
  { time: "2 PM", alerts: 2 },
  { time: "4 PM", alerts: 1 }
];

const patientRisk = [
  { name: "Stable", value: 8 },
  { name: "Needs Review", value: 3 },
  { name: "Critical", value: 1 }
];

const appointments = [
  { time: "10:30 AM", patient: "Rahul S", type: "Consultation" },
  { time: "12:00 PM", patient: "Anitha K", type: "Follow-up" }
];

const COLORS = ["#9ca3af", "#f59e0b", "#ef4444"];

/* ---------- Component ---------- */

export default function DoctorDashboard() {
  return (
    <div className="bg-gray-50 min-h-screen p-6 space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-xl font-semibold text-gray-900">
          Dashboard
        </h1>
        <p className="text-sm text-gray-500">
          Today’s clinical overview
        </p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-3 gap-4">
        <Summary label="Patients Today" value={summary.totalPatients} />
        <Summary label="Needs Review" value={summary.needsReview} />
        <Summary label="Appointments" value={summary.appointments} />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-3 gap-6">

        {/* Alerts Trend */}
        <section className="col-span-2 bg-white border border-gray-200 rounded-lg p-4">
          <h2 className="text-sm font-medium text-gray-700 mb-2">
            Alert Trend (Today)
          </h2>

          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={vitalsTrend}>
                <XAxis dataKey="time" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="alerts"
                  stroke="#4f46e5"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Patient Risk Distribution */}
        <section className="bg-white border border-gray-200 rounded-lg p-4">
          <h2 className="text-sm font-medium text-gray-700 mb-2">
            Patient Risk
          </h2>

          <div className="h-48 flex items-center justify-center">
            <PieChart width={180} height={180}>
              <Pie
                data={patientRisk}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={3}
                dataKey="value"
              >
                {patientRisk.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>
            </PieChart>
          </div>

          <div className="mt-2 space-y-1 text-xs text-gray-600">
            {patientRisk.map((p, i) => (
              <div key={i} className="flex justify-between">
                <span>{p.name}</span>
                <span>{p.value}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

  
      

    </div>
  );
}

/* ---------- Helpers ---------- */

function Summary({ label, value }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-2xl font-medium text-gray-900">
        {value}
      </p>
    </div>
  );
}
