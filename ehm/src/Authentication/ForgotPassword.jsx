import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const sendCode = () => {
    if (!email) {
      alert("Enter email");
      return;
    }

    localStorage.setItem("resetCode", "123456");
    alert("Verification code sent to mail (demo: 123456)");
    navigate("/reset");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-96 p-6 border rounded">
        <h2 className="text-xl font-bold mb-4">Forgot Password</h2>

        <input
          type="email"
          placeholder="Enter registered email"
          className="w-full mb-3 p-2 border"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={sendCode}
          className="w-full bg-black text-white p-2"
        >
          Send Code
        </button>
      </div>
    </div>
  );
}
