export default function PatientRead({ patient, onBack }) {
  return (
    <div>
      <button onClick={onBack} className="text-blue-600 mb-4">← Back</button>

      <h2 className="text-xl font-bold mb-3">Patient Details</h2>

      <div className="bg-white p-4 rounded shadow space-y-2">
        <p><b>Name:</b> {patient.name}</p>
        <p><b>Age / Gender:</b> {patient.age} / {patient.gender}</p>
        <p><b>Affected By:</b> {patient.affectedBy}</p>

        <hr />

        <p><b>Admission Date:</b> {patient.admission.date}</p>
        <p><b>Ward:</b> {patient.admission.ward}</p>
        <p><b>Reason:</b> {patient.admission.reason}</p>
      </div>
    </div>
  );
}
