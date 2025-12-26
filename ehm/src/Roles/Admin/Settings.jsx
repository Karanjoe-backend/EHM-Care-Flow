
import { useState } from "react";




export default function AdminProfile() {
  const [editMode, setEditMode] = useState(false);


  const [profile, setProfile] = useState({
    name: "Admin User",
    adminId: "ADM001",
    role: "System Administrator",
    hospital: "CareFlow Hospital",
    email: "admin@careflow.com",

    phone: "9876543210",
    alternatePhone: "",
    address: "Chennai, Tamil Nadu",
    emergencyContact: "9123456789",
    image: "/admin-avatar.png" // dummy image
  });

  const handleChange = (e) =>
    setProfile({ ...profile, [e.target.name]: e.target.value });


  return (
    <div className="bg-white px-12 py-10 space-y-12">

      {/* ================= HEADER ================= */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">
            Admin Profile
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Hospital administrator details
          </p>
        </div>

        <button
          className="mt-1 px-4 py-2 text-sm rounded-md
                     border border-slate-300
                     text-slate-800
                     hover:bg-slate-100"
        >
          Edit Profile
        </button>
      </div>

      {/* ================= PROFILE DETAILS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <ProfileItem label="Name" value="Admin User" />
        <ProfileItem label="Email" value="admin@hospital.com" />
        <ProfileItem label="Role" value="System Administrator" />
        <ProfileItem label="Hospital" value="CareFlow Hospital" />
        <ProfileItem label="Location" value="Tamil Nadu, India" />
        <ProfileItem label="Contact" value="+91 98765 43210" />

      </div>

      {/* ================= DIVIDER ================= */}
      <div className="border-t border-slate-200" />

      {/* ================= QUICK ACTIONS ================= */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-slate-900">
          Quick Actions
        </h3>

        <div className="flex items-start gap-8">

          <ActionCard
            title="Add Doctor"
            desc="Register medical staff"
            to="/admin/settings/add-doctor"
          />

          <ActionCard
            title="Add Nurse"
            desc="Register nursing staff"
            to="/admin/settings/add-nurse"
          />

        </div>
      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function ProfileItem({ label, value }) {
  return (
    <div
      className="border border-slate-200 rounded-lg
                 px-6 py-5 bg-white"
    >
      <p className="text-xs text-slate-500">
        {label}
      </p>
      <p className="text-sm font-medium text-slate-900 mt-1">
        {value}
      </p>
    </div>
  );
}

function ActionCard({ title, desc, to }) {
  return (
    <a
      href={to}
      className="group border border-slate-200
                 rounded-lg px-6 py-5 w-64
                 bg-white
                 hover:border-slate-400
                 transition"
    >
      <div className="flex items-center gap-3 mb-2">
        <span
          className="flex items-center justify-center
                     h-8 w-8 rounded-full
                     bg-[#1e3a8a]
                     text-white
                     text-lg font-medium"
        >
          +
        </span>
        <h4 className="text-sm font-semibold text-slate-900">
          {title}
        </h4>
      </div>

      <p className="text-xs text-slate-600 leading-relaxed">
        {desc}
      </p>
    </a>
  );
}
