/* ---------- Dummy Data (render logic later) ---------- */

const summary = {
  assignedPatients: 8,
  pendingTasks: 5,
  criticalAlerts: 1
};

const criticalPatients = [
  {
    id: "P20488",
    name: "Meena Devi",
    note: "SpO₂ dropped below 90%",
    time: "5 mins ago"
  }
];

const tasks = [
  {
    patient: "Arun Kumar",
    task: "Check blood pressure",
    due: "Now"
  },
  {
    patient: "Meena Devi",
    task: "Record SpO₂",
    due: "10 mins"
  }
];

const vitalsQueue = [
  { patient: "Rahul S", lastChecked: "2 hrs ago" },
  { patient: "Anitha K", lastChecked: "1 hr ago" }
];

export default function NurseDashboard() {
  return (
    <div className="bg-[#f8fafc] min-h-screen p-6 space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-xl font-semibold text-gray-900">
          Dashboard
        </h1>
        <p className="text-sm text-gray-500">
          Nursing activity overview
        </p>
      </div>

      {/* SUMMARY */}
      <div className="grid grid-cols-3 gap-4">
        <Summary label="Assigned Patients" value={summary.assignedPatients} />
        <Summary label="Pending Tasks" value={summary.pendingTasks} />
        <Summary label="Critical Alerts" value={summary.criticalAlerts} />
      </div>

      {/* 🚨 CRITICAL ZONE */}
      {criticalPatients.length > 0 && (
        <section className="bg-red-50 border border-red-200
                            rounded-lg p-4">
          <h2 className="text-sm font-medium text-red-700 mb-2">
            Critical Attention Required
          </h2>

          {criticalPatients.map((p) => (
            <div key={p.id} className="text-sm text-red-600">
              <span className="font-medium">{p.name}</span>{" "}
              – {p.note}
              <span className="text-xs text-red-500 ml-2">
                ({p.time})
              </span>
            </div>
          ))}
        </section>
      )}

      {/* MAIN FLOW */}
      <div className="grid grid-cols-2 gap-6">

        {/* TASK QUEUE */}
        <section className="bg-white border border-gray-200 rounded-lg">
          <div className="px-4 py-3 border-b">
            <h2 className="text-sm font-medium text-gray-700">
              Task Queue
            </h2>
          </div>

          <div className="divide-y">
            {tasks.map((t, i) => (
              <div
                key={i}
                className="px-4 py-3 flex justify-between
                           hover:bg-gray-50"
              >
                <div>
                  <p className="font-medium text-gray-900">
                    {t.task}
                  </p>
                  <p className="text-xs text-gray-500">
                    {t.patient}
                  </p>
                </div>

                <span className="text-sm text-sky-600">
                  {t.due}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* VITALS DUE */}
        <section className="bg-white border border-gray-200 rounded-lg">
          <div className="px-4 py-3 border-b">
            <h2 className="text-sm font-medium text-gray-700">
              Vitals Due
            </h2>
          </div>

          <div className="divide-y">
            {vitalsQueue.map((v, i) => (
              <div
                key={i}
                className="px-4 py-3 flex justify-between
                           hover:bg-gray-50"
              >
                <span className="text-gray-900">
                  {v.patient}
                </span>

                <span className="text-xs text-gray-500">
                  Last checked {v.lastChecked}
                </span>
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
