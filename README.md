# EHM-Care-Flow
Healthcare Management Web Application (Prototype)
This is a role-based healthcare management web application built as a software prototype to demonstrate how hospital operations can be digitized and connected using a single system.
The project focuses on workflow, usability, and role separation, not real medical diagnosis.
🚀 Features Overview
👥 Role-Based Access
Receptionist – Patient registration, appointment booking
Nurse – Enter vitals, nursing notes
Doctor – View patients, monitoring, prescriptions, appointments
Admin – Dashboard, monitoring, staff & patient overview
Patient – Dashboard, vitals, prescriptions, nutrition, education
Each role sees only what is required for their responsibility.
🛠 Tech Stack
Frontend: React (Vite)
Styling: Tailwind CSS
Charts: Recharts
State/Data: LocalStorage (dummy data)
Routing: React Router
⚠ Note: This is a frontend-only prototype.
No backend or real authentication is used.
src/
├── Components/
├── Pages/
│   ├── Admin/
│   ├── Doctor/
│   ├── Nurse/
│   ├── Receptionist/
│   ├── Patient/
├── Data/
│   ├── patientsDummy.js
│   ├── doctorsDummy.js
│   ├── nursesDummy.js
│   ├── adminMetrics.js
│   ├── monitoringData.js
├── App.jsx
├── main.jsx
⚙ How to Run the Project (First Time)
1️⃣ Clone the Repository
git clone <your-github-repo-link>
cd <project-folder-name>
Install Dependencies
npm install
Start the Development Server
npm run dev
Start the Development Server
npm run dev
After this, open the browser and go to:
http://localhost:5173
Dummy Data Usage
This project uses dummy data stored in LocalStorage for demo purposes.
On first load:
Patients
Doctors
Nurses
Dashboard metrics
are automatically seeded from files inside the Data/ folder.
You can clear data anytime by:
localStorage.clear();
and refreshing the page.
🔐 Authentication Note
This project uses basic role-based redirection
Patient login uses OTP-style flow (dummy)
Staff login is simulated
⚠ No real authentication or encryption is implemented
🎯 Purpose of This Project
Academic / College project
UI/UX demonstration
Hospital workflow simulation
Role-based system understanding
Demo for healthcare software concepts
📌 Limitations
No backend
No real-time data
No real medical decision logic
Not intended for production use
📽 Demo Flow (Suggested Order)
Login / Landing page
Receptionist – Register patient
Nurse – Enter vitals
Doctor – Monitoring & prescriptions
Admin – Dashboard & monitoring
Patient – Dashboard & education
🙌 Acknowledgement
This project was built as a learning-oriented prototype to explore healthcare workflows and frontend architecture.
