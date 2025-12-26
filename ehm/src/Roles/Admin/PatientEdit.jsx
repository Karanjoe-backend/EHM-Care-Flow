import { useState } from "react";

export default function PatientEdit({ patient, onBack }) {
  const [vitals, setVitals] = useState(patient.vitals);

  const saveChanges = () => {
    alert("Vitals updated (demo)");
    onBack();
  };

  return (
    <div>
      <button onClick={onBack} className="text-blue-600 mb-4">← Back</button>

      <h2 className="text-xl font-bold mb-3">Edit Vitals</h2>

      <div className="bg-white p-4 rounded shadow grid grid-cols-2 gap-4">
        <input
          placeholder="BP"
          defaultValue={vitals.bp}
          className="border p-2"
        />
        <input
          placeholder="SpO₂"
          defaultValue={vitals.spo2}
          className="border p-2"
        />
        <input
          placeholder="Heart Rate"
          defaultValue={vitals.hr}
          className="border p-2"
        />
        <input
          placeholder="Temperature"
          defaultValue={vitals.temp}
          className="border p-2"
        />
      </div>

      <button
        onClick={saveChanges}
        className="mt-4 bg-black text-white px-4 py-2"
      >
        Save
      </button>
    </div>
  );
}
