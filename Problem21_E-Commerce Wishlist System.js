// Problem 21: E-Commerce Wishlist System

db.wishlist.insertMany([
  { wishlist_id: 1, customer_name: "Rahul", product_name: "Phone", product_category: "Electronics", price: 1500, added_date: new Date("2026-01-01"), notify_when_available: true },
  { wishlist_id: 2, customer_name: "Priya", product_name: "Shoes", product_category: "Fashion", price: 1200, added_date: new Date("2025-01-01"), notify_when_available: true },
  { wishlist_id: 3, customer_name: "Rahul", product_name: "Laptop", product_category: "Electronics", price: 50000, added_date: new Date("2026-03-01"), notify_when_available: false },
  { wishlist_id: 4, customer_name: "Amit", product_name: "Watch", product_category: "Accessories", price: 1800, added_date: new Date("2023-01-01"), notify_when_available: true },
  { wishlist_id: 5, customer_name: "Priya", product_name: "Headphones", product_category: "Electronics", price: 1800, added_date: new Date("2026-04-01"), notify_when_available: true }
]);

// Find cheap & notify
db.wishlist.find({
  price: { $lt: 2000 },
  notify_when_available: true
});

// Apply 20% discount
db.wishlist.updateMany(
  { product_category: "Electronics" },
  { $mul: { price: 0.8 } }
);

// Delete old items
db.wishlist.deleteMany({
  added_date: { $lt: new Date("2024-01-01") }
});

// Group by customer
db.wishlist.aggregate([
  { $group: { _id: "$customer_name", count: { $sum: 1 } } }
]);
