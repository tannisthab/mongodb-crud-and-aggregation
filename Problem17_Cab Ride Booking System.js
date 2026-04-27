// Problem 17: Cab Ride Booking System

db.rides.insertMany([
  { ride_id: 1, rider_name: "Rahul", driver_name: "Suresh", pickup_location: "A", drop_location: "B", ride_date: new Date(), distance_km: 12, fare: 350, ride_status: "Requested" },
  { ride_id: 2, rider_name: "Priya", driver_name: "Ramesh", pickup_location: "C", drop_location: "D", ride_date: new Date("2026-04-01"), distance_km: 5, fare: 150, ride_status: "Completed" },
  { ride_id: 3, rider_name: "Amit", driver_name: "Karan", pickup_location: "E", drop_location: null, ride_date: new Date(), distance_km: 8, fare: 200, ride_status: "Accepted" },
  { ride_id: 4, rider_name: "Neha", driver_name: "Ajay", pickup_location: "F", drop_location: "G", ride_date: new Date("2023-05-01"), distance_km: 3, fare: 100, ride_status: "Cancelled" },
  { ride_id: 5, rider_name: "Arjun", driver_name: "Vijay", pickup_location: "H", drop_location: "I", ride_date: new Date(), distance_km: 15, fare: 500, ride_status: "Requested" }
]);

// Find Requested today
db.rides.find({
  ride_status: "Requested",
  ride_date: { $gte: new Date(new Date().setHours(0,0,0,0)) }
});

// Update completed where drop exists
db.rides.updateMany(
  { drop_location: { $ne: null } },
  { $set: { ride_status: "Completed" } }
);

// Delete old cancelled
db.rides.deleteMany({
  ride_status: "Cancelled",
  ride_date: { $lt: new Date("2024-06-01") }
});

// Find long & costly rides
db.rides.find({
  distance_km: { $gt: 10 },
  fare: { $gt: 300 }
});
