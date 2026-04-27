
const express = require("express");
const cors = require("cors"); 
require('dotenv').config();
const connectDB = require("./db");
connectDB();

const productRoutes = require("./src/routes/productRoutes");

const app = express();

// Enable CORS
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// Middleware
app.use(express.json());

app.use("/", productRoutes);

// Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});