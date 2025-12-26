import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { patientDB } from "../Data/patientDB";

export default function PatientLogin() {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState(""); // Patient ID or Mobile
  const [dob, setDob] = useState("");
  const [error, setError] = useState("");

  const sendOTP = () => {
    setError("");

    const patient = patientDB.find(
      p => (p.patientId === identifier || p.mobile === identifier) && p.dob === dob
    );

    if (!patient) {
      setError("Patient not registered");
      return;
    }

    // Store temp auth context
    localStorage.setItem("otpMobile", patient.mobile);
    localStorage.setItem("patientId", patient.patientId);

    // DEMO: show OTP in console
    console.log("OTP sent:", patient.otp);

    navigate("/patient-otp");
  };

  return (
    <div className="min-h-screen flex items-center justify-center
                    bg-gradient-to-br from-purple-50 to-blue-50">

      <div className="bg-white p-8 w-[380px] rounded-2xl shadow">

        <h2 className="text-2xl font-semibold text-center mb-1">
          Access Your Health
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Verify using your registered Patient ID or Mobile Number
        </p>

        {error && (
          <div className="bg-red-100 text-red-700 p-2 mb-3 rounded text-sm">
            {error}
          </div>
        )}

        <input
          placeholder="Patient ID or Registered Mobile Number"
          className="w-full border p-3 rounded-lg mb-4"
          value={identifier}
          onChange={e => setIdentifier(e.target.value)}
        />

        <input
          type="date"
          className="w-full border p-3 rounded-lg mb-6"
          value={dob}
          onChange={e => setDob(e.target.value)}
        />

        <button
          onClick={sendOTP}
          className="w-full py-3 rounded-xl
                     bg-gradient-to-r from-purple-600 to-blue-600
                     text-white font-medium"
        >
          Send OTP
        </button>

        <p className="text-xs text-gray-400 text-center mt-4">
          OTP will be sent to your registered mobile number
        </p>
      </div>
    </div>
  );
}