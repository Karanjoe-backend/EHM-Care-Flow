import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, roleRequired }) {
  const auth = localStorage.getItem("auth");
  const role = localStorage.getItem("role");

  if (!auth) return <Navigate to="/staff-login" />;
  if (roleRequired && role !== roleRequired)
    return <Navigate to="/staff-login" />;

  return children;
}
