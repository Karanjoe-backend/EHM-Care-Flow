import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar
} from "recharts";

import { kpiData, patientTrend, admissionStats } from "../../Data/adminMetrics";
import { recentActivities } from "../../Data/recentActivities";

export default function AdminDashboard() {
  return (
    <div className="space-y-8 bg-slate-50 p-6 rounded-lg">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Admin Dashboard
        </h1>
        <p className="text-sm text-slate-600 mt-1">
          Hospital operations overview
        </p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-4 gap-6">
        {kpiData.map((item, index) => (
          <KPI key={index} title={item.title} value={item.value} />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-8">
        <Card title="Patient Inflow (Last 7 Days)">
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={patientTrend}>
              <XAxis dataKey="day" tick={{ fill: "#64748b", fontSize: 12 }} />
              <YAxis tick={{ fill: "#64748b", fontSize: 12 }} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="patients"
                stroke="#1e3a8a"
                strokeWidth={2.5}
                dot={{ r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card title="Admissions vs Discharges">
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={admissionStats}>
              <XAxis dataKey="name" tick={{ fill: "#64748b", fontSize: 12 }} />
              <YAxis tick={{ fill: "#64748b", fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="value" fill="#1e3a8a" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Insights + Activity */}
      <div className="grid grid-cols-2 gap-8">
        <Card title="Operational Insights">
          <ul className="text-sm text-slate-700 space-y-2 leading-relaxed">
            <li>• Patient inflow increased by <span className="font-medium">18%</span> this week</li>
            <li>• ICU occupancy nearing optimal capacity</li>
            <li>• 3 patients flagged for critical review</li>
            <li>• Nurse workload higher in ICU wing</li>
          </ul>
        </Card>

        <Card title="Recent Activity">
          <ul className="space-y-4">
            {recentActivities.map(activity => (
              <li
                key={activity.id}
                className="flex justify-between items-start"
              >
                <div>
                  <p className="text-sm text-slate-800 font-medium">
                    {activity.action}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    by {activity.by}
                  </p>
                </div>

                <span className="text-xs text-slate-400 whitespace-nowrap">
                  {activity.time}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}

/* ------------------ Components ------------------ */

function KPI({ title, value }) {
  return (
    <div className="bg-white p-5 rounded-xl border border-slate-200">
      <p className="text-sm text-slate-500">{title}</p>
      <p className="text-2xl font-semibold text-slate-900 mt-2">
        {value}
      </p>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div className="bg-white p-5 rounded-xl border border-slate-200">
      <h3 className="text-sm font-semibold text-slate-700 mb-4">
        {title}
      </h3>
      {children}
    </div>
  );
}
