import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

/* ---------- Dummy Prescription ---------- */
const initialPrescription = `
• Oxygen therapy – 4 L/min
• Salbutamol nebulization – 6 hourly
• Paracetamol 650 mg – SOS
`;

export default function PatientPrescription() {
  const { patientId } = useParams();
  const navigate = useNavigate();

  const [prescription, setPrescription] = useState(initialPrescription);
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(prescription);



 

  return (
    <div className="bg-gray-50 min-h-screen p-6 space-y-6">

      {/* Header with Back Arrow */}
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
            Prescription
          </h1>
          <p className="text-sm text-gray-500">
            Patient ID: {patientId}
          </p>
        </div>
      </div>

      {/* Prescription View */}
      <section className="bg-white border border-gray-200 rounded-lg p-4">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-sm font-medium text-gray-700">
            Current Prescription
          </h2>

          <button
            onClick={() => {
              setDraft(prescription);
              setIsEditing(true);
            }}
            className="text-sm text-indigo-600 hover:underline"
          >
            Edit
          </button>
        </div>

        <pre className="text-sm text-gray-700 whitespace-pre-wrap">
          {prescription}
        </pre>
      </section>

      {/* EDIT MODAL */}
      {isEditing && (
        <div className="fixed inset-0 bg-black/30
                        flex items-center justify-center z-50">

          <div className="bg-white w-full max-w-2xl
                          rounded-lg border border-gray-200 p-6">

            <h3 className="text-sm font-medium text-gray-700 mb-3">
              Edit Prescription
            </h3>

            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              className="w-full min-h-[220px]
                         border border-gray-300 rounded
                         p-3 text-sm text-gray-700
                         focus:outline-none
                         focus:ring-1 focus:ring-indigo-500"
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
                  setPrescription(draft);
                  setIsEditing(false);
                }}
                className="px-4 py-2 bg-indigo-600
                           text-white rounded text-sm
                           hover:bg-indigo-700"
              >
                Save Prescription
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
