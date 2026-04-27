// Problem 2: Contact Book System

// 1. Create collection & insert one contact document
db.contacts.insertOne({
  contact_id: 1,
  first_name: "Rahul",
  last_name: "Sharma",
  phone: "9876543210",
  email: "rahul.sharma@gmail.com",
  city: "Mumbai"
});


// 2. Insert at least 5 contact records using insertMany()
db.contacts.insertMany([
  {
    contact_id: 2,
    first_name: "Priya",
    last_name: "Verma",
    phone: "9123456780",
    email: "priya.verma@gmail.com",
    city: "Delhi"
  },
  {
    contact_id: 3,
    first_name: "Amit",
    last_name: "Patel",
    phone: "9988776655",
    email: "amit.patel@gmail.com",
    city: "Mumbai"
  },
  {
    contact_id: 4,
    first_name: "Sneha",
    last_name: "Reddy",
    phone: "9012345678",
    email: "sneha.reddy@gmail.com",
    city: "Hyderabad"
  },
  {
    contact_id: 5,
    first_name: "Arjun",
    last_name: "Singh",
    phone: "9090909090",
    email: "arjun.singh@gmail.com",
    city: "Mumbai"
  },
  {
    contact_id: 6,
    first_name: "Neha",
    last_name: "Gupta",
    phone: "9871234560",
    email: "neha.gupta@gmail.com",
    city: "Kolkata"
  }
]);


// 3. Retrieve all contacts from "Mumbai"
db.contacts.find({
  city: "Mumbai"
});


// 4. Display only first_name, last_name, and phone (Projection)
db.contacts.find(
  {},
  { _id: 0, first_name: 1, last_name: 1, phone: 1 }
);


// 5. Delete a contact based on contact_id
db.contacts.deleteOne({
  contact_id: 6
});
