import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddNurse() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    gender: "",
    dob: "",
    phone: "",
    email: "",
    address: "",

    department: "",
    qualification: "",
    experience: "",
    shift: "",
    joinedOn: "",
    status: "Active"
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const saveNurse = () => {
    const nurses =
      JSON.parse(localStorage.getItem("nurses")) || [];

    nurses.push({
      id: `N${Date.now().toString().slice(-5)}`,
      ...form,
      resignedOn: null
    });

    localStorage.setItem("nurses", JSON.stringify(nurses));
    navigate(-1); // back to previous page
  };

  return (
    <div className="bg-white px-12 py-10 space-y-12">

      {/* ================= HEADER ================= */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">
            Add Nurse
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Register nursing staff into hospital system
          </p>
        </div>

        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 text-sm
                     border border-slate-300
                     rounded-md
                     text-slate-800
                     hover:bg-slate-100"
        >
          ← Back
        </button>
      </div>

      {/* ================= PERSONAL INFO ================= */}
      <Section title="Personal Information">
        <Input label="Full Name" name="name" onChange={handleChange} />
        <Select label="Gender" name="gender" onChange={handleChange}>
          <option value="">Select</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </Select>
        <DateInput label="Date of Birth" name="dob" onChange={handleChange} />
        <Input label="Phone Number" name="phone" onChange={handleChange} />
        <Input label="Email Address" name="email" onChange={handleChange} />
        <Textarea label="Address" name="address" onChange={handleChange} />
      </Section>

      {/* ================= PROFESSIONAL INFO ================= */}
      <Section title="Professional Information">
        <Input
          label="Department / Ward"
          name="department"
          onChange={handleChange}
        />
        <Input
          label="Qualification"
          name="qualification"
          onChange={handleChange}
        />
        <Input
          label="Years of Experience"
          name="experience"
          onChange={handleChange}
        />
        <Select label="Shift" name="shift" onChange={handleChange}>
          <option value="">Select shift</option>
          <option>Morning</option>
          <option>Evening</option>
          <option>Night</option>
        </Select>
        <DateInput
          label="Joining Date"
          name="joinedOn"
          onChange={handleChange}
        />
        <Select label="Status" name="status" onChange={handleChange}>
          <option>Active</option>
          <option>Resigned</option>
        </Select>
      </Section>

      {/* ================= ACTION ================= */}
      <div className="border-t border-slate-200 pt-6 flex justify-end">
        <button
          onClick={saveNurse}
          className="px-8 py-2.5 rounded-md
                     bg-[#1e3a8a]
                     text-white text-sm
                     hover:bg-[#162f6a]"
        >
          Save Nurse
        </button>
      </div>
    </div>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function Section({ title, children }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-slate-900 mb-6">
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {children}
      </div>
    </div>
  );
}

function Input({ label, name, onChange }) {
  return (
    <div>
      <label className="text-sm text-slate-600">
        {label}
      </label>
      <input
        name={name}
        onChange={onChange}
        className="mt-1 w-full
                   border border-slate-300
                   rounded-md px-3 py-2
                   text-sm text-slate-800
                   focus:outline-none
                   focus:ring-2 focus:ring-[#1e3a8a]"
      />
    </div>
  );
}

function Textarea({ label, name, onChange }) {
  return (
    <div className="md:col-span-3">
      <label className="text-sm text-slate-600">
        {label}
      </label>
      <textarea
        rows={3}
        name={name}
        onChange={onChange}
        className="mt-1 w-full
                   border border-slate-300
                   rounded-md px-3 py-2
                   text-sm text-slate-800
                   focus:outline-none
                   focus:ring-2 focus:ring-[#1e3a8a]"
      />
    </div>
  );
}

function Select({ label, name, onChange, children }) {
  return (
    <div>
      <label className="text-sm text-slate-600">
        {label}
      </label>
      <select
        name={name}
        onChange={onChange}
        className="mt-1 w-full
                   border border-slate-300
                   rounded-md px-3 py-2
                   text-sm text-slate-800
                   bg-white
                   focus:outline-none
                   focus:ring-2 focus:ring-[#1e3a8a]"
      >
        {children}
      </select>
    </div>
  );
}

function DateInput({ label, name, onChange }) {
  return (
    <div>
      <label className="text-sm text-slate-600">
        {label}
      </label>
      <input
        type="date"
        name={name}
        onChange={onChange}
        className="mt-1 w-full
                   border border-slate-300
                   rounded-md px-3 py-2
                   text-sm text-slate-800
                   bg-white
                   focus:outline-none
                   focus:ring-2 focus:ring-[#1e3a8a]"
      />
    </div>
  );
}
