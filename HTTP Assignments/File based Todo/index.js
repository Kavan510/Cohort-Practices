const fs = require("fs"); // File System
const express = require("express");
const app = express(); // Instance of Express object

app.use(express.json()); // Middleware to parse JSON request bodies

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

const FILE = "todo.json"; // Path to the JSON file

// Helper function to read todos
function readTodo() {
  if (!fs.existsSync(FILE)) {
    return []; // If the file doesn't exist, return an empty array
  }
  const data = fs.readFileSync(FILE, "utf-8");
  return JSON.parse(data || "[]"); // Parse the JSON or return an empty array if file is empty
}

// Helper function to write todos
function writeTodo(tasks) {
  fs.writeFileSync(FILE, JSON.stringify(tasks, null, 2), "utf-8"); // Write tasks back to the file
}

// API to get all tasks
app.get("/", (req, res) => {
  const todos = readTodo();
  res.json(todos); // Send the JSON array of todos as a response
});

// API to add a task
app.post("/addTask/newTask", (req, res) => {
  const todos = readTodo(); // Read the existing todos
  const newTask = req.body.task; // Get the new task from the request body
  
  // ================ { i don't understand this either } ===========================

  if (!newTask) {
    return res.status(400).json({ error: "Task is required" }); // Validate input
  }
  todos.push(newTask.json()); // Add the new task
  writeTodo(todos); // Write the updated list back to the file
  res.json({ message: "Task added successfully", todos });
});

// API to delete a task by index
app.delete("/deleteTask/:ind", (req, res) => {
  const todos = readTodo(); // Read the existing todos
  const ind = parseInt(req.params.ind, 10); // Get the index from the request parameters
//==========  { i don't understand this how to extrract or pass index via path } ========================


  if (isNaN(ind) || ind < 0 || ind >= todos.length) {
    return res.status(400).json({ error: "Invalid index" }); // Validate index
  }

  todos.splice(ind, 1); // Remove the task at the given index
  writeTodo(todos); // Write the updated list back to the file
  res.json({ message: "Task deleted successfully", todos });
});
