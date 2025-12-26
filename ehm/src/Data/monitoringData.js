export const patients = [
 {
  id: "P1023",
  name: "Alex",
  assignedDoctor: "Dr. Priya",
  monitoringStatus: "Attention",
  adminFlags: {
    flagged: true,
    flaggedAt: "2025-01-24 10:32",
    notifiedDoctor: true,
    notifiedAt: "2025-01-24 10:34"
  }
}
];

export const vitalsTrend = [
  { time: "08:00", spo2: 96, pulse: 78 },
  { time: "10:00", spo2: 94, pulse: 82 },
  { time: "12:00", spo2: 92, pulse: 90 },
  { time: "14:00", spo2: 89, pulse: 98 },
  { time: "16:00", spo2: 88, pulse: 102 }
];


export const patientList = [
{
  id: "P1001",
  name: "Alex Johnson",
  age: 26,
  gender: "Male",
  mobile: "9876543210",
  assignedDoctor: "Dr. Priya",
  assignedNurse: "Nurse Anitha",

  status: "Active",            // REQUIRED
  admissionDate: "2025-01-24", // REQUIRED
  dischargeDate: null          // REQUIRED
}

  
];


// data/appointments.js
export const appointments = [
  {
    patientId: "P20488",
    type: "Emergency",
    status: "Emergency"
  },
  {
    patientId: "P10239",
    type: "Normal",
    status: "Scheduled"
  }
];
