import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Authentication/Landing";
// import Signup from "./Authentication/Signup";
// import ForgotPassword from "./Authentication/ForgotPassword";
// import ResetPassword from "./Authentication/ResetPassword";
import AdminLayout from "./Roles/Admin/AdminLayout";
import AdminDashboard from "./Roles/Admin/AdminDashboard";
import ProtectedRoute from "./Routes/ProtectedRoute";
import Monitoring from "./Roles/Admin/Monitoring";
import Patients from "./Roles/Admin/Patients";
import Doctors from "./Roles/Admin/Doctors";
import Nurses from "./Roles/Admin/Nurses";
import Settings from "./Roles/Admin/Settings";
import PatientLayout from "./Roles/Patient/PatientLayout";
import PatientDashboard from "./Roles/Patient/PatientDashboard";
import Nutrition from "./Roles/Patient/Nutrition";
import PatientEducation from "./Roles/Patient/PatientEducation";
import SymptomDiary from "./Roles/Patient/SymptomDiary";
import StaffLogin from "./Authentication/StaffLogin";
import PatientLogin from "./Authentication/PatientLogin";
import StaffForgotPassword from "./Authentication/StaffForgotPassword";
// import PatientForgotPassword from "./Authentication/PatientForgotPassword";
// import PatientSignup from "./Authentication/PatientSignup";
import DoctorDashboard from "./Roles/Doctor/DoctorDashboard";
import DoctorLayout from "./Roles/Doctor/DoctorLayout";
import DoctorPatients from "./Roles/Doctor/DoctorPatients";
import Appointments from "./Roles/Doctor/Appointments";
import Prescriptions from "./Roles/Doctor/Prescriptions";
import PatientOverview from "./Roles/Doctor/PatientOverview";
import NurseDashboard from "./Roles/Nurse/NurseDashboard";
import NurseLayout from "./Roles/Nurse/NurseLayout";
import NursePatientCare from "./Roles/Nurse/NursePatientCare";
import NursePatients from "./Roles/Nurse/NursePatients";
import ReceptionistPatientDetails from "./Roles/Receptionist/ReceptionistPAtientDetails";
import ReceptionistDashboard from "./Roles/Receptionist/ReceptionistDashboard";
import ReceptionistLayout from "./Roles/Receptionist/ReceptionistLayout";
import ReceptionistPatients from "./Roles/Receptionist/ReceptionistPatients";
import RegisterPatient from "./Roles/Receptionist/RegisterPatient";
import PatientOTP from "./Authentication/PatientOTP";
import PatientPrescription from "./Roles/Doctor/PatientPrescription";
import ReceptionistAppointments from "./Roles/Receptionist/Appointments";
import BookAppointment from "./Roles/Receptionist/BookAppointment";
import PatientMeds from "./Roles/Patient/PatientMeds";
import PatientProfile from "./Roles/Patient/PatientProfile";
import AdminMonitoringPatients from "./Roles/Admin/AdminMonitoringPatients";
import AddDoctor from "./Roles/Admin/AddDoctor";
import AddNurse from "./Roles/Admin/AddNurse";





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/staff-login" element={<StaffLogin />} />
        <Route path="/staff-forgot" element={<StaffForgotPassword />} />

        <Route path="/patient-login" element={<PatientLogin />} />
        {/* <Route path="/patient-signup" element={<PatientSignup />} /> */}
        {/* <Route path="/patient-forgot" element={<PatientForgotPassword />} /> */}
        <Route path="/patient-otp" element={<PatientOTP />} />


        <Route
          path="/admin"
          element={
            <ProtectedRoute roleRequired="ADMIN">
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="/admin/monitoring" element={<AdminMonitoringPatients />} />
<Route
  path="/admin/monitoring/:patientId"
  element={<Monitoring />}
/>
          <Route path="/admin/patients" element={<Patients />} />
          <Route path="/admin/doctors" element={<Doctors />} />
          <Route path="/admin/nurses" element={<Nurses />} />
          <Route path="/admin/settings" element={<Settings />} />
          <Route path="/admin/settings/add-doctor" element={<AddDoctor />} />
  <Route path="/admin/settings/add-nurse" element={<AddNurse />} />
          

        </Route>
        <Route
          path="/patient"
          element={
            <ProtectedRoute roleRequired="PATIENT">
              <PatientLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<PatientDashboard />} />
          <Route path="/patient/nutrition" element={<Nutrition />} />
          <Route path="/patient/diary" element={<SymptomDiary />} />
          <Route path="/patient/education" element={<PatientEducation />} />
          <Route path="/patient/meds" element={<PatientMeds />} />
          <Route path="/patient/education" element={<PatientEducation />} />
          <Route path="/patient/profile" element={<PatientProfile />} />
        </Route>

        <Route
          path="/doctor"
          element={
            <ProtectedRoute roleRequired="DOCTOR">
              <DoctorLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DoctorDashboard />} />
          <Route path="patients" element={<DoctorPatients />} />
          <Route path="patient/:patientId" element={<PatientOverview />} />
          <Route path="prescriptions" element={<Prescriptions />} />
          <Route
            path="prescriptions/:patientId"
            element={<PatientPrescription />}
          />
          <Route path="appointments" element={<Appointments />} />
        </Route>

        <Route
          path="/nurse"
          element={
            <ProtectedRoute roleRequired="NURSE">
              <NurseLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<NurseDashboard />} />
          <Route path="patients" element={<NursePatients />} />
           <Route
            path="patient/:patientId"
            element={<NursePatientCare />}
          />
        </Route>

        <Route
          path="/receptionist"
          element={
            <ProtectedRoute roleRequired="RECEPTIONIST">
              <ReceptionistLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<ReceptionistDashboard />} />
          <Route path="register" element={<RegisterPatient />} />
          <Route path="patients" element={<ReceptionistPatients />} />
          <Route path="patient/:patientId" element={<ReceptionistPatientDetails />} />
          <Route path="appointments" element={<ReceptionistAppointments />} />
          <Route path="appointments/book" element={<BookAppointment />} />
        </Route>



      </Routes>
    </BrowserRouter>


  );
}

export default App;
