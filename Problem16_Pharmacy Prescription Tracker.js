// Problem 16: Pharmacy Prescription Tracker

db.prescriptions.insertMany([
  { prescription_id: 1, patient_name: "Rahul", doctor_name: "Dr. Mehta", medicine_name: "Paracetamol", dosage: "500mg", issue_date: new Date("2026-01-01"), expiry_date: new Date("2026-06-01"), status: "Active" },
  { prescription_id: 2, patient_name: "Priya", doctor_name: "Dr. Sharma", medicine_name: "Ibuprofen", dosage: "200mg", issue_date: new Date("2025-01-01"), expiry_date: new Date("2025-03-01"), status: "Expired" },
  { prescription_id: 3, patient_name: "Amit", doctor_name: "Dr. Khan", medicine_name: "Amoxicillin", dosage: "250mg", issue_date: new Date("2026-02-01"), expiry_date: new Date("2026-07-01"), status: "Active" },
  { prescription_id: 4, patient_name: "Neha", doctor_name: "Dr. Roy", medicine_name: "Cough Syrup", dosage: "10ml", issue_date: new Date("2023-01-01"), expiry_date: new Date("2023-06-01"), status: "Fulfilled" },
  { prescription_id: 5, patient_name: "Arjun", doctor_name: "Dr. Das", medicine_name: "Vitamin D", dosage: "1000IU", issue_date: new Date("2026-03-01"), expiry_date: new Date("2026-09-01"), status: "Active" }
]);

// Find active & not expired
db.prescriptions.find({
  status: "Active",
  expiry_date: { $gt: new Date() }
});

// Update expired
db.prescriptions.updateMany(
  { expiry_date: { $lt: new Date() } },
  { $set: { status: "Expired" } }
);

// Delete old fulfilled
db.prescriptions.deleteMany({
  status: "Fulfilled",
  issue_date: { $lt: new Date("2024-01-01") }
});

// Sort by issue_date
db.prescriptions.find(
  {},
  { _id: 0, patient_name: 1, medicine_name: 1, status: 1 }
).sort({ issue_date: -1 });
