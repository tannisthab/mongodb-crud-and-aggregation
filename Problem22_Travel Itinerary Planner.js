// Problem 22: Travel Itinerary Planner

db.itinerary.insertMany([
  { itinerary_id: 1, customer_name: "Rahul", destination: "Manali", trip_start_date: new Date("2026-06-01"), trip_end_date: new Date("2026-06-10"), budget: 60000, activities: ["Trekking"], hotel_name: "ABC", booking_status: "Confirmed" },
  { itinerary_id: 2, customer_name: "Priya", destination: "Goa", trip_start_date: new Date("2023-01-01"), trip_end_date: new Date("2023-01-05"), budget: 40000, activities: ["Beach"], hotel_name: "XYZ", booking_status: "Cancelled" },
  { itinerary_id: 3, customer_name: "Amit", destination: "Kashmir", trip_start_date: new Date("2026-07-01"), trip_end_date: new Date("2026-07-10"), budget: 80000, activities: ["Trekking","Skiing"], hotel_name: "PQR", booking_status: "Confirmed" },
  { itinerary_id: 4, customer_name: "Neha", destination: "Delhi", trip_start_date: new Date("2026-04-01"), trip_end_date: new Date("2026-04-05"), budget: 20000, activities: ["Shopping"], hotel_name: "LMN", booking_status: "Pending" },
  { itinerary_id: 5, customer_name: "Arjun", destination: "Ladakh", trip_start_date: new Date("2026-08-01"), trip_end_date: new Date("2026-08-10"), budget: 90000, activities: ["Trekking"], hotel_name: "DEF", booking_status: "Confirmed" }
]);

// Find confirmed expensive
db.itinerary.find({
  booking_status: "Confirmed",
  budget: { $gt: 50000 }
});

// Cancel past trips
db.itinerary.updateMany(
  { trip_start_date: { $lt: new Date() } },
  { $set: { booking_status: "Cancelled" } }
);

// Delete old cancelled
db.itinerary.deleteMany({
  booking_status: "Cancelled",
  trip_end_date: { $lt: new Date("2024-01-01") }
});

// Find trekking trips
db.itinerary.find({
  activities: "Trekking"
});
