import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { patientDB } from "../Data/patientDB";

export default function PatientOTP() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const verifyOTP = () => {
    setError("");

    const mobile = localStorage.getItem("otpMobile");

    const patient = patientDB.find(p => p.mobile === mobile);

    if (!patient || otp !== patient.otp) {
      setError("Invalid OTP");
      return;
    }

    // authenticated
    localStorage.setItem("auth", "true");
    localStorage.setItem("role", "PATIENT");
    localStorage.setItem("patientId", patient.patientId);

    navigate("/patient");
  };

  return (
    <div className="min-h-screen flex items-center justify-center
                    bg-gradient-to-br from-purple-50 to-blue-50">

      <div className="bg-white p-8 w-[360px] rounded-2xl shadow">

        <h2 className="text-xl font-semibold text-center mb-4">
          OTP Verification
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-2 mb-3 rounded text-sm">
            {error}
          </div>
        )}

        <input
          placeholder="Enter OTP"
          className="w-full border p-3 rounded-lg mb-6 text-center tracking-widest"
          value={otp}
          onChange={e => setOtp(e.target.value)}
        />

        <button
          onClick={verifyOTP}
          className="w-full py-3 rounded-xl
                     bg-gradient-to-r from-purple-600 to-blue-600
                     text-white font-medium"
        >
          Verify & Continue
        </button>

        <p className="text-xs text-gray-400 text-center mt-4">
          OTP valid for this session only
        </p>
      </div>
    </div>
  );
}
