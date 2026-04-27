// Problem 25: Banking Loan Application System

db.loans.insertMany([
  { loan_id: 1, applicant_name: "Rahul", loan_type: "Home", loan_amount: 500000, interest_rate: 7, tenure_months: 60, application_date: new Date("2026-01-01"), approval_status: "Pending", credit_score: 750 },
  { loan_id: 2, applicant_name: "Priya", loan_type: "Car", loan_amount: 300000, interest_rate: 8, tenure_months: 36, application_date: new Date("2022-01-01"), approval_status: "Rejected", credit_score: 600 },
  { loan_id: 3, applicant_name: "Amit", loan_type: "Personal", loan_amount: 100000, interest_rate: 10, tenure_months: 24, application_date: new Date("2026-02-01"), approval_status: "Pending", credit_score: 720 },
  { loan_id: 4, applicant_name: "Neha", loan_type: "Home", loan_amount: 700000, interest_rate: 6, tenure_months: 120, application_date: new Date("2026-03-01"), approval_status: "Approved", credit_score: 800 },
  { loan_id: 5, applicant_name: "Arjun", loan_type: "Car", loan_amount: 250000, interest_rate: 9, tenure_months: 48, application_date: new Date("2026-04-01"), approval_status: "Pending", credit_score: 780 }
]);

// Find good pending
db.loans.find({
  approval_status: "Pending",
  credit_score: { $gt: 700 }
});

// Approve high score
db.loans.updateMany(
  { credit_score: { $gt: 750 } },
  { $set: { approval_status: "Approved" } }
);

// Delete old rejected
db.loans.deleteMany({
  application_date: { $lt: new Date("2023-01-01") },
  approval_status: "Rejected"
});

// Avg loan per type
db.loans.aggregate([
  { $match: { approval_status: "Approved" } },
  { $group: { _id: "$loan_type", avg_loan: { $avg: "$loan_amount" } } }
]);
