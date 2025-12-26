import { useState, useEffect } from "react";

export default function PatientProfile() {
  const [profile, setProfile] = useState(null);
  const [draft, setDraft] = useState(null);
  const [openEdit, setOpenEdit] = useState(false);

  useEffect(() => {
    // Dummy patient data
    const data = {
      id: "P10234",
      name: "Alex Johnson",
      gender: "Male",
      dob: "1998-05-12",
      mobile: "9876543210",
      address: "Chennai, Tamil Nadu",
      emergencyName: "Sarah Johnson",
      emergencyMobile: "9123456789",
      doctor: "Dr. Priya",
      nurse: "Nurse Anitha"
    };

    setProfile(data);
    setDraft(data);
  }, []);

  if (!profile) return null;

  const saveChanges = () => {
    setProfile(draft);
    setOpenEdit(false);
  };

  return (
    <div className="min-h-full bg-[#F8FAFC] p-6 space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-semibold text-slate-900">
          My Profile
        </h1>
        <p className="text-base text-slate-500 mt-1">
          Personal and emergency information
        </p>
      </div>

      {/* PROFILE CARD */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border
                      flex items-center gap-5">
        <div className="w-16 h-16 rounded-full bg-blue-100
                        flex items-center justify-center text-3xl">
          👤
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            {profile.name}
          </h2>
          <p className="text-sm text-slate-500">
            Patient ID · {profile.id}
          </p>
        </div>
      </div>

      {/* PERSONAL INFO */}
      <Section title="Personal Information">
        <InfoRow label="Gender" value={profile.gender} />
        <InfoRow label="Date of Birth" value={profile.dob} />
        <InfoRow label="Mobile Number" value={profile.mobile} />
      </Section>

      {/* ADDRESS */}
      <Section title="Address">
        <InfoRow label="Residential Address" value={profile.address} />
      </Section>

      {/* EMERGENCY */}
      <Section title="Emergency Contact">
        <InfoRow label="Name" value={profile.emergencyName} />
        <InfoRow label="Contact Number" value={profile.emergencyMobile} />
      </Section>

      {/* CARE TEAM */}
      <Section title="Care Team">
        <InfoRow label="Doctor" value={profile.doctor} />
        <InfoRow label="Nurse" value={profile.nurse} />
      </Section>

      {/* EDIT BUTTON */}
      <div className="flex justify-end pt-4 border-t">
        <button
          onClick={() => setOpenEdit(true)}
          className="px-6 py-2 bg-blue-600
                     text-white rounded-md"
        >
          Edit
        </button>
      </div>

      {/* PRIVACY NOTE */}
      <div className="bg-blue-50 border border-blue-200
                      rounded-xl p-4 text-sm text-blue-700">
        Only address and emergency contact details can be updated.
      </div>

      {/* EDIT MODAL */}
      {openEdit && (
        <EditModal
          draft={draft}
          setDraft={setDraft}
          onCancel={() => {
            setDraft(profile);
            setOpenEdit(false);
          }}
          onSave={saveChanges}
        />
      )}
    </div>
  );
}

/* ================= MODAL ================= */

function EditModal({ draft, setDraft, onCancel, onSave }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/40
                    flex items-center justify-center px-4">

      <div className="bg-white rounded-3xl p-6
                      w-full max-w-lg
                      space-y-6 shadow-xl">

        <h2 className="text-2xl font-semibold text-slate-900">
          Update Details
        </h2>

        {/* ADDRESS */}
        <div>
          <label className="text-sm text-slate-500">
            Address
          </label>
          <textarea
            value={draft.address}
            onChange={(e) =>
              setDraft({ ...draft, address: e.target.value })
            }
            className="mt-1 w-full border rounded-xl
                       p-3 text-base resize-none"
            rows={3}
          />
        </div>

        {/* EMERGENCY */}
        <div className="space-y-3">
          <div>
            <label className="text-sm text-slate-500">
              Emergency Contact Name
            </label>
            <input
              value={draft.emergencyName}
              onChange={(e) =>
                setDraft({ ...draft, emergencyName: e.target.value })
              }
              className="mt-1 w-full border rounded-xl
                         px-3 py-2 text-base"
            />
          </div>

          <div>
            <label className="text-sm text-slate-500">
              Emergency Contact Number
            </label>
            <input
              value={draft.emergencyMobile}
              onChange={(e) =>
                setDraft({ ...draft, emergencyMobile: e.target.value })
              }
              className="mt-1 w-full border rounded-xl
                         px-3 py-2 text-base"
            />
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex justify-end gap-4 pt-4 border-t">
          <button
            onClick={onCancel}
            className="px-5 py-2 border rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            className="px-5 py-2 bg-blue-600
                       text-white rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

/* ================= UI HELPERS ================= */

function Section({ title, children }) {
  return (
    <div className="bg-white rounded-2xl p-6
                    border shadow-sm space-y-3">
      <h3 className="text-lg font-semibold text-slate-900">
        {title}
      </h3>
      {children}
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between text-base">
      <span className="text-slate-500">{label}</span>
      <span className="font-medium text-slate-900">
        {value}
      </span>
    </div>
  );
}
