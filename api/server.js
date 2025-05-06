// server.js
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');

// CORS configuration
const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true,
};

dotenv.config();

app.use(cors());
app.use(express.json());
// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', require('./routes/auth'));  // Mount the signup route
app.use('/api', require('./routes/comments'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
