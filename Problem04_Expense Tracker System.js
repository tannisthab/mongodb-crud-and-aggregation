// Problem 4: Expense Tracker System

// 1. Create collection & insert one expense document
db.expenses.insertOne({
  expense_id: 1,
  category: "Food",
  amount: 250,
  date: new Date("2026-04-25"),
  payment_method: "UPI",
  note: "Lunch"
});


// 2. Insert at least 5 expense records using insertMany()
db.expenses.insertMany([
  {
    expense_id: 2,
    category: "Transport",
    amount: 600,
    date: new Date("2026-04-24"),
    payment_method: "Cash",
    note: "Cab fare"
  },
  {
    expense_id: 3,
    category: "Entertainment",
    amount: 800,
    date: new Date("2026-04-23"),
    payment_method: "Card",
    note: "Movie"
  },
  {
    expense_id: 4,
    category: "Bills",
    amount: 1200,
    date: new Date("2026-04-22"),
    payment_method: "UPI",
    note: "Electricity bill"
  },
  {
    expense_id: 5,
    category: "Food",
    amount: 450,
    date: new Date("2026-04-21"),
    payment_method: "Cash",
    note: "Dinner"
  },
  {
    expense_id: 6,
    category: "Transport",
    amount: 300,
    date: new Date("2026-04-20"),
    payment_method: "UPI",
    note: "Bus ticket"
  }
]);


// 3. Retrieve all expenses with amount > 500
db.expenses.find({
  amount: { $gt: 500 }
});


// 4. Display only category, amount, and date (Projection)
db.expenses.find(
  {},
  { _id: 0, category: 1, amount: 1, date: 1 }
);


// 5. Delete an expense based on expense_id
db.expenses.deleteOne({
  expense_id: 6
});
