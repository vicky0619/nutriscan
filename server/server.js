const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db'); // Adjust path if necessary
const apiRoutes = require('./routes/api'); // Adjust path if necessary

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // To parse JSON request bodies

// Define Routes
app.use('/api', apiRoutes); // Mount all routes from api.js under the /api prefix

// Define Port
const PORT = process.env.PORT || 3000;

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
