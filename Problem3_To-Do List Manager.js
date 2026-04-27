// Problem 3: To-Do List Manager

// 1. Create collection & insert one task document
db.tasks.insertOne({
  task_id: 1,
  title: "Complete MongoDB Assignment",
  description: "Finish all problem statements",
  due_date: new Date("2026-05-01"),
  priority: "High",
  is_completed: false
});


// 2. Insert at least 5 task records using insertMany()
db.tasks.insertMany([
  {
    task_id: 2,
    title: "Study Python",
    description: "Practice functions",
    due_date: new Date("2026-05-03"),
    priority: "Medium",
    is_completed: false
  },
  {
    task_id: 3,
    title: "Buy groceries",
    description: "Milk, Bread, Eggs",
    due_date: new Date("2026-04-28"),
    priority: "Low",
    is_completed: true
  },
  {
    task_id: 4,
    title: "Workout",
    description: "Gym session",
    due_date: new Date("2026-04-29"),
    priority: "High",
    is_completed: false
  },
  {
    task_id: 5,
    title: "Read book",
    description: "Self-development book",
    due_date: new Date("2026-05-05"),
    priority: "Medium",
    is_completed: false
  },
  {
    task_id: 6,
    title: "Call friend",
    description: "Catch up call",
    due_date: new Date("2026-04-30"),
    priority: "Low",
    is_completed: true
  }
]);


// 3. Retrieve all tasks where is_completed is false
db.tasks.find({
  is_completed: false
});


// 4. Display only title and due_date (Projection)
db.tasks.find(
  {},
  { _id: 0, title: 1, due_date: 1 }
);


// 5. Delete a task based on task_id
db.tasks.deleteOne({
  task_id: 6
});
