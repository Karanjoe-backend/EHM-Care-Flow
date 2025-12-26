import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { staffDB } from "../Data/staffDB";

export default function StaffLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setError("");
    setLoading(true);

    setTimeout(() => {
      const staff = staffDB.find(
        u => u.email === email && u.password === password
      );

      if (!staff) {
        setError("Invalid credentials or unauthorized access");
        setLoading(false);
        return;
      }

      localStorage.setItem("auth", "true");
      localStorage.setItem("role", staff.role);

      navigate(
        staff.role === "ADMIN" ? "/admin" :
        staff.role === "DOCTOR" ? "/doctor" :
        staff.role === "NURSE" ? "/nurse" :
        "/receptionist"
      );
    }, 600);
  };

  return (
    <div className="min-h-screen flex items-center justify-center
                    bg-gradient-to-br from-slate-100 to-slate-200">

      <div className="bg-white w-[420px] p-8 rounded-2xl shadow-xl">

        {/* Header */}
        <h2 className="text-2xl font-semibold text-center mb-1">
          Hospital Staff Access
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Authorized personnel only
        </p>

        {/* Error */}
        {error && (
          <div className="bg-red-100 text-red-700 p-3 mb-4 rounded text-sm">
            {error}
          </div>
        )}

        {/* Email */}
        <label className="text-sm text-gray-600 block mb-2">Official Email</label>
        <input
          type="email"
          className="w-full border p-3 rounded-lg mb-4
                     focus:ring-2 focus:ring-indigo-500 outline-none"
          placeholder="name@hospital.org"
          onChange={e => setEmail(e.target.value)}
        />

        {/* Password */}
        <label className="text-sm text-gray-600 block mb-2">Password</label>
        <input
          type="password"
          className="w-full border p-3 rounded-lg mb-6
                     focus:ring-2 focus:ring-indigo-500 outline-none"
          placeholder="••••••••"
          onChange={e => setPassword(e.target.value)}
        />

        {/* Login */}
        <button
          disabled={loading}
          onClick={handleLogin}
          className={`w-full py-3 rounded-xl font-medium text-white
            ${loading
              ? "bg-indigo-300 cursor-not-allowed"
              : "bg-indigo-700 hover:bg-indigo-800"}
          `}
        >
          {loading ? "Verifying..." : "Access System"}
        </button>

        {/* Forgot */}
        <p
          onClick={() => navigate("/staff-forgot")}
          className="text-sm text-center mt-5 text-indigo-600 cursor-pointer"
        >
          Forgot password?
        </p>

        {/* Footer notice */}
        <p className="text-xs text-gray-400 text-center mt-6">
          All access attempts are logged for security compliance
        </p>
      </div>
    </div>
  );
}
