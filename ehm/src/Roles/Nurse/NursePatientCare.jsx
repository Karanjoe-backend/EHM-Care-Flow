import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

/* ---------- Dummy Data ---------- */
const initialVitals = {
  spo2: 92,
  bp: "140/90",
  temp: "99.6",
  hr: 98
};

export default function NursePatientCare() {
  const { patientId } = useParams();
  const navigate = useNavigate();

  const [vitals, setVitals] = useState(initialVitals);
  const [notes, setNotes] = useState(
    "Patient on oxygen support. Monitoring vitals closely."
  );

  const [editVitals, setEditVitals] = useState(false);
  const [editNotes, setEditNotes] = useState(false);

  const [draftVitals, setDraftVitals] = useState(vitals);
  const [draftNotes, setDraftNotes] = useState(notes);

  return (
    <div className="bg-[#f8fafc] min-h-screen p-6 space-y-6">

      {/* Header with Back */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="w-9 h-9 flex items-center justify-center
                     rounded-full border border-gray-300
                     hover:bg-gray-100"
        >
          ←
        </button>

        <div>
          <h1 className="text-xl font-semibold text-gray-900">
            Patient Care
          </h1>
          <p className="text-sm text-gray-500">
            Patient ID: {patientId}
          </p>
        </div>
      </div>

      {/* VITALS */}
      <section className="bg-white border border-gray-200 rounded-lg p-4">
        <div className="flex justify-between mb-3">
          <h2 className="text-sm font-medium text-gray-700">
            Current Vitals
          </h2>
          <button
            onClick={() => {
              setDraftVitals(vitals);
              setEditVitals(true);
            }}
            className="text-sm text-sky-600 hover:underline"
          >
            Edit
          </button>
        </div>

        <div className="grid grid-cols-4 gap-4 text-sm">
          <Vital label="SpO₂ (%)" value={vitals.spo2} />
          <Vital label="BP" value={vitals.bp} />
          <Vital label="Temp (°F)" value={vitals.temp} />
          <Vital label="HR (bpm)" value={vitals.hr} />
        </div>
      </section>

      {/* NURSING NOTES */}
      <section className="bg-white border border-gray-200 rounded-lg p-4">
        <div className="flex justify-between mb-3">
          <h2 className="text-sm font-medium text-gray-700">
            Nursing Notes
          </h2>
          <button
            onClick={() => {
              setDraftNotes(notes);
              setEditNotes(true);
            }}
            className="text-sm text-sky-600 hover:underline"
          >
            Edit
          </button>
        </div>

        <p className="text-sm text-gray-700 whitespace-pre-wrap">
          {notes}
        </p>
      </section>

      {/* EDIT MODALS */}
      {(editVitals || editNotes) && (
        <div className="fixed inset-0 bg-black/30
                        flex items-center justify-center z-50">

          <div className="bg-white w-full max-w-xl
                          rounded-lg border border-gray-200 p-6">

            {editVitals && (
              <>
                <h3 className="text-sm font-medium mb-3">
                  Edit Vitals
                </h3>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <input
                    placeholder="SpO₂"
                    value={draftVitals.spo2}
                    onChange={(e) =>
                      setDraftVitals({
                        ...draftVitals,
                        spo2: e.target.value
                      })
                    }
                    className="border p-2 rounded"
                  />
                  <input
                    placeholder="BP"
                    value={draftVitals.bp}
                    onChange={(e) =>
                      setDraftVitals({
                        ...draftVitals,
                        bp: e.target.value
                      })
                    }
                    className="border p-2 rounded"
                  />
                  <input
                    placeholder="Temp"
                    value={draftVitals.temp}
                    onChange={(e) =>
                      setDraftVitals({
                        ...draftVitals,
                        temp: e.target.value
                      })
                    }
                    className="border p-2 rounded"
                  />
                  <input
                    placeholder="HR"
                    value={draftVitals.hr}
                    onChange={(e) =>
                      setDraftVitals({
                        ...draftVitals,
                        hr: e.target.value
                      })
                    }
                    className="border p-2 rounded"
                  />
                </div>
              </>
            )}

            {editNotes && (
              <>
                <h3 className="text-sm font-medium mb-3">
                  Edit Nursing Notes
                </h3>
                <textarea
                  value={draftNotes}
                  onChange={(e) =>
                    setDraftNotes(e.target.value)
                  }
                  className="w-full min-h-[160px]
                             border rounded p-2 text-sm"
                />
              </>
            )}

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => {
                  setEditVitals(false);
                  setEditNotes(false);
                }}
                className="px-4 py-2 border rounded text-sm"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  if (editVitals) setVitals(draftVitals);
                  if (editNotes) setNotes(draftNotes);
                  setEditVitals(false);
                  setEditNotes(false);
                }}
                className="px-4 py-2 bg-sky-600
                           text-white rounded text-sm"
              >
                Save
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

/* ---------- Helpers ---------- */

function Vital({ label, value }) {
  return (
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="font-medium text-gray-900">{value}</p>
    </div>
  );
}
