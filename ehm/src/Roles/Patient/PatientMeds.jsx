import { useEffect, useState } from "react";

export default function PatientMeds() {
  const [prescription, setPrescription] = useState([]);
  const [taken, setTaken] = useState({});

  useEffect(() => {
    // Dummy doctor-entered prescription
    setPrescription([
      {
        name: "Salbutamol",
        type: "Tablet",
        dosage: "1 tablet",
        timing: ["Morning", "Night"],
        duration: "5 days",
        instructions: "After food"
      },
      {
        name: "Cough Syrup",
        type: "Syrup",
        dosage: "10 ml",
        timing: ["Morning", "Afternoon", "Night"],
        duration: "7 days",
        instructions: "Shake well before use"
      }
    ]);
  }, []);

  const toggleTaken = (med, time) => {
    const key = `${med}-${time}`;
    setTaken((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="min-h-full bg-[#F8FAFC] p-6 space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-semibold text-slate-900">
          Your Medications
        </h1>
        <p className="text-base text-slate-500 mt-1">
          Prescribed by your doctor
        </p>
      </div>

      {/* EMPTY STATE */}
      {prescription.length === 0 && (
        <div className="bg-white border rounded-2xl p-10 text-center">
          <p className="text-lg text-slate-600">
            No medications prescribed yet
          </p>
        </div>
      )}

      {/* MED LIST */}
      <div className="space-y-8">
        {prescription.map((med, idx) => (
          <MedCard
            key={idx}
            med={med}
            taken={taken}
            toggleTaken={toggleTaken}
          />
        ))}
      </div>
    </div>
  );
}

/* ===== COMPONENTS ===== */

function MedCard({ med, taken, toggleTaken }) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border space-y-5">

      {/* TITLE */}
      <div className="flex items-center gap-3">
        <span className="text-3xl">
          {med.type === "Tablet" ? "💊" : "🧴"}
        </span>
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            {med.name}
          </h2>
          <p className="text-sm text-slate-500">
            {med.type} · {med.duration}
          </p>
        </div>
      </div>

      {/* DOSAGE */}
      <InfoRow label="Dosage" value={med.dosage} />
      <InfoRow label="Instructions" value={med.instructions} />

      {/* TIMINGS */}
      <div>
        <p className="text-sm font-medium text-slate-600 mb-2">
          When to take
        </p>

        <div className="grid grid-cols-2 gap-3">
          {med.timing.map((time, idx) => {
            const key = `${med.name}-${time}`;
            const done = taken[key];

            return (
              <button
                key={idx}
                onClick={() => toggleTaken(med.name, time)}
                className={`flex items-center justify-between
                            rounded-xl px-4 py-3 border
                  ${
                    done
                      ? "bg-emerald-50 border-emerald-400"
                      : "bg-slate-50 border-slate-300"
                  }`}
              >
                <span className="text-base">
                  {timeIcon(time)} {time}
                </span>
                <span className="text-sm">
                  {done ? "Taken ✓" : "Mark as taken"}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between text-base">
      <span className="text-slate-500">{label}</span>
      <span className="font-medium text-slate-900">{value}</span>
    </div>
  );
}

function timeIcon(time) {
  switch (time) {
    case "Morning":
      return "🌅";
    case "Afternoon":
      return "☀️";
    case "Evening":
      return "🌇";
    case "Night":
      return "🌙";
    default:
      return "⏰";
  }
}
