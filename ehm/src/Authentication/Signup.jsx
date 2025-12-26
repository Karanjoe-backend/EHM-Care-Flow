import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [role, setRole] = useState("PATIENT");

  const navigate = useNavigate();

  const handleSignup = () => {
    if (!name || !contact || !password || !confirm) {
      alert("All fields required");
      return;
    }

    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }

    // mock save
    localStorage.setItem("user", JSON.stringify({ name, role }));

    alert("Signup successful");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-96 p-6 border rounded">
        <h2 className="text-2xl font-bold mb-4">Signup</h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full mb-3 p-2 border"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Email or Mobile"
          className="w-full mb-3 p-2 border"
          onChange={(e) => setContact(e.target.value)}
        />

        <select
          className="w-full mb-3 p-2 border"
          onChange={(e) => setRole(e.target.value)}
        >
          <option>PATIENT</option>
          <option>DOCTOR</option>
          <option>NURSE</option>
          <option>CARETAKER</option>
          <option>RECEPTIONIST</option>
        </select>

        <input
          type="password"
          placeholder="Password"
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
          onClick={handleSignup}
          className="w-full bg-black text-white p-2"
        >
          Create Account
        </button>

        <p className="text-sm mt-3">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}
