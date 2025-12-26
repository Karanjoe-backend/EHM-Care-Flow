import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function AdminDoctorOverview() {
  const { doctorId } = useParams();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    const doctors =
      JSON.parse(localStorage.getItem("doctors")) || [];
    const found = doctors.find(d => d.id === doctorId);
    setDoctor(found);
  }, [doctorId]);

  if (!doctor) {
    return (
      <div className="p-6 text-slate-500">
        Doctor not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white px-8 py-6 space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          {doctor.name}
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Doctor Overview
        </p>
      </div>

      {/* BASIC INFO */}
      <InfoSection title="Professional Information">
        <InfoRow label="Department" value={doctor.department} />
        <InfoRow label="Designation" value={doctor.designation} />
        <InfoRow label="Qualification" value={doctor.qualification} />
        <InfoRow label="Experience" value={doctor.experience} />
        <InfoRow label="Shift" value={doctor.shift} />
      </InfoSection>

      {/* HOSPITAL INFO */}
      <InfoSection title="Hospital Information">
        <InfoRow label="Doctor ID" value={doctor.id} />
        <InfoRow label="Joined On" value={doctor.joinedOn} />
        <InfoRow label="Assigned Patients" value={doctor.assignedPatients} />
        <InfoRow label="Status" value={doctor.status} />
      </InfoSection>

      {/* CONTACT INFO */}
      <InfoSection title="Contact Information">
        <InfoRow label="Email" value={doctor.email} />
        <InfoRow label="Phone" value={doctor.phone} />
      </InfoSection>
    </div>
  );
}

/* ===== REUSABLE COMPONENTS ===== */

function InfoSection({ title, children }) {
  return (
    <div className="border border-slate-200 rounded-lg p-6">
      <h2 className="text-lg font-semibold text-slate-900 mb-4">
        {title}
      </h2>
      <div className="space-y-3">
        {children}
      </div>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-slate-500">{label}</span>
      <span className="text-slate-900 font-medium">
        {value || "—"}
      </span>
    </div>
  );
}
