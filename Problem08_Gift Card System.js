// Problem 8: Gift Card System

// 1. Create collection & insert one gift card document
db.giftcards.insertOne({
  card_id: 1,
  recipient_name: "Rahul",
  sender_name: "Amit",
  amount: 1000,
  purchase_date: new Date("2026-04-01"),
  expiry_date: new Date("2026-12-31"),
  is_used: false
});


// 2. Insert at least 5 gift card records using insertMany()
db.giftcards.insertMany([
  {
    card_id: 2,
    recipient_name: "Priya",
    sender_name: "Neha",
    amount: 1500,
    purchase_date: new Date("2026-03-15"),
    expiry_date: new Date("2026-10-15"),
    is_used: false
  },
  {
    card_id: 3,
    recipient_name: "Arjun",
    sender_name: "Sneha",
    amount: 500,
    purchase_date: new Date("2025-12-01"),
    expiry_date: new Date("2026-05-01"),
    is_used: true
  },
  {
    card_id: 4,
    recipient_name: "Riya",
    sender_name: "Karan",
    amount: 2000,
    purchase_date: new Date("2026-02-10"),
    expiry_date: new Date("2026-08-10"),
    is_used: false
  },
  {
    card_id: 5,
    recipient_name: "Amit",
    sender_name: "Rahul",
    amount: 750,
    purchase_date: new Date("2026-01-20"),
    expiry_date: new Date("2026-07-20"),
    is_used: true
  },
  {
    card_id: 6,
    recipient_name: "Neha",
    sender_name: "Priya",
    amount: 1200,
    purchase_date: new Date("2026-04-05"),
    expiry_date: new Date("2026-11-05"),
    is_used: false
  }
]);


// 3. Retrieve all cards where is_used is false AND expiry_date is after today
db.giftcards.find({
  is_used: false,
  expiry_date: { $gt: new Date() }
});


// 4. Display only recipient_name, amount, and expiry_date (Projection)
db.giftcards.find(
  {},
  { _id: 0, recipient_name: 1, amount: 1, expiry_date: 1 }
);


// 5. Delete a gift card based on card_id
db.giftcards.deleteOne({
  card_id: 6
});
