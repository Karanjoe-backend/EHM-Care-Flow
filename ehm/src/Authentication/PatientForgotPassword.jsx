// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function PatientForgotPassword() {
//   const [step, setStep] = useState(1);
//   const [mobile, setMobile] = useState("");
//   const [otp, setOtp] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const sendOTP = () => {
//     if (!mobile) return alert("Enter mobile number");
//     localStorage.setItem("patientOTP", "222222");
//     setStep(2);
//   };

//   const reset = () => {
//     if (otp !== "222222") return alert("Invalid OTP");
//     alert("Password reset successful");
//     navigate("/patient-login");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-white">
//       <div className="bg-white p-8 rounded-lg shadow w-[380px]">
//         <h2 className="text-xl font-bold text-center mb-4">
//           Recover Access
//         </h2>

//         {step === 1 && (
//           <>
//             <input
//               placeholder="Registered Mobile Number"
//               className="w-full border p-2 rounded mb-4"
//               onChange={e => setMobile(e.target.value)}
//             />
//             <button
//               onClick={sendOTP}
//               className="w-full bg-orange-500 text-white py-2 rounded"
//             >
//               Send OTP
//             </button>
//           </>
//         )}

//         {step === 2 && (
//           <>
//             <input
//               placeholder="Enter OTP"
//               className="w-full border p-2 rounded mb-3"
//               onChange={e => setOtp(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="New Password"
//               className="w-full border p-2 rounded mb-4"
//               onChange={e => setPassword(e.target.value)}
//             />
//             <button
//               onClick={reset}
//               className="w-full bg-orange-500 text-white py-2 rounded"
//             >
//               Reset Password
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }
