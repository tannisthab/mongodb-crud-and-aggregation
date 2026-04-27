// Problem 15: Book Reading Challenge Tracker

db.reading.insertMany([
  { record_id: 1, member_name: "Rahul", book_title: "Book1", genre: "Fiction", pages_read: 150, total_pages: 300, start_date: new Date("2026-01-01"), completion_date: null, is_completed: false },
  { record_id: 2, member_name: "Priya", book_title: "Book2", genre: "Non-Fiction", pages_read: 200, total_pages: 200, start_date: new Date("2026-02-01"), completion_date: new Date("2026-03-01"), is_completed: true },
  { record_id: 3, member_name: "Amit", book_title: "Book3", genre: "Fiction", pages_read: 120, total_pages: 400, start_date: new Date("2026-03-01"), completion_date: null, is_completed: false },
  { record_id: 4, member_name: "Neha", book_title: "Book4", genre: "Sci-Fi", pages_read: 80, total_pages: 250, start_date: new Date("2022-01-01"), completion_date: null, is_completed: false },
  { record_id: 5, member_name: "Arjun", book_title: "Book5", genre: "Fiction", pages_read: 300, total_pages: 300, start_date: new Date("2026-01-10"), completion_date: new Date("2026-02-10"), is_completed: true }
]);

// Find incomplete with pages > 100
db.reading.find({
  is_completed: false,
  pages_read: { $gt: 100 }
});

// Update completed
db.reading.updateMany(
  { completion_date: { $ne: null } },
  { $set: { is_completed: true } }
);

// Delete old incomplete
db.reading.deleteMany({
  start_date: { $lt: new Date("2023-01-01") },
  is_completed: false
});

// Find completed fiction
db.reading.find({
  genre: "Fiction",
  is_completed: true
});
