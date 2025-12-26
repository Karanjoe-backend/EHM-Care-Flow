import { useState } from "react";
import { useNavigate } from "react-router-dom";



import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { useParams } from "react-router-dom";

/* ---------- Dummy Data ---------- */

const patient = {
  id: "P20488",
  name: "Meena Devi",
  age: 48,
  gender: "Female",
  diagnosis: "Respiratory distress",
  doctor: "Dr. Suresh Kumar"
};

const spo2Data = [
  { time: "08:00", value: 96 },
  { time: "10:00", value: 94 },
  { time: "12:00", value: 92 },
  { time: "14:00", value: 89 }
];

const bpData = [
  { time: "08:00", value: 135 },
  { time: "10:00", value: 142 },
  { time: "12:00", value: 150 },
  { time: "14:00", value: 148 }
];

const tempData = [
  { time: "08:00", value: 98.4 },
  { time: "10:00", value: 99.1 },
  { time: "12:00", value: 99.6 },
  { time: "14:00", value: 99.8 }
];

const hrData = [
  { time: "08:00", value: 78 },
  { time: "10:00", value: 85 },
  { time: "12:00", value: 92 },
  { time: "14:00", value: 102 }
];

const symptomDiary = [
  {
    date: "2025-02-10",
    entry: "Shortness of breath while resting. Mild chest tightness."
  },
  {
    date: "2025-02-11",
    entry: "Breathing slightly improved with oxygen support."
  }
];




/* ---------- Component ---------- */

export default function PatientOverview() {
  const { patientId } = useParams();
  const [notes, setNotes] = useState(`
Patient admitted with respiratory distress.
SpO₂ levels trending downward since morning.
Oxygen therapy escalated.
Continuous monitoring advised.
`);


  const [isEditing, setIsEditing] = useState(false);
  const [draftNotes, setDraftNotes] = useState(notes);
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen p-6 space-y-8">

      {/* Header */}
      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="w-9 h-9 flex items-center justify-center
               rounded-full border border-gray-300
               hover:bg-gray-100"
          aria-label="Go back"
        >
          ←
        </button>

        <div>
          <h1 className="text-xl font-semibold text-gray-900">
            Patient Overview
          </h1>
          <p className="text-sm text-gray-500">
            Read-only clinical summary
          </p>
        </div>
      </div>

      {/* Patient Info */}
      <section className="bg-white border border-gray-200 rounded-lg p-4">
        <h2 className="text-sm font-medium text-gray-700 mb-3">
          Patient Information
        </h2>

        <div className="grid grid-cols-4 gap-4 text-sm">
          <Info label="Name" value={patient.name} />
          <Info label="Age / Gender" value={`${patient.age}, ${patient.gender}`} />
          <Info label="Diagnosis" value={patient.diagnosis} />
          <Info label="Assigned Doctor" value={patient.doctor} />
        </div>
      </section>

      {/* VITALS */}
      <section className="space-y-6">
        <h2 className="text-sm font-medium text-gray-700">
          Vitals Trend
        </h2>

        <div className="grid grid-cols-2 gap-6">
          <VitalChart title="SpO₂ (%)" data={spo2Data} color="#dc2626" />
          <VitalChart title="Blood Pressure (mmHg)" data={bpData} color="#2563eb" />
          <VitalChart title="Temperature (°F)" data={tempData} color="#ea580c" />
          <VitalChart title="Heart Rate (bpm)" data={hrData} color="#16a34a" />
        </div>
      </section>

      {/* Symptom Diary */}
      <section className="bg-white border border-gray-200 rounded-lg p-4">
        <h2 className="text-sm font-medium text-gray-700 mb-3">
          Symptom Diary
        </h2>

        <div className="space-y-4">
          {symptomDiary.map((d, i) => (
            <div key={i} className="border-l-2 border-gray-200 pl-4">
              <p className="text-xs text-gray-500">
                {d.date}
              </p>
              <p className="text-sm text-gray-700 mt-1">
                {d.entry}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Clinical Notes */}
      {/* Clinical Notes */}
      <section className="bg-white border border-gray-200 rounded-lg p-4 relative">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-sm font-medium text-gray-700">
            Clinical Notes
          </h2>

          <button
            onClick={() => {
              setDraftNotes(notes);
              setIsEditing(true);
            }}
            className="text-sm text-indigo-600 hover:underline"
          >
            Edit
          </button>
        </div>

        <pre className="text-sm text-gray-700 whitespace-pre-wrap">
          {notes}
        </pre>
      </section>

      {/* EDIT MODAL */}
      {isEditing && (
        <div className="fixed inset-0 bg-black/30
                  flex items-center justify-center z-50">

          <div className="bg-white w-full max-w-2xl
                    rounded-lg border border-gray-200 p-6">

            <h3 className="text-sm font-medium text-gray-700 mb-3">
              Edit Clinical Notes
            </h3>

            <textarea
              value={draftNotes}
              onChange={(e) => setDraftNotes(e.target.value)}
              className="w-full min-h-[240px]
                   border border-gray-300 rounded
                   p-3 text-sm text-gray-700
                   focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 border border-gray-300
                     rounded text-sm text-gray-700
                     hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  setNotes(draftNotes);
                  setIsEditing(false);
                }}
                className="px-4 py-2 bg-indigo-600
                     text-white rounded text-sm
                     hover:bg-indigo-700"
              >
                Save Notes
              </button>
            </div>
          </div>
        </div>
      )}



    </div>




  );
}

/* ---------- Helper Components ---------- */

function Info({ label, value }) {
  return (
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="font-medium text-gray-900">{value}</p>
    </div>
  );
}

function VitalChart({ title, data, color }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <h3 className="text-xs font-medium text-gray-600 mb-2">
        {title}
      </h3>

      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
