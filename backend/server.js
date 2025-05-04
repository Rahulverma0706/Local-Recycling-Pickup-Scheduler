const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const cors = require('cors');

// Update CORS to allow requests from Vercel frontend
const corsOptions = {
  origin: "https://local-recycling-pickup-scheduler-vfl2.vercel.app/", // Replace with your Vercel frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


// Define model
const Pickup = mongoose.model("Pickup", {
  name: String,
  address: String,
  type: String,
  date: String,
  time: String,
  status: { type: String, default: "Scheduled" },
});

// Routes
app.post("/schedule", async (req, res) => {
  try {
    const data = new Pickup(req.body);
    const savedPickup = await data.save();
    res.status(201).json(savedPickup); 
  } catch (err) {
    res.status(500).json({ error: "Failed to schedule pickup" });
  }
});

app.get("/pickups", async (req, res) => {
  const pickups = await Pickup.find();
  res.send(pickups);
});

app.listen(5000, () => console.log("Server running on port 5000"));
