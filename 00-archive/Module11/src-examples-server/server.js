// Import the necessary dependencies
const express = require('express');
const mongoose = require('mongoose');

// Create an instance of Express
const app = express();

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://todouser:<Password>@todocluster.es1pfmr.mongodb.net/todo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the Todo schema
const todoSchema = new mongoose.Schema({
  title: String,
  todoIndex: Number,
  complete: Boolean,
});

// Create the Todo model
const Todo = mongoose.model('Todo', todoSchema);

// Configure the middleware to parse JSON
app.use(express.json());

// Add CORS middleware to allow traffic from all domains
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

// Define the routes
app.get('/todos', async (req, res) => {
  try {
    // Fetch all todos from the database
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/todos/:todoIndex', async (req, res) => {
  try {
    const { todoIndex } = req.params;

    // Fetch a specific todo by its todoIndex
    const todo = await Todo.findOne({ todoIndex });
    
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    
    res.json(todo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/todos', async (req, res) => {
  try {
    // Create a new todo
    const todo = await Todo.create(req.body);
    res.json(todo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.put('/todos/:todoIndex', async (req, res) => {
  try {
    const { todoIndex } = req.params;

    // Update a todo by its todoIndex
    const todo = await Todo.findOneAndUpdate({ todoIndex }, req.body, { new: true });
    res.json(todo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.delete('/todos/:todoIndex', async (req, res) => {
  try {
    const { todoIndex } = req.params;

    // Delete a todo by its todoIndex
    await Todo.findOneAndDelete({ todoIndex });
    res.json({ message: 'Todo deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});