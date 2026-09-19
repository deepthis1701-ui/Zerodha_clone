require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const authRoutes = require("./routes/auth");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

// ===============================
// HOME / TEST ROUTE
// ===============================

app.get("/", (req, res) => {
  res.send("Backend is working!");
});

// ===============================
// ADD HOLDINGS TO MONGODB
// ===============================

app.get("/addHoldings", async (req, res) => {
  const tempHoldings = [
    {
      name: "BHARTIARTL",
      qty: 2,
      avg: 538.05,
      price: 541.15,
      net: "+0.58%",
      day: "+2.99%",
    },
    {
      name: "HDFCBANK",
      qty: 2,
      avg: 1383.4,
      price: 1522.35,
      net: "+10.04%",
      day: "+0.11%",
    },
    {
      name: "HINDUNILVR",
      qty: 1,
      avg: 2335.85,
      price: 2417.4,
      net: "+3.49%",
      day: "+0.21%",
    },
    {
      name: "INFY",
      qty: 1,
      avg: 1350.5,
      price: 1555.45,
      net: "+15.18%",
      day: "-1.60%",
      isLoss: true,
    },
    {
      name: "ITC",
      qty: 5,
      avg: 202.0,
      price: 207.9,
      net: "+2.92%",
      day: "+0.80%",
    },
    {
      name: "KPITTECH",
      qty: 5,
      avg: 250.3,
      price: 266.45,
      net: "+6.45%",
      day: "+3.54%",
    },
    {
      name: "M&M",
      qty: 2,
      avg: 809.9,
      price: 779.8,
      net: "-3.72%",
      day: "-0.01%",
      isLoss: true,
    },
    {
      name: "RELIANCE",
      qty: 1,
      avg: 2193.7,
      price: 2112.4,
      net: "-3.71%",
      day: "+1.44%",
    },
    {
      name: "SBIN",
      qty: 4,
      avg: 324.35,
      price: 430.2,
      net: "+32.63%",
      day: "-0.34%",
      isLoss: true,
    },
    {
      name: "SGBMAY29",
      qty: 2,
      avg: 4727.0,
      price: 4719.0,
      net: "-0.17%",
      day: "+0.15%",
    },
    {
      name: "TATAPOWER",
      qty: 5,
      avg: 104.2,
      price: 124.15,
      net: "+19.15%",
      day: "-0.24%",
      isLoss: true,
    },
    {
      name: "TCS",
      qty: 1,
      avg: 3041.7,
      price: 3194.8,
      net: "+5.03%",
      day: "-0.25%",
      isLoss: true,
    },
    {
      name: "WIPRO",
      qty: 4,
      avg: 489.3,
      price: 577.75,
      net: "+18.08%",
      day: "+0.32%",
    },
  ];

  try {
    const savedHoldings = await HoldingsModel.insertMany(tempHoldings);

    console.log(`${savedHoldings.length} holdings saved`);

    res.send(`${savedHoldings.length} holdings stored successfully!`);
  } catch (error) {
    console.error("Error saving holdings:", error);

    res.status(500).json({
      error: error.message,
    });
  }
});

// ===============================
// GET ALL HOLDINGS
// ===============================

app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});

    res.json(allHoldings);
  } catch (error) {
    console.error("Error getting holdings:", error);

    res.status(500).json({
      error: error.message,
    });
  }
});

// ===============================
// ADD POSITIONS TO MONGODB
// ===============================

app.get("/addPositions", async (req, res) => {
  const tempPositions = [
    {
      product: "CNC",
      name: "EVEREADY",
      qty: 2,
      avg: 316.27,
      price: 312.35,
      net: "+0.58%",
      day: "-1.24%",
      isLoss: true,
    },
    {
      product: "CNC",
      name: "JUBLFOOD",
      qty: 1,
      avg: 3124.75,
      price: 3082.65,
      net: "+10.04%",
      day: "-1.35%",
      isLoss: true,
    },
  ];

  try {
    const savedPositions =
      await PositionsModel.insertMany(tempPositions);

    console.log(`${savedPositions.length} positions saved`);

    res.send(`${savedPositions.length} positions stored successfully!`);
  } catch (error) {
    console.error("Error saving positions:", error);

    res.status(500).json({
      error: error.message,
    });
  }
});

// ===============================
// GET ALL POSITIONS
// ===============================

app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});

    res.json(allPositions);
  } catch (error) {
    console.error("Error getting positions:", error);

    res.status(500).json({
      error: error.message,
    });
  }
});

// ===============================
// ADD NEW ORDER
// ===============================

app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    const savedOrder = await newOrder.save();

    res.status(201).json(savedOrder);
  } catch (error) {
    console.error("Error saving order:", error);

    res.status(500).json({
      error: error.message,
    });
  }
});

// ===============================
// MONGODB CONNECTION
// ===============================

mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB connected successfully!");

    app.listen(PORT, () => {
      console.log(`App started on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:");
    console.error(error.message);
  });