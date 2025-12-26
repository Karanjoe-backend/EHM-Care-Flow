/* ---------- Dummy Data ---------- */
const appointments = [
  {
    id: 1,
    patient: "Rahul S",
    time: "10:30 AM",
    status: "Scheduled",
    type: "Normal"
  },
  {
    id: 2,
    patient: "Anitha K",
    time: "12:00 PM",
    status: "Completed",
    type: "Normal"
  },
  {
    id: 3,
    patient: "Meena Devi",
    time: "—",
    status: "Emergency",
    type: "Emergency"
  },
  {
    id: 4,
    patient: "Arun Kumar",
    time: "03:00 PM",
    status: "Cancelled",
    type: "Normal"
  }
];

export default function Appointments() {
  return (
    <div className="bg-gray-50 min-h-screen p-6 space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-xl font-semibold text-gray-900">
          Appointments
        </h1>
        <p className="text-sm text-gray-500">
          Scheduled and emergency consultations
        </p>
      </div>

      {/* Appointments List */}
      <div className="bg-white border border-gray-200 rounded-lg divide-y">

        {appointments.map((a) => (
          <div
            key={a.id}
            className={`flex justify-between items-center px-4 py-3
              ${
                a.type === "Emergency"
                  ? "bg-red-50"
                  : "hover:bg-gray-50"
              }`}
          >
            {/* Left */}
            <div>
              <p className="font-medium text-gray-900">
                {a.patient}
              </p>
              <p className="text-xs text-gray-500">
                {a.type === "Emergency"
                  ? "Emergency case"
                  : `Appointment time: ${a.time}`}
              </p>
            </div>

            {/* Right */}
            <StatusBadge status={a.status} />
          </div>
        ))}

      </div>

      {/* Emergency Explanation */}
      <div className="text-xs text-gray-500">
        Emergency appointments require immediate attention and are not bound to scheduled time slots.
      </div>

    </div>
  );
}

/* ---------- Helper ---------- */

function StatusBadge({ status }) {
  const styles = {
    Scheduled: "text-blue-600",
    Completed: "text-green-600",
    Cancelled: "text-gray-500",
    Emergency: "text-red-600 font-medium"
  };

  return (
    <span className={`text-sm ${styles[status]}`}>
      {status}
    </span>
  );
}
