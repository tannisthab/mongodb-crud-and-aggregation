// Problem 18: Gym Equipment Maintenance Tracker

db.equipment.insertMany([
  { equip_id: 1, equip_name: "Treadmill", category: "Cardio", purchase_date: new Date("2014-01-01"), last_maintenance_date: new Date("2026-01-01"), next_maintenance_date: new Date("2026-06-01"), condition: "NeedsService" },
  { equip_id: 2, equip_name: "Bench Press", category: "Strength", purchase_date: new Date("2018-01-01"), last_maintenance_date: new Date("2026-02-01"), next_maintenance_date: new Date("2026-07-01"), condition: "Good" },
  { equip_id: 3, equip_name: "Cycle", category: "Cardio", purchase_date: new Date("2010-01-01"), last_maintenance_date: new Date("2023-01-01"), next_maintenance_date: new Date("2023-06-01"), condition: "OutOfOrder" },
  { equip_id: 4, equip_name: "Dumbbells", category: "Strength", purchase_date: new Date("2016-01-01"), last_maintenance_date: new Date("2026-03-01"), next_maintenance_date: new Date("2026-08-01"), condition: "NeedsService" },
  { equip_id: 5, equip_name: "Rowing Machine", category: "Cardio", purchase_date: new Date("2019-01-01"), last_maintenance_date: new Date("2026-04-01"), next_maintenance_date: new Date("2026-09-01"), condition: "Good" }
]);

// Needs service OR out of order
db.equipment.find({
  condition: { $in: ["NeedsService", "OutOfOrder"] }
});

// Update condition to Good
db.equipment.updateMany(
  { last_maintenance_date: { $gt: new Date("2025-01-01") } },
  { $set: { condition: "Good" } }
);

// Delete old broken
db.equipment.deleteMany({
  purchase_date: { $lt: new Date("2015-01-01") },
  condition: "OutOfOrder"
});

// Sort by next maintenance
db.equipment.find().sort({ next_maintenance_date: 1 });
