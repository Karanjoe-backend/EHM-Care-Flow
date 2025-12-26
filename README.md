# EHM-Care-Flow
# Healthcare Management Web Application (Prototype)

A role-based healthcare management web application — frontend-only prototype — built to demonstrate how hospital operations can be digitized and connected using a single system. This project focuses on workflow, usability, and role separation. It is a learning/prototype artifact and is not intended for real medical diagnosis or production use.

---

## 🚀 Features Overview

- Role-based access control (UI-level)
  - Receptionist — Patient registration, appointment booking
  - Nurse — Enter vitals, nursing notes
  - Doctor — View patients, monitoring, prescriptions, appointments
  - Admin — Dashboard, monitoring, staff & patient overview
  - Patient — Dashboard, vitals, prescriptions, nutrition, education
- Each role only sees the screens and data relevant to their responsibilities
- Charts and visualizations for monitoring and metrics
- Dummy data persisted in LocalStorage for demos

---

## 🛠 Tech Stack

- Frontend: React (Vite)
- Styling: Tailwind CSS
- Charts: Recharts
- State / Demo Data: LocalStorage (seeded from project files)
- Routing: React Router

> ⚠ Note: This is a frontend-only prototype. There is no backend, and no real authentication or encryption is implemented.

---

## Project Structure (src/)

- Components/ — Reusable UI components
- Pages/ — Role-scoped pages
  - Admin/
  - Doctor/
  - Nurse/
  - Receptionist/
  - Patient/
- Data/ — Dummy data used to seed LocalStorage
  - patientsDummy.js
  - doctorsDummy.js
  - nursesDummy.js
  - adminMetrics.js
  - monitoringData.js
- App.jsx
- main.jsx

---

## ⚙ How to Run the Project (First Time)

1. Clone the repository
   - git clone <repo-url>
   - cd <repo-directory>
2. Install dependencies
   - npm install
3. Start the development server
   - npm run dev
4. Open the app in your browser:
   - http://localhost:5173

---

## Dummy Data Usage

- This project uses dummy data stored in LocalStorage for demo purposes.
- On first load the app automatically seeds sample data (Patients, Doctors, Nurses, Dashboard metrics) using files inside `src/Data/`.
- To clear demo data and reset:
  - Open browser console and run:
    - localStorage.clear();
  - Refresh the page — the seed will run again on first load.

---

## 🔐 Authentication Note

- Authentication is simulated:
  - Staff login is simulated (role-based redirection).
  - Patient login follows a dummy OTP-style flow.
- No real authentication, authorization, or encryption is implemented — do not use this code for sensitive data.

---

## 🎯 Purpose

This project was created as a prototype with these goals:

- Academic / college project
- UI/UX demonstration for healthcare scenarios
- Hospital workflow simulation (register → triage → monitoring → prescription)
- Understand and demo role-based UI separation and frontend architecture
- Provide a base for demos of healthcare software concepts

---

## 📌 Limitations

- No backend or persistent server
- No real-time data (no WebSockets)
- No clinical decision-making or medical logic
- Not for production use or real patients

---

## 📽 Suggested Demo Flow (Order to try features)

1. Visit the Login / Landing page
2. Receptionist — Register a patient and book an appointment
3. Nurse — Enter vitals and nursing notes for the patient
4. Doctor — View monitoring charts and add prescriptions
5. Admin — View dashboard, monitoring metrics, staff & patient overview
6. Patient — View personal dashboard, vitals, prescriptions, nutrition & education materials

---

## 🙌 Acknowledgements

This project was built as a learning-oriented prototype to explore healthcare workflows and frontend architecture. Thank you to everyone who contributed ideas and feedback.

---

## Contributing

- This repository is a demo/prototype. If you want to extend it:
  - Add backend integration (API + DB)
  - Replace LocalStorage seeds with real endpoints
  - Implement secure authentication and role-based authorization
  - Add tests and CI
- For small UI/UX fixes or data improvements, feel free to open issues or PRs.

---

## Maintainer / Contact

- Maintainer: Karanjoe-backend

---

## License

- No license file included by default. Add a LICENSE if you plan to open-source or share under specific terms.

