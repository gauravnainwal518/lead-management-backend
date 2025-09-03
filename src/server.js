const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");  
const leadRoutes = require("./routes/leadRoutes");  

dotenv.config();
const app = express();

// Connect to MongoDB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/leads", leadRoutes); 

// Basic test route
app.get("/", (req, res) => {
  res.send("Lead Management API is running");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on Port ${PORT}`));
