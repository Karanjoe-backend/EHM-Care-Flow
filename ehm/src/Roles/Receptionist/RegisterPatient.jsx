import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPatient() {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const newPatient = {
      id: "P" + Date.now(),
      name: form.get("name"),
      gender: form.get("gender"),
      dob: form.get("dob"),
      mobile: form.get("mobile"),
      address: form.get("address"),
      emergencyContactName: form.get("emergencyName"),
      emergencyContactNumber: form.get("emergencyMobile"),
      visit: form.get("visit"),
      department: form.get("department"),
      assignedDoctor: form.get("doctor"),
      assignedNurse: form.get("nurse"),
      registeredAt: new Date().toLocaleTimeString()
    };

    const existing =
      JSON.parse(localStorage.getItem("patients")) || [];

    localStorage.setItem(
      "patients",
      JSON.stringify([...existing, newPatient])
    );

    setSuccess(true);

    setTimeout(() => {
      navigate("/receptionist/patients");
    }, 1200);
  };

  return (
    <div className="bg-[#f9fafb] min-h-screen p-6">

      {/* SUCCESS LINE */}
      {success && (
        <div className="fixed top-0 left-0 h-1 bg-emerald-500
                        animate-slide w-full z-50" />
      )}

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">
          Register Patient
        </h1>
        <p className="text-sm text-gray-500">
          Front desk patient onboarding
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white border border-gray-200
                   rounded-xl p-6 space-y-8 max-w-5xl"
      >
        {/* BASIC INFO */}
        <Section title="Basic Information">
          <Grid>
            <Input name="name" label="Full Name" />
            <Select name="gender" label="Gender" options={["Male","Female","Other"]} />
            <Input name="dob" type="date" label="Date of Birth" />
            <Input name="mobile" label="Mobile Number" />
          </Grid>
        </Section>

        {/* ADDRESS */}
        <Section title="Address">
          <Input
            name="address"
            label="Residential Address"
            placeholder="Area / City"
          />
        </Section>

        {/* EMERGENCY CONTACT */}
        <Section title="Emergency Contact">
          <Grid>
            <Input
              name="emergencyName"
              label="Emergency Contact Name"
            />
            <Input
              name="emergencyMobile"
              label="Emergency Contact Number"
            />
          </Grid>
        </Section>

        {/* VISIT & ASSIGNMENT */}
        <Section title="Visit & Assignment">
          <Grid>
            <Select
              name="visit"
              label="Visit Type"
              options={["OPD", "Emergency", "Follow-up"]}
            />

            <Select
              name="department"
              label="Department"
              options={[
                "General Medicine",
                "Orthopedics",
                "Pulmonology",
                "Cardiology"
              ]}
            />

            <Select
              name="doctor"
              label="Assigned Doctor"
              options={[
                "Auto Assign",
                "Dr. Suresh",
                "Dr. Priya",
                "Dr. Anand"
              ]}
            />

            <Select
              name="nurse"
              label="Assigned Nurse"
              options={[
                "Auto Assign",
                "Nurse Mary",
                "Nurse Anitha",
                "Nurse John"
              ]}
            />
          </Grid>
        </Section>

        {/* ACTIONS */}
        <div className="flex justify-end gap-4 pt-4 border-t">
          <button
            type="reset"
            className="px-5 py-2 border border-gray-300
                       rounded-md text-sm text-gray-700
                       hover:bg-gray-100"
          >
            Clear
          </button>

          <button
            type="submit"
            className="px-6 py-2 bg-emerald-600
                       text-white rounded-md text-sm"
          >
            Register Patient
          </button>
        </div>
      </form>
    </div>
  );
}

/* ===== UI HELPERS ===== */

function Section({ title, children }) {
  return (
    <div>
      <h2 className="text-sm font-medium text-gray-700 mb-4">
        {title}
      </h2>
      {children}
    </div>
  );
}

function Grid({ children }) {
  return (
    <div className="grid grid-cols-2 gap-6">
      {children}
    </div>
  );
}

function Input({ label, name, type = "text", placeholder }) {
  return (
    <div>
      <label className="block text-xs text-gray-500 mb-1">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required
        className="w-full border border-gray-300 rounded-md
                   px-3 py-2 text-sm
                   focus:ring-1 focus:ring-emerald-500"
      />
    </div>
  );
}

function Select({ label, name, options }) {
  return (
    <div>
      <label className="block text-xs text-gray-500 mb-1">
        {label}
      </label>
      <select
        name={name}
        required
        className="w-full border border-gray-300 rounded-md
                   px-3 py-2 text-sm
                   focus:ring-1 focus:ring-emerald-500"
      >
        <option value="">Select</option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
