// Problem 27: Hotel Feedback

db.feedback.insertMany([
  { feedback_id: 1, guest_name: "Rahul", hotel_name: "HotelA", overall_rating: 2, cleanliness_rating: 2, service_rating: 2, feedback_date: new Date("2026-01-01"), would_recommend: false },
  { feedback_id: 2, guest_name: "Priya", hotel_name: "HotelA", overall_rating: 5, cleanliness_rating: 5, service_rating: 5, feedback_date: new Date("2026-02-01"), would_recommend: true },
  { feedback_id: 3, guest_name: "Amit", hotel_name: "HotelB", overall_rating: 4, cleanliness_rating: 4, service_rating: 4, feedback_date: new Date("2026-03-01"), would_recommend: false },
  { feedback_id: 4, guest_name: "Neha", hotel_name: "HotelC", overall_rating: 1, cleanliness_rating: 1, service_rating: 1, feedback_date: new Date("2022-01-01"), would_recommend: false },
  { feedback_id: 5, guest_name: "Arjun", hotel_name: "HotelB", overall_rating: 5, cleanliness_rating: 5, service_rating: 5, feedback_date: new Date("2026-04-01"), would_recommend: true }
]);

db.feedback.find({
  overall_rating: { $lt: 3 },
  would_recommend: false
});

db.feedback.updateMany(
  { overall_rating: { $gt: 4 } },
  { $set: { would_recommend: true } }
);

db.feedback.deleteMany({
  feedback_date: { $lt: new Date("2023-01-01") },
  overall_rating: 1
});

db.feedback.aggregate([
  {
    $group: {
      _id: "$hotel_name",
      avg_clean: { $avg: "$cleanliness_rating" },
      avg_service: { $avg: "$service_rating" }
    }
  }
]);
