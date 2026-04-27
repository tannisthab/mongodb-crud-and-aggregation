// Problem 1: Coffee Shop Menu System

// 1. Create collection & insert one document
db.menu.insertOne({
  item_id: 1,
  name: "Cappuccino",
  category: "Coffee",
  price: 150,
  availability: true
});


// 2. Insert 5 menu items using insertMany()
db.menu.insertMany([
  {
    item_id: 2,
    name: "Latte",
    category: "Coffee",
    price: 180,
    availability: true
  },
  {
    item_id: 3,
    name: "Green Tea",
    category: "Tea",
    price: 120,
    availability: true
  },
  {
    item_id: 4,
    name: "Black Coffee",
    category: "Coffee",
    price: 100,
    availability: false
  },
  {
    item_id: 5,
    name: "Sandwich",
    category: "Snack",
    price: 200,
    availability: true
  },
  {
    item_id: 6,
    name: "Brownie",
    category: "Snack",
    price: 90,
    availability: false
  }
]);


// 3. Retrieve all items with availability = true
db.menu.find({
  availability: true
});


// 4. Display only name and price (Projection)
db.menu.find(
  { availability: true },
  { _id: 0, name: 1, price: 1 }
);


// 5. Delete a menu item based on item_id
db.menu.deleteOne({
  item_id: 6
});
