import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();

  const resetPassword = () => {
    const savedCode = localStorage.getItem("resetCode");

    if (code !== savedCode) {
      alert("Invalid code");
      return;
    }

    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }

    alert("Password reset successful");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-96 p-6 border rounded">
        <h2 className="text-xl font-bold mb-4">Reset Password</h2>

        <input
          type="text"
          placeholder="Verification Code"
          className="w-full mb-3 p-2 border"
          onChange={(e) => setCode(e.target.value)}
        />

        <input
          type="password"
          placeholder="New Password"
          className="w-full mb-3 p-2 border"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full mb-3 p-2 border"
          onChange={(e) => setConfirm(e.target.value)}
        />

        <button
          onClick={resetPassword}
          className="w-full bg-black text-white p-2"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
}
