// Problem 14: Vehicle Service Center System

db.services.insertMany([
  { service_id: 1, customer_name: "Rahul", vehicle_number: "KA01", service_type: "Repair", service_date: new Date("2026-07-01"), cost: 800, status: "InProgress" },
  { service_id: 2, customer_name: "Priya", vehicle_number: "KA02", service_type: "Oil Change", service_date: new Date("2024-01-01"), cost: 300, status: "Completed" },
  { service_id: 3, customer_name: "Amit", vehicle_number: "KA03", service_type: "Inspection", service_date: new Date("2026-05-01"), cost: 600, status: "Scheduled" },
  { service_id: 4, customer_name: "Neha", vehicle_number: "KA04", service_type: "Repair", service_date: new Date("2023-01-01"), cost: 200, status: "Completed" },
  { service_id: 5, customer_name: "Arjun", vehicle_number: "KA05", service_type: "Inspection", service_date: new Date("2026-06-01"), cost: 700, status: "InProgress" }
]);

// Find InProgress before date
db.services.find({
  status: "InProgress",
  service_date: { $lt: new Date("2026-08-01") }
});

// Update old services to Completed
db.services.updateMany(
  { service_date: { $lt: new Date("2025-01-01") } },
  { $set: { status: "Completed" } }
);

// Delete cheap completed services
db.services.deleteMany({
  status: "Completed",
  cost: { $lt: 500 }
});

// Sort by cost
db.services.find(
  {},
  { _id: 0, customer_name: 1, service_type: 1, cost: 1 }
).sort({ cost: -1 });
