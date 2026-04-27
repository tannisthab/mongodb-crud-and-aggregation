// Problem 20: Hospital Bed Availability System

db.beds.insertMany([
  { bed_id: 1, ward_name: "ICU", bed_type: "ICU", is_occupied: false, patient_name: null, admission_date: new Date(), expected_discharge_date: new Date("2026-05-01") },
  { bed_id: 2, ward_name: "General", bed_type: "General", is_occupied: true, patient_name: "Rahul", admission_date: new Date("2026-04-01"), expected_discharge_date: new Date("2026-04-10") },
  { bed_id: 3, ward_name: "ICU", bed_type: "ICU", is_occupied: true, patient_name: "Priya", admission_date: new Date(), expected_discharge_date: new Date("2026-05-05") },
  { bed_id: 4, ward_name: "Private", bed_type: "Private", is_occupied: false, patient_name: null, admission_date: null, expected_discharge_date: null },
  { bed_id: 5, ward_name: "ICU", bed_type: "ICU", is_occupied: true, patient_name: "Amit", admission_date: new Date("2023-01-01"), expected_discharge_date: new Date("2023-01-10") }
]);

// Free ICU beds
db.beds.find({
  is_occupied: false,
  ward_name: "ICU"
});

// Update beds admitted today
db.beds.updateMany(
  { admission_date: { $gte: new Date(new Date().setHours(0,0,0,0)) } },
  { $set: { is_occupied: true, patient_name: "Updated Patient" } }
);

// Delete old occupied
db.beds.deleteMany({
  expected_discharge_date: { $lt: new Date() },
  is_occupied: true
});

// Sort by bed_type
db.beds.find(
  {},
  { _id: 0, ward_name: 1, bed_type: 1, is_occupied: 1 }
).sort({ bed_type: 1 });
