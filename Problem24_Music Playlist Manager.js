// Problem 24: Music Playlist Manager

db.playlists.insertMany([
  { playlist_id: 1, user_name: "Rahul", playlist_name: "Hits", songs: [{title:"A",artist:"X"}], created_date: new Date("2026-01-01"), total_duration_minutes: 60, is_public: true, play_count: 150 },
  { playlist_id: 2, user_name: "Priya", playlist_name: "Chill", songs: [{title:"B",artist:"Y"}], created_date: new Date("2022-01-01"), total_duration_minutes: 40, is_public: false, play_count: 50 },
  { playlist_id: 3, user_name: "Rahul", playlist_name: "Workout", songs: [{title:"C",artist:"Z"}], created_date: new Date("2026-02-01"), total_duration_minutes: 80, is_public: true, play_count: 200 },
  { playlist_id: 4, user_name: "Amit", playlist_name: "Focus", songs: [{title:"D",artist:"W"}], created_date: new Date("2026-03-01"), total_duration_minutes: 30, is_public: true, play_count: 120 },
  { playlist_id: 5, user_name: "Neha", playlist_name: "Old", songs: [{title:"E",artist:"Q"}], created_date: new Date("2021-01-01"), total_duration_minutes: 20, is_public: false, play_count: 10 }
]);

// Popular public
db.playlists.find({
  is_public: true,
  play_count: { $gt: 100 }
});

// Increment play count
db.playlists.updateOne(
  { playlist_id: 1 },
  { $inc: { play_count: 1 } }
);

// Delete old private
db.playlists.deleteMany({
  created_date: { $lt: new Date("2023-01-01") },
  is_public: false
});

// Avg duration per user
db.playlists.aggregate([
  { $group: { _id: "$user_name", avg_duration: { $avg: "$total_duration_minutes" } } }
]);
