// Problem 29: Social Media Analytics

db.followers.insertMany([
  { follower_id: 1, follower_name: "User1", followed_since: new Date("2026-01-01"), engagement_score: 90, is_active: true, interests: ["Tech","Music"], last_interaction_date: new Date("2026-04-01") },
  { follower_id: 2, follower_name: "User2", followed_since: new Date("2021-01-01"), engagement_score: 10, is_active: true, interests: ["Food"], last_interaction_date: new Date("2022-01-01") },
  { follower_id: 3, follower_name: "User3", followed_since: new Date("2026-02-01"), engagement_score: 85, is_active: true, interests: ["Tech"], last_interaction_date: new Date("2026-03-01") },
  { follower_id: 4, follower_name: "User4", followed_since: new Date("2020-01-01"), engagement_score: 15, is_active: true, interests: ["Travel"], last_interaction_date: new Date("2023-01-01") },
  { follower_id: 5, follower_name: "User5", followed_since: new Date("2026-03-01"), engagement_score: 95, is_active: true, interests: ["Music","Tech"], last_interaction_date: new Date("2026-04-10") }
]);

db.followers.find({
  engagement_score: { $gt: 80 },
  is_active: true
});

db.followers.updateMany(
  { last_interaction_date: { $lt: new Date("2025-01-01") } },
  { $set: { is_active: false } }
);

db.followers.deleteMany({
  followed_since: { $lt: new Date("2022-01-01") },
  engagement_score: { $lt: 20 }
});

db.followers.aggregate([
  { $unwind: "$interests" },
  { $group: { _id: "$interests", count: { $sum: 1 } } },
  { $sort: { count: -1 } }
]);
