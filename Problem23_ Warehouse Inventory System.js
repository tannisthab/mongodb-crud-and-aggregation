// Problem 23: Warehouse Inventory System

db.inventory.insertMany([
  { product_id: 1, product_name: "Item1", category: "A", quantity_in_stock: 10, reorder_level: 20, supplier_name: "ABC Corp", last_restock_date: new Date("2026-01-01"), storage_location: "S1" },
  { product_id: 2, product_name: "Item2", category: "B", quantity_in_stock: 50, reorder_level: 30, supplier_name: "XYZ", last_restock_date: new Date("2021-01-01"), storage_location: "S2" },
  { product_id: 3, product_name: "Item3", category: "A", quantity_in_stock: 0, reorder_level: 10, supplier_name: "ABC Corp", last_restock_date: new Date("2020-01-01"), storage_location: "S3" },
  { product_id: 4, product_name: "Item4", category: "C", quantity_in_stock: 5, reorder_level: 10, supplier_name: "LMN", last_restock_date: new Date("2026-03-01"), storage_location: "S4" },
  { product_id: 5, product_name: "Item5", category: "B", quantity_in_stock: 100, reorder_level: 50, supplier_name: "ABC Corp", last_restock_date: new Date("2026-04-01"), storage_location: "S5" }
]);

// Low stock
db.inventory.find({
  $expr: { $lt: ["$quantity_in_stock", "$reorder_level"] }
});

// Increase stock
db.inventory.updateMany(
  { supplier_name: "ABC Corp" },
  { $inc: { quantity_in_stock: 100 } }
);

// Delete old empty stock
db.inventory.deleteMany({
  last_restock_date: { $lt: new Date("2022-01-01") },
  quantity_in_stock: 0
});

// Create index
db.inventory.createIndex({ category: 1, quantity_in_stock: 1 });
