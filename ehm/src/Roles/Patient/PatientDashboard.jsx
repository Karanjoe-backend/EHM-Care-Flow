export default function PatientDashboard() {
  return (
    <div className="min-h-full bg-[#F8FAFC] p-6 space-y-8">

      {/* GREETING */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Hello, Alex
        </h1>
        <p className="text-sm text-slate-500">
          Today · {new Date().toDateString()}
        </p>
      </div>

      {/* HEALTH SNAPSHOT */}
      <section>
        <h2 className="text-sm font-medium text-slate-600 mb-3">
          Health Snapshot
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <VitalCard
            title="Heart Rate"
            value="72"
            unit="bpm"
            color="blue"
          />
          <VitalCard
            title="SpO₂"
            value="98"
            unit="%"
            color="cyan"
          />
          <VitalCard
            title="Blood Pressure"
            value="120/80"
            unit="mmHg"
            color="emerald"
          />
          <VitalCard
            title="Temperature"
            value="36.8"
            unit="°C"
            color="orange"
          />
        </div>
      </section>

      {/* UPCOMING APPOINTMENT */}
      <section>
        <h2 className="text-sm font-medium text-slate-600 mb-3">
          Upcoming Appointment
        </h2>

        <div className="bg-white rounded-2xl p-5 border shadow-sm">
          <p className="text-xs text-slate-500">
            Tomorrow
          </p>
          <h3 className="text-lg font-semibold text-slate-900 mt-1">
            Dr. Priya
          </h3>
          <p className="text-sm text-slate-600">
            Pulmonology · 10:30 AM
          </p>

          <div className="mt-3 text-xs text-slate-500">
            Please arrive 15 minutes early
          </div>
        </div>
      </section>

      {/* CARE TEAM */}
      <section>
        <h2 className="text-sm font-medium text-slate-600 mb-3">
          Your Care Team
        </h2>

        <div className="bg-white rounded-2xl p-5 border shadow-sm space-y-3">
          <CareRow label="Doctor" value="Dr. Priya" />
          <CareRow label="Nurse" value="Nurse Anitha" />
        </div>
      </section>

      {/* INFO BANNER */}
      <div className="bg-blue-50 border border-blue-200
                      rounded-xl p-4 text-sm text-blue-700">
        Your health records are updated regularly by your care team.
      </div>
    </div>
  );
}

/* ===== COMPONENTS ===== */

function VitalCard({ title, value, unit, color }) {
  const colors = {
    blue: "border-blue-500",
    cyan: "border-cyan-500",
    emerald: "border-emerald-500",
    orange: "border-orange-400"
  };

  return (
    <div className={`bg-white border-l-4 ${colors[color]}
                     rounded-xl p-4 shadow-sm`}>
      <p className="text-xs text-slate-500">
        {title}
      </p>
      <div className="flex items-baseline gap-1 mt-1">
        <p className="text-xl font-semibold text-slate-900">
          {value}
        </p>
        <span className="text-xs text-slate-500">
          {unit}
        </span>
      </div>
    </div>
  );
}

function CareRow({ label, value }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-slate-500">{label}</span>
      <span className="font-medium text-slate-900">{value}</span>
    </div>
  );
}
