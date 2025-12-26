
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StaffForgotPassword() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const sendCode = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 600);
  };

  const resetPassword = () => {
    alert("Password reset successful (demo)");
    navigate("/staff-login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center
                    bg-gradient-to-br from-slate-100 to-slate-200">

      <div className="bg-white w-[420px] p-8 rounded-2xl shadow-xl">

        <h2 className="text-xl font-semibold text-center mb-2">
          Staff Password Recovery
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Identity verification required
        </p>

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <label className="text-sm text-gray-600 block mb-2">
              Official Email
            </label>
            <input
              className="w-full border p-3 rounded-lg mb-6
                         focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="name@hospital.org"
              onChange={e => setEmail(e.target.value)}
            />

            <button
              disabled={loading}
              onClick={sendCode}
              className={`w-full py-3 rounded-xl text-white font-medium
                ${loading
                  ? "bg-indigo-300"
                  : "bg-indigo-700 hover:bg-indigo-800"}
              `}
            >
              {loading ? "Sending Code..." : "Send Verification Code"}
            </button>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <label className="text-sm text-gray-600 block mb-2">
              Verification Code
            </label>
            <input
              className="w-full border p-3 rounded-lg mb-4
                         focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Enter code"
              onChange={e => setCode(e.target.value)}
            />

            <label className="text-sm text-gray-600 block mb-2">
              New Password
            </label>
            <input
              type="password"
              className="w-full border p-3 rounded-lg mb-6
                         focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <button
              onClick={resetPassword}
              className="w-full py-3 rounded-xl
                         bg-indigo-700 hover:bg-indigo-800
                         text-white font-medium"
            >
              Reset Password
            </button>
          </>
        )}

        <p className="text-xs text-gray-400 text-center mt-6">
          This action will be recorded for audit purposes
        </p>
      </div>
    </div>
  );
}
