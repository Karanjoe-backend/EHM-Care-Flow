import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ===== TIME SLOTS (DUMMY, CAN BE DYNAMIC LATER) ===== */
const TIME_SLOTS = [
  "09:00 AM", "09:30 AM", "10:00 AM",
  "10:30 AM", "11:00 AM", "11:30 AM",
  "02:00 PM", "02:30 PM", "03:00 PM",
  "03:30 PM", "04:00 PM"
];

export default function BookAppointment() {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);

  useEffect(() => {
    setPatients(JSON.parse(localStorage.getItem("patients")) || []);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const appointment = {
      id: "A" + Date.now(),
      patientId: form.get("patientId"),
      patientName: form.get("patientName"),
      doctor: form.get("doctor"),
      department: form.get("department"),
      date: form.get("date"),
      time: selectedSlot,
      status: "Scheduled"
    };

    const existing =
      JSON.parse(localStorage.getItem("appointments")) || [];

    localStorage.setItem(
      "appointments",
      JSON.stringify([...existing, appointment])
    );

    navigate("/receptionist/appointments");
  };

  return (
    <div className="bg-[#f9fafb] min-h-screen p-6 space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          Book Appointment
        </h1>
        <p className="text-sm text-gray-500">
          Schedule patient consultation
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white border border-gray-200
                   rounded-xl p-6 space-y-8 max-w-5xl"
      >
        {/* BASIC SELECTION */}
        <div className="grid grid-cols-2 gap-6">
          <select
            name="patientId"
            required
            className="input"
            onChange={(e) => {
              const p = patients.find(x => x.id === e.target.value);
              document.querySelector("[name=patientName]").value =
                p?.name || "";
            }}
          >
            <option value="">Select Patient</option>
            {patients.map(p => (
              <option key={p.id} value={p.id}>
                {p.name} ({p.id})
              </option>
            ))}
          </select>

          <input
            name="patientName"
            readOnly
            placeholder="Patient Name"
            className="input bg-gray-100"
          />

          <select name="doctor" required className="input">
            <option value="">Doctor</option>
            <option>Dr. Suresh</option>
            <option>Dr. Priya</option>
          </select>

          <select name="department" required className="input">
            <option value="">Department</option>
            <option>General Medicine</option>
            <option>Orthopedics</option>
          </select>

          <input
            type="date"
            name="date"
            required
            className="input"
          />
        </div>

        {/* TIME SLOT PICKER */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-3">
            Select Time Slot
          </p>

          <div className="grid grid-cols-4 gap-3">
            {TIME_SLOTS.map(slot => (
              <button
                type="button"
                key={slot}
                onClick={() => setSelectedSlot(slot)}
                className={`px-4 py-2 rounded-md text-sm border
                  ${
                    selectedSlot === slot
                      ? "bg-emerald-600 text-white border-emerald-600"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
              >
                {slot}
              </button>
            ))}
          </div>

          {!selectedSlot && (
            <p className="text-xs text-gray-500 mt-2">
              Please select a time slot
            </p>
          )}
        </div>

        {/* ACTIONS */}
        <div className="flex justify-end gap-4 pt-4 border-t">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-5 py-2 border rounded-md"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={!selectedSlot}
            className={`px-6 py-2 rounded-md text-sm
              ${
                selectedSlot
                  ? "bg-emerald-600 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
          >
            Confirm Appointment
          </button>
        </div>
      </form>
    </div>
  );
}
