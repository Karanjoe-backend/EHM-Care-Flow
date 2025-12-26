import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ReceptionistPatientDetails() {
  const { patientId } = useParams();
  const navigate = useNavigate();

  const [patient, setPatient] = useState(null);
  const [draft, setDraft] = useState(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const patients =
      JSON.parse(localStorage.getItem("patients")) || [];
    const found = patients.find(p => p.id === patientId);
    setPatient(found);
    setDraft(found);
  }, [patientId]);

  if (!patient) return <div className="p-6">Patient not found</div>;

  const saveChanges = () => {
    const patients =
      JSON.parse(localStorage.getItem("patients")) || [];

    const updated = patients.map(p =>
      p.id === patientId ? draft : p
    );

    localStorage.setItem("patients", JSON.stringify(updated));
    setPatient(draft);
    setEditing(false);
  };

  return (
    <div className="bg-[#f9fafb] min-h-screen p-6 space-y-6">

      {/* HEADER */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="w-9 h-9 rounded-full border hover:bg-gray-100"
        >
          ←
        </button>
        <div>
          <h1 className="text-xl font-semibold">Patient Details</h1>
          <p className="text-sm text-gray-500">Receptionist view</p>
        </div>
      </div>

      {/* BASIC INFO (READ ONLY) */}
      <Card title="Basic Information">
        <Grid>
          <Read label="Patient ID" value={patient.id} />
          <Read label="Name" value={patient.name} />
          <Read label="Gender" value={patient.gender} />
          <Read label="Date of Birth" value={patient.dob} />
        </Grid>
      </Card>

      {/* CONTACT */}
      <Card title="Contact Information" editing={editing}>
        <Grid>
          <Field
            label="Mobile Number"
            value={draft.mobile}
            edit={editing}
            onChange={v => setDraft({ ...draft, mobile: v })}
          />
          <Field
            label="Address"
            value={draft.address}
            edit={editing}
            onChange={v => setDraft({ ...draft, address: v })}
          />
        </Grid>
      </Card>

      {/* EMERGENCY */}
      <Card title="Emergency Contact" editing={editing}>
        <Grid>
          <Field
            label="Contact Name"
            value={draft.emergencyContactName}
            edit={editing}
            onChange={v =>
              setDraft({ ...draft, emergencyContactName: v })
            }
          />
          <Field
            label="Contact Number"
            value={draft.emergencyContactNumber}
            edit={editing}
            onChange={v =>
              setDraft({ ...draft, emergencyContactNumber: v })
            }
          />
        </Grid>
      </Card>

      {/* VISIT & ASSIGNMENT */}
      <Card title="Visit & Assignment" editing={editing}>
        <Grid>
          <SelectField
            label="Visit Type"
            value={draft.visit}
            edit={editing}
            options={["OPD", "Emergency", "Follow-up"]}
            onChange={v => setDraft({ ...draft, visit: v })}
          />

          <SelectField
            label="Department"
            value={draft.department}
            edit={editing}
            options={[
              "General Medicine",
              "Orthopedics",
              "Pulmonology",
              "Cardiology"
            ]}
            onChange={v => setDraft({ ...draft, department: v })}
          />

          <SelectField
            label="Assigned Doctor"
            value={draft.assignedDoctor}
            edit={editing}
            options={[
              "Auto Assign",
              "Dr. Suresh",
              "Dr. Priya",
              "Dr. Anand"
            ]}
            onChange={v =>
              setDraft({ ...draft, assignedDoctor: v })
            }
          />

          <SelectField
            label="Assigned Nurse"
            value={draft.assignedNurse}
            edit={editing}
            options={[
              "Auto Assign",
              "Nurse Mary",
              "Nurse Anitha",
              "Nurse John"
            ]}
            onChange={v =>
              setDraft({ ...draft, assignedNurse: v })
            }
          />
        </Grid>
      </Card>

      {/* ACTIONS */}
      <div className="flex justify-end gap-4 pt-4 border-t">
        {!editing ? (
          <button
            onClick={() => setEditing(true)}
            className="px-6 py-2 bg-emerald-600 text-white rounded-md"
          >
            Edit
          </button>
        ) : (
          <>
            <button
              onClick={() => {
                setDraft(patient);
                setEditing(false);
              }}
              className="px-6 py-2 border rounded-md"
            >
              Cancel
            </button>
            <button
              onClick={saveChanges}
              className="px-6 py-2 bg-emerald-600 text-white rounded-md"
            >
              Save Changes
            </button>
          </>
        )}
      </div>
    </div>
  );
}

/* ================= UI HELPERS ================= */

function Card({ title, children, editing }) {
  return (
    <div
      className={`border rounded-xl p-6
        ${editing ? "bg-emerald-50 border-emerald-300"
                  : "bg-white border-gray-200"}`}
    >
      <h2 className="text-sm font-medium text-gray-700 mb-4">
        {title}
        {editing && (
          <span className="ml-2 text-xs text-emerald-600">(Editing)</span>
        )}
      </h2>
      {children}
    </div>
  );
}

function Grid({ children }) {
  return <div className="grid grid-cols-2 gap-6">{children}</div>;
}

function Read({ label, value }) {
  return (
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-sm font-medium">{value || "—"}</p>
    </div>
  );
}

function Field({ label, value, edit, onChange }) {
  return (
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      {edit ? (
        <input
          value={value || ""}
          onChange={e => onChange(e.target.value)}
          className="w-full border rounded-md px-3 py-2 text-sm"
        />
      ) : (
        <p className="text-sm font-medium">{value || "—"}</p>
      )}
    </div>
  );
}

function SelectField({ label, value, edit, options, onChange }) {
  return (
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      {edit ? (
        <select
          value={value || ""}
          onChange={e => onChange(e.target.value)}
          className="w-full border rounded-md px-3 py-2 text-sm"
        >
          {options.map(opt => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      ) : (
        <p className="text-sm font-medium">{value || "—"}</p>
      )}
    </div>
  );
}
