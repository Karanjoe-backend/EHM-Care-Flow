export default function NurseRead({ nurse, onBack }) {
  return (
    <div>
      <button onClick={onBack} className="text-blue-600 mb-4">← Back</button>

      <h2 className="text-xl font-bold mb-3">Nurse Profile</h2>

      <div className="bg-white p-4 rounded shadow space-y-2">
        <p><b>Name:</b> {nurse.name}</p>
        <p><b>Gender:</b> {nurse.gender}</p>
        <p><b>Qualification:</b> {nurse.qualification}</p>
        <p><b>Department:</b> {nurse.department}</p>
        <p><b>Ward:</b> {nurse.ward}</p>
        <p><b>Experience:</b> {nurse.experience} years</p>
        <p><b>Contact:</b> {nurse.contact}</p>

        <hr />

        <p><b>Status:</b> {nurse.status}</p>
        <p><b>Shift:</b> {nurse.shift}</p>
        <p><b>Assigned Patients:</b> {nurse.patientsAssigned}</p>

        <p className="text-sm text-gray-500">
          Last updated: {nurse.lastUpdated}
        </p>
      </div>
    </div>
  );
}
