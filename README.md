# Healthcare Management Web Application (Prototype)

> Role-based healthcare management web application (frontend prototype) demonstrating how hospital operations can be digitized and connected using a single system. Focus is on workflow, usability and role separation — not on real medical diagnosis or production readiness.

---

## Table of contents
- [Overview](#overview)
- [Features](#features)
- [Roles & Responsibilities](#roles--responsibilities)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting started (first time)](#getting-started-first-time)
- [Dummy data & LocalStorage](#dummy-data--localstorage)
- [Authentication note](#authentication-note)
- [Purpose](#purpose)
- [Limitations](#limitations)
- [Suggested demo flow](#suggested-demo-flow)
- [Demo login credentials](#demo-login-credentials)
- [Acknowledgement](#acknowledgement)
- [License](#license)

---

## Overview
This is a frontend-only prototype of a healthcare management system built to showcase a role-based UI and typical hospital workflows. It demonstrates how reception, nursing, clinical and administrative tasks can be separated and presented to appropriate users. It is intended for academic/learning, UI/UX demos, and workflow exploration only.

---

## Features
- Role-based access and views
- Patient registration and appointment booking
- Nurse vitals and nursing notes entry
- Doctor monitoring, prescriptions and appointments
- Admin dashboard and monitoring (staff & patient overview)
- Patient dashboard: vitals, prescriptions, nutrition and education
- Charts using Recharts for simple visualizations
- Local dummy data persisted in LocalStorage for quick demo

---

## Roles & Responsibilities
- Receptionist
  - Patient registration
  - Appointment booking
- Nurse
  - Enter vitals
  - Add nursing notes
- Doctor
  - View patient lists
  - Patient monitoring
  - Prescribe medications
  - Manage appointments
- Admin
  - Dashboard & metrics
  - Monitoring and staff/patient overview
- Patient
  - View personal dashboard
  - View vitals, prescriptions, nutrition, education content

Each role sees only the UI and data necessary for their responsibilities.

---

## Tech Stack
- Frontend: React (Vite)
- Styling: Tailwind CSS
- Charts: Recharts
- State / Data: LocalStorage (dummy data)
- Routing: React Router

> Note: This is a frontend prototype — there is no backend, database or production authentication.

---

## Project structure (important files / folders)
src/
├── Components/  
├── Roles/  
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
└── main.jsx

---

## Getting started (First time)
1. Clone the repository
   - git clone <repository-url>
   - cd <repository-folder>
2. Install dependencies
   - npm install
3. Start the development server
   - npm run dev
4. Open the app in your browser:
   - http://localhost:5173

---

## Dummy Data & LocalStorage
- The app uses dummy data stored in LocalStorage for demonstration.
- On first load, the app seeds LocalStorage from files inside `src/Data/`:
  - Patients, Doctors, Nurses and Admin dashboard metrics are populated automatically.
- To reset demo data, open the browser console and run:
  - localStorage.clear();
  - then refresh the page

---

## Authentication note
- Authentication is simulated for demo purposes.
- Staff logins are simulated with email/password.
- Patient login uses a dummy OTP-style flow.
- No real authentication, encryption, or session security is implemented. Do not use this for real accounts or PHI.

---

## Purpose
- Academic / college project
- UI/UX demonstration of healthcare workflows
- Hospital workflow simulation and role-based system understanding
- Demo for frontend architecture and prototyping healthcare software concepts

---

## Limitations
- No backend or database
- No real-time data or WebSocket updates
- No real medical decision-making logic
- Not suitable for production or clinical use
- No security, encryption, or real authentication

---

## Suggested demo flow (recommended order)
1. Login / Landing page
2. Receptionist — Register a new patient & book an appointment
3. Nurse — Enter patient vitals and nursing notes
4. Doctor — Monitor patients, create prescriptions
5. Admin — View dashboard, metrics and monitoring
6. Patient — Open patient dashboard, view vitals and education materials

---

## Demo login credentials
```
Admin
Email    : admin@hospital.com
Password : 1234

Receptionist
Email    : reception@hospital.com
Password : 1234

Nurse
Email    : nurse@hospital.com
Password : 1234

Doctor
Email    : doctor@hospital.com
Password : 1234

Patient (OTP-based – Dummy)
Mobile : 9876543210
DOB    : 1998-15-06
OTP    : 123456
ID     : P10239
```

> Note: The patient flow is an OTP-style dummy flow (no real SMS/OTP service).

---

## Acknowledgement
This project was built as a learning-oriented prototype to explore healthcare workflows and frontend architecture. It is intended to demonstrate concepts and provide a basis for further development and discussion.

---

## License
No license provided. This project is distributed without a license — see your organization or instructor for allowed uses. If you want others to reuse or contribute, add an appropriate license (e.g., MIT, Apache-2.0) to the repository.

---
