// Problem 30: Manufacturing Defect Tracking

db.defects.insertMany([
  { defect_id: 1, product_name: "ProdA", defect_type: "Functional", detection_date: new Date("2026-01-01"), severity: "High", quantity_affected: 10, root_cause: "Design", status: "Open" },
  { defect_id: 2, product_name: "ProdB", defect_type: "Cosmetic", detection_date: new Date("2021-01-01"), severity: "Low", quantity_affected: 5, root_cause: "Paint", status: "Resolved", resolution_date: new Date("2021-02-01") },
  { defect_id: 3, product_name: "ProdC", defect_type: "Safety", detection_date: new Date("2026-02-01"), severity: "High", quantity_affected: 20, root_cause: "Material", status: "Open" },
  { defect_id: 4, product_name: "ProdD", defect_type: "Functional", detection_date: new Date("2023-01-01"), severity: "Medium", quantity_affected: 8, root_cause: "Assembly", status: "Investigating" },
  { defect_id: 5, product_name: "ProdE", defect_type: "Cosmetic", detection_date: new Date("2026-03-01"), severity: "Low", quantity_affected: 3, root_cause: "Packaging", status: "Open" }
]);

db.defects.find({
  severity: "High",
  status: "Open"
});

db.defects.updateMany(
  { root_cause: { $exists: true } },
  { $set: { status: "Resolved", resolution_date: new Date() } }
);

db.defects.deleteMany({
  detection_date: { $lt: new Date("2022-01-01") },
  status: "Resolved"
});

db.defects.aggregate([
  { $group: { _id: "$defect_type", total: { $sum: "$quantity_affected" } } },
  { $sort: { total: -1 } }
]);
