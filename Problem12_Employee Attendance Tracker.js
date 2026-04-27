// Problem 12: Employee Attendance Tracker

db.attendance.insertMany([
  { record_id: 1, emp_name: "Rahul", department: "IT", date: new Date("2026-04-01"), status: "Present", check_in_time: "09:00" },
  { record_id: 2, emp_name: "Priya", department: "HR", date: new Date("2026-04-01"), status: "Absent", check_in_time: null },
  { record_id: 3, emp_name: "Amit", department: "IT", date: new Date("2026-04-02"), status: "Leave", check_in_time: null },
  { record_id: 4, emp_name: "Neha", department: "IT", date: new Date("2023-12-01"), status: "Leave", check_in_time: null },
  { record_id: 5, emp_name: "Arjun", department: "Finance", date: new Date("2026-04-02"), status: "Present", check_in_time: "09:30" }
]);

// Find Absent in IT
db.attendance.find({ status: "Absent", department: "IT" });

// Update status to Present where check_in_time exists
db.attendance.updateMany(
  { check_in_time: { $ne: null } },
  { $set: { status: "Present" } }
);

// Delete old Leave records
db.attendance.deleteMany({
  date: { $lt: new Date("2024-01-01") },
  status: "Leave"
});

// Sort Present records by date
db.attendance.find({ status: "Present" }).sort({ date: 1 });
