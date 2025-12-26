// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function PatientSignup() {
//   const [name, setName] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirm, setConfirm] = useState("");
//   const navigate = useNavigate();

//   const signup = () => {
//     if (!name || !mobile || !password || !confirm) {
//       alert("Please fill all fields");
//       return;
//     }

//     if (password !== confirm) {
//       alert("Passwords do not match");
//       return;
//     }

//     // demo save
//     localStorage.setItem(
//       "patientAccount",
//       JSON.stringify({ name, mobile })
//     );

//     alert("Account created successfully");
//     navigate("/patient-login");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-white">
//       <div className="bg-white p-8 rounded-lg shadow w-[400px]">
//         <h2 className="text-2xl font-bold text-center mb-1">
//           Create Patient Account
//         </h2>
//         <p className="text-sm text-gray-500 text-center mb-6">
//           Access your health records securely
//         </p>

//         <input
//           placeholder="Full Name"
//           className="w-full border p-2 rounded mb-3"
//           onChange={e => setName(e.target.value)}
//         />

//         <input
//           placeholder="Mobile Number"
//           className="w-full border p-2 rounded mb-3"
//           onChange={e => setMobile(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full border p-2 rounded mb-3"
//           onChange={e => setPassword(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Confirm Password"
//           className="w-full border p-2 rounded mb-4"
//           onChange={e => setConfirm(e.target.value)}
//         />

//         <button
//           onClick={signup}
//           className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
//         >
//           Create Account
//         </button>

//         <p className="text-sm text-center mt-4">
//           Already have an account?{" "}
//           <span
//             className="text-blue-600 cursor-pointer"
//             onClick={() => navigate("/patient-login")}
//           >
//             Login
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }
