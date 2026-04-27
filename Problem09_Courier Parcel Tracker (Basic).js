// Problem 9: Courier Parcel Tracker

// 1. Create collection & insert one parcel document
db.parcels.insertOne({
  parcel_id: 1,
  sender_name: "Rahul",
  receiver_name: "Priya",
  weight: 2.5,
  shipping_cost: 300,
  booking_date: new Date("2026-04-20"),
  delivery_status: "Pending"
});


// 2. Insert at least 5 parcel records using insertMany()
db.parcels.insertMany([
  {
    parcel_id: 2,
    sender_name: "Amit",
    receiver_name: "Neha",
    weight: 1.2,
    shipping_cost: 150,
    booking_date: new Date("2026-04-18"),
    delivery_status: "Shipped"
  },
  {
    parcel_id: 3,
    sender_name: "Sneha",
    receiver_name: "Arjun",
    weight: 3.0,
    shipping_cost: 400,
    booking_date: new Date("2026-04-17"),
    delivery_status: "Pending"
  },
  {
    parcel_id: 4,
    sender_name: "Riya",
    receiver_name: "Karan",
    weight: 0.8,
    shipping_cost: 100,
    booking_date: new Date("2026-04-15"),
    delivery_status: "Delivered"
  },
  {
    parcel_id: 5,
    sender_name: "Neha",
    receiver_name: "Rahul",
    weight: 2.0,
    shipping_cost: 250,
    booking_date: new Date("2026-04-14"),
    delivery_status: "Shipped"
  },
  {
    parcel_id: 6,
    sender_name: "Arjun",
    receiver_name: "Sneha",
    weight: 1.5,
    shipping_cost: 200,
    booking_date: new Date("2026-04-13"),
    delivery_status: "Pending"
  }
]);


// 3. Retrieve all parcels with delivery_status "Pending"
db.parcels.find({
  delivery_status: "Pending"
});


// 4. Display only sender_name, receiver_name, and shipping_cost (Projection)
db.parcels.find(
  {},
  { _id: 0, sender_name: 1, receiver_name: 1, shipping_cost: 1 }
);


// 5. Delete a parcel based on parcel_id
db.parcels.deleteOne({
  parcel_id: 6
});
