import { useState } from "react";

export default function NurseEdit({ nurse, onBack }) {
  const [shift, setShift] = useState(nurse.shift);
  const [status, setStatus] = useState(nurse.status);
  const [ward, setWard] = useState(nurse.ward);

  const save = () => {
    alert("Nurse details updated (demo)");
    onBack();
  };

  return (
    <div>
      <button onClick={onBack} className="text-blue-600 mb-4">← Back</button>

      <h2 className="text-xl font-bold mb-3">Edit Nurse</h2>

      <div className="bg-white p-4 rounded shadow space-y-4">
        <div>
          <label>Ward</label>
          <input
            className="w-full border p-2"
            value={ward}
            onChange={e => setWard(e.target.value)}
          />
        </div>

        <div>
          <label>Shift</label>
          <select
            className="w-full border p-2"
            value={shift}
            onChange={e => setShift(e.target.value)}
          >
            <option>Morning</option>
            <option>Evening</option>
            <option>Night</option>
          </select>
        </div>

        <div>
          <label>Status</label>
          <select
            className="w-full border p-2"
            value={status}
            onChange={e => setStatus(e.target.value)}
          >
            <option>On Duty</option>
            <option>Off Duty</option>
            <option>On Leave</option>
          </select>
        </div>

        <button
          onClick={save}
          className="bg-black text-white px-4 py-2"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
