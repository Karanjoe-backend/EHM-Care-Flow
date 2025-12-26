import { useEffect, useState } from "react";

export default function PatientDiary() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    // Dummy doctor-entered diary (demo)
    setEntries([
      {
        date: "2025-01-20",
        doctor: "Dr. Priya",
        symptoms: [
          "Shortness of breath",
          "Chest tightness"
        ],
        precautions: [
          "Avoid cold exposure",
          "Use inhaler as prescribed"
        ],
        notes: "Patient advised adequate rest and hydration."
      },
      {
        date: "2025-01-18",
        doctor: "Dr. Anand",
        symptoms: [
          "Dry cough",
          "Mild fatigue"
        ],
        precautions: [
          "Drink warm fluids",
          "Avoid strenuous activity"
        ],
        notes: "Symptoms improving gradually."
      }
    ]);
  }, []);

  return (
    <div className="min-h-full bg-[#F8FAFC] p-6 space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-semibold text-slate-900">
          Your Health Diary
        </h1>
        <p className="text-base text-slate-500 mt-1">
          Doctor-recorded symptoms and care instructions
        </p>
      </div>

      {/* EMPTY STATE */}
      {entries.length === 0 && (
        <div className="bg-white border rounded-2xl p-10 text-center">
          <p className="text-lg text-slate-600">
            No diary entries available yet
          </p>
        </div>
      )}

      {/* ENTRIES */}
      <div className="space-y-8">
        {entries.map((entry, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-6 shadow-sm
                       border space-y-6"
          >
            {/* DATE & DOCTOR */}
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg font-semibold text-slate-900">
                  📅 {new Date(entry.date).toDateString()}
                </p>
                <p className="text-sm text-slate-500 mt-1">
                  Recorded by {entry.doctor}
                </p>
              </div>
            </div>

            {/* SYMPTOMS */}
            <VisualBlock
              title="Symptoms observed"
              icon="🩺"
              color="blue"
            >
              {entry.symptoms.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </VisualBlock>

            {/* PRECAUTIONS */}
            <VisualBlock
              title="Precautions to follow"
              icon="🛡️"
              color="green"
            >
              {entry.precautions.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </VisualBlock>

            {/* NOTES */}
            <VisualBlock
              title="Doctor’s Notes"
              icon="📝"
              color="neutral"
            >
              <p>{entry.notes}</p>
            </VisualBlock>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ===== VISUAL BLOCK COMPONENT ===== */

function VisualBlock({ title, icon, color, children }) {
  const styles = {
    blue: "bg-blue-50 text-blue-800",
    green: "bg-emerald-50 text-emerald-800",
    neutral: "bg-slate-50 text-slate-700"
  };

  return (
    <div className={`rounded-2xl p-5 ${styles[color]}`}>
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-lg font-semibold">
          {title}
        </h3>
      </div>

      <div className="text-base space-y-2">
        <ul className="list-disc pl-6 space-y-2">
          {children}
        </ul>
      </div>
    </div>
  );
}
