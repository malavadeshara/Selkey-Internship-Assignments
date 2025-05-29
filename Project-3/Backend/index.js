// Load env vars
import express from 'express';
import dotenv from 'dotenv';
import connectDataBase from './config/db.js';
import contactRoute from './routes/contactRoute.js';
import cors from 'cors'

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// Database connection
connectDataBase();

// Routes
app.use('/', contactRoute);

// Test route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});