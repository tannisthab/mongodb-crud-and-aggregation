// Problem 13: Online Polling System

db.polls.insertMany([
  { poll_id: 1, question: "Fav Language?", options: ["Python","Java","C++"], votes: [10,5,3], created_date: new Date("2026-01-01"), end_date: new Date("2026-06-01"), is_active: true },
  { poll_id: 2, question: "Best DB?", options: ["MongoDB","MySQL","Postgres","SQLite"], votes: [15,10,5,2], created_date: new Date("2025-01-01"), end_date: new Date("2025-06-01"), is_active: false },
  { poll_id: 3, question: "Fav Food?", options: ["Pizza","Burger","Pasta","Momos"], votes: [20,15,10,8], created_date: new Date("2026-02-01"), end_date: new Date("2026-08-01"), is_active: true },
  { poll_id: 4, question: "Travel Mode?", options: ["Car","Train"], votes: [5,7], created_date: new Date("2022-01-01"), end_date: new Date("2022-06-01"), is_active: false },
  { poll_id: 5, question: "OS?", options: ["Windows","Linux","Mac"], votes: [25,15,10], created_date: new Date("2026-03-01"), end_date: new Date("2026-09-01"), is_active: true }
]);

// Active polls not expired
db.polls.find({ is_active: true, end_date: { $gt: new Date() } });

// Expire old polls
db.polls.updateMany(
  { end_date: { $lt: new Date() } },
  { $set: { is_active: false } }
);

// Delete old inactive polls
db.polls.deleteMany({
  created_date: { $lt: new Date("2023-01-01") },
  is_active: false
});

// Options length > 3
db.polls.find({ options: { $size: 4 } });
