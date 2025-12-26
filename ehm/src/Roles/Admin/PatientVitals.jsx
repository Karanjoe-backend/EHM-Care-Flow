import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

export default function PatientVitals({ patient, onBack }) {
  return (
    <div>
      <button
        onClick={onBack}
        className="mb-4 text-blue-600 underline"
      >
        ← Back to patient list
      </button>

      {/* Patient Info */}
      <div className="bg-white p-4 rounded shadow mb-4">
        <h2 className="font-semibold">
          {patient.name} • {patient.age} yrs • {patient.ward}
        </h2>
      </div>

      {/* Vitals Section */}
      {patient.vitals.length > 0 ? (
        <>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <VitalChart
              title="Heart Rate"
              data={patient.vitals}
              dataKey="hr"
            />
            <VitalChart
              title="SpO₂"
              data={patient.vitals}
              dataKey="spo2"
            />
          </div>
        </>
      ) : (
        <EmptyState message="No vitals data available" />
      )}

      {/* Activity */}
      <div className="bg-white p-4 rounded shadow">
        <h3 className="font-semibold mb-2">Activity</h3>

        {patient.activity.length > 0 ? (
          <ul className="list-disc pl-5 text-sm">
            {patient.activity.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        ) : (
          <EmptyState message="No activity found" />
        )}
      </div>
    </div>
  );
}

function VitalChart({ title, data, dataKey }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <p className="font-semibold mb-2">{title}</p>
      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line dataKey={dataKey} stroke="#f97316" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function EmptyState({ message }) {
  return (
    <div className="text-gray-500 text-sm italic p-4">
      {message}
    </div>
  );
}
