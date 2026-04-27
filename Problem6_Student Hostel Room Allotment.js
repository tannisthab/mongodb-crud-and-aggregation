// Problem 6: Student Hostel Room Allotment

// 1. Create collection & insert one student document
db.hostel.insertOne({
  student_id: 1,
  name: "Rahul Das",
  room_number: 101,
  block_name: "A",
  bed_number: 1,
  check_in_date: new Date("2026-04-20")
});


// 2. Insert at least 5 student records using insertMany()
db.hostel.insertMany([
  {
    student_id: 2,
    name: "Priya Sharma",
    room_number: 102,
    block_name: "A",
    bed_number: 2,
    check_in_date: new Date("2026-04-18")
  },
  {
    student_id: 3,
    name: "Amit Patel",
    room_number: 201,
    block_name: "B",
    bed_number: 1,
    check_in_date: new Date("2026-04-15")
  },
  {
    student_id: 4,
    name: "Sneha Reddy",
    room_number: 202,
    block_name: "B",
    bed_number: 2,
    check_in_date: new Date("2026-04-10")
  },
  {
    student_id: 5,
    name: "Arjun Singh",
    room_number: 103,
    block_name: "A",
    bed_number: 1,
    check_in_date: new Date("2026-04-12")
  },
  {
    student_id: 6,
    name: "Neha Gupta",
    room_number: 301,
    block_name: "C",
    bed_number: 1,
    check_in_date: new Date("2026-04-08")
  }
]);


// 3. Retrieve all students from block "A"
db.hostel.find({
  block_name: "A"
});


// 4. Display only name, room_number, and block_name (Projection)
db.hostel.find(
  {},
  { _id: 0, name: 1, room_number: 1, block_name: 1 }
);


// 5. Delete a student record based on student_id
db.hostel.deleteOne({
  student_id: 6
});
