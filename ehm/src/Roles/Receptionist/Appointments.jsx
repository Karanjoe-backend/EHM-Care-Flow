import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ReceptionistAppointments() {
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(stored);
  }, []);

  const updateStatus = (id, status) => {
    const updated = appointments.map((a) =>
      a.id === id ? { ...a, status } : a
    );

    localStorage.setItem(
      "appointments",
      JSON.stringify(updated)
    );
    setAppointments(updated);
  };

  return (
    <div className="bg-[#f9fafb] min-h-screen p-6 space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Appointments
          </h1>
          <p className="text-sm text-gray-500">
            Today’s scheduled appointments
          </p>
        </div>

        {/* ADD BUTTON (ALWAYS AVAILABLE) */}
        <button
          onClick={() =>
            navigate("/receptionist/appointments/book")
          }
          className="px-5 py-2 bg-emerald-600
                     text-white rounded-md text-sm"
        >
          Book Appointment
        </button>
      </div>

      {/* EMPTY STATE */}
      {appointments.length === 0 && (
        <div className="bg-white border border-gray-200
                        rounded-xl py-24 text-center">
          <p className="text-sm font-medium text-gray-700">
            No appointments scheduled
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Book an appointment to get started.
          </p>

          {/* <button
            onClick={() =>
              navigate("/receptionist/appointments/book")
            }
            className="mt-6 px-6 py-2
                       bg-emerald-600 text-white
                       rounded-md text-sm"
          >
            Book Appointment
          </button> */}
        </div>
      )}

      {/* APPOINTMENTS TABLE */}
      {appointments.length > 0 && (
        <div className="bg-white border border-gray-200
                        rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="px-4 py-3 text-left">Patient</th>
                <th className="px-4 py-3 text-left">Doctor</th>
                <th className="px-4 py-3 text-left">Date & Time</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {appointments.map((a) => (
                <tr key={a.id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-3">
                    {a.patientName}
                  </td>
                  <td className="px-4 py-3">
                    {a.doctor}
                  </td>
                  <td className="px-4 py-3">
                    {a.date} · {a.time}
                  </td>
                  <td className="px-4 py-3">
                    <StatusBadge status={a.status} />
                  </td>
                  <td className="px-4 py-3">
                    {a.status === "Scheduled" && (
                      <button
                        onClick={() =>
                          updateStatus(a.id, "Arrived")
                        }
                        className="text-emerald-600
                                   hover:underline text-sm"
                      >
                        Mark Arrival
                      </button>
                    )}
                    {a.status === "Arrived" && (
                      <span className="text-gray-500 text-sm">
                        Waiting
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
}

/* ===== STATUS BADGE ===== */

function StatusBadge({ status }) {
  const styles = {
    Scheduled: "bg-blue-50 text-blue-600",
    Arrived: "bg-emerald-50 text-emerald-700",
    "In Consultation": "bg-yellow-50 text-yellow-700"
  };

  return (
    <span
      className={`px-2 py-1 text-xs rounded
                  ${styles[status]}`}
    >
      {status}
    </span>
  );
}
