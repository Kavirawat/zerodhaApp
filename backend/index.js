require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { UserModel } = require("./model/UserModel");

const app = express();
const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;
const JWT_SECRET = process.env.JWT_SECRET || "zerodha_secure_jwt_secret_key_2026";

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "http://127.0.0.1:3000",
  "http://127.0.0.1:3001",
  process.env.FRONTEND_URL,
  process.env.DASHBOARD_URL,
].filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      
      if (!origin) return callback(null, true);
      
      if (allowedOrigins.indexOf(origin) !== -1 || allowedOrigins.includes("*")) {
        return callback(null, true);
      }
      
      if (
        origin.endsWith(".vercel.app") ||
        origin.endsWith(".onrender.com") ||
        origin.endsWith(".netlify.app")
      ) {
        return callback(null, true);
      }
      
      return callback(null, true);
    },
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ success: false, message: "Access token missing" });
  }

  jwt.verify(token, JWT_SECRET, (err, decodedUser) => {
    if (err) {
      return res.status(403).json({ success: false, message: "Invalid or expired token" });
    }
    req.user = decodedUser;
    next();
  });
};

app.get("/", (req, res) => {
  res.json({
    status: "Zerodha API Server is up and running",
    endpoints: [
      "GET /allHoldings",
      "GET /allPositions",
      "GET /allOrders",
      "POST /newOrder",
      "POST /signup",
      "POST /login",
      "GET /user (protected)",
    ],
  });
});

app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Username, email, and password are required.",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters long.",
      });
    }

    const existingUser = await UserModel.findOne({
      $or: [{ email: email.toLowerCase().trim() }, { username: username.trim() }],
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: existingUser.email === email.toLowerCase().trim()
          ? "An account with this email already exists."
          : "This username is already taken.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      username: username.trim(),
      email: email.toLowerCase().trim(),
      password: hashedPassword,
    });

    await newUser.save();

    const token = jwt.sign(
      { id: newUser._id, username: newUser.username, email: newUser.email },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(201).json({
      success: true,
      message: "Signup successful!",
      token,
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ success: false, message: "Internal server error during signup" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }

    const normalizedInput = email.toLowerCase().trim();
    const user = await UserModel.findOne({
      $or: [
        { email: normalizedInput },
        { username: email.trim() },
      ],
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid email/username or password.",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid email/username or password.",
      });
    }

    const token = jwt.sign(
      { id: user._id, username: user.username, email: user.email },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      success: true,
      message: "Login successful!",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ success: false, message: "Internal server error during login" });
  }
});

app.get("/user", authenticateToken, async (req, res) => {
  try {
    const user = await UserModel.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    res.json({ success: true, user });
  } catch (error) {
    console.error("Get user error:", error);
    res.status(500).json({ success: false, message: "Error fetching user profile" });
  }
});

app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find();
    res.json(allHoldings);
  } catch (error) {
    console.error("Error fetching holdings:", error);
    res.status(500).json({ success: false, message: "Error fetching holdings" });
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find();
    res.json(allPositions);
  } catch (error) {
    console.error("Error fetching positions:", error);
    res.status(500).json({ success: false, message: "Error fetching positions" });
  }
});

app.get("/allOrders", async (req, res) => {
  try {
    const allOrders = await OrdersModel.find().sort({ createdAt: -1, _id: -1 });
    res.json(allOrders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ success: false, message: "Error fetching orders" });
  }
});

const https = require("https");
let marketCache = {
  data: null,
  lastUpdated: 0,
};

async function fetchLiveMarketData() {
  const now = Date.now();
  if (marketCache.data && now - marketCache.lastUpdated < 30000) {
    return marketCache.data;
  }

  const symbols = [
    { name: "NIFTY 50", symbol: "^NSEI", type: "Index" },
    { name: "SENSEX", symbol: "^BSESN", type: "Index" },
    { name: "NIFTY BANK", symbol: "^NSEBANK", type: "Index" },
    { name: "RELIANCE", symbol: "RELIANCE.NS", type: "Energy" },
    { name: "TCS", symbol: "TCS.NS", type: "IT" },
    { name: "HDFC BANK", symbol: "HDFCBANK.NS", type: "Banking" },
    { name: "INFOSYS", symbol: "INFY.NS", type: "IT" },
    { name: "ICICI BANK", symbol: "ICICIBANK.NS", type: "Banking" },
    { name: "TATA MOTORS", symbol: "TATAMOTORS.NS", type: "Automobile" },
    { name: "ITC", symbol: "ITC.NS", type: "FMCG" },
    { name: "SBIN", symbol: "SBIN.NS", type: "Banking" },
    { name: "BHARTI AIRTEL", symbol: "BHARTIARTL.NS", type: "Telecom" },
    { name: "WIPRO", symbol: "WIPRO.NS", type: "IT" },
  ];

  const fetchQuote = (item) => {
    return new Promise((resolve) => {
      const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(item.symbol)}?interval=1d`;
      https.get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
        let raw = "";
        res.on("data", (chunk) => (raw += chunk));
        res.on("end", () => {
          try {
            const json = JSON.parse(raw);
            const meta = json.chart.result[0].meta;
            const price = Number((meta.regularMarketPrice || 0).toFixed(2));
            const prev = Number((meta.chartPreviousClose || price).toFixed(2));
            const change = Number((price - prev).toFixed(2));
            const changePercent = Number((((price - prev) / prev) * 100).toFixed(2));
            resolve({
              name: item.name,
              symbol: item.symbol,
              category: item.type,
              price,
              change,
              changePercent,
              isLoss: change < 0,
              high: Number((meta.regularMarketDayHigh || price).toFixed(2)),
              low: Number((meta.regularMarketDayLow || price).toFixed(2)),
            });
          } catch (e) {
            resolve(null);
          }
        });
      }).on("error", () => resolve(null));
    });
  };

  const results = await Promise.all(symbols.map(fetchQuote));
  const valid = results.filter(Boolean);

  if (valid.length > 0) {
    marketCache = {
      data: {
        timestamp: new Date().toISOString(),
        items: valid,
      },
      lastUpdated: now,
    };
    return marketCache.data;
  }

  return marketCache.data || { timestamp: new Date().toISOString(), items: [] };
}

app.get("/liveMarket", async (req, res) => {
  try {
    const data = await fetchLiveMarketData();
    res.json(data);
  } catch (err) {
    console.error("Live market error:", err);
    res.status(500).json({ success: false, message: "Error fetching live market" });
  }
});

app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    if (!name || !qty || price === undefined || !mode) {
      return res.status(400).json({
        success: false,
        message: "Missing required order fields (name, qty, price, mode)",
      });
    }

    const newOrder = new OrdersModel({
      name,
      qty: Number(qty),
      price: Number(price),
      mode,
    });

    await newOrder.save();
    res.status(201).json({
      success: true,
      message: "Order placed successfully!",
      order: newOrder,
    });
  } catch (err) {
    console.error("Order save error:", err);
    res.status(500).json({ success: false, message: "Error saving order" });
  }
});

app.get("/seedData", async (req, res) => {
  try {
    const count = await HoldingsModel.countDocuments();
    if (count > 0) {
      return res.json({ message: "Data already seeded", count });
    }

    const sampleHoldings = [
      { name: "BHARTIARTL", qty: 2, avg: 538.05, price: 541.15, net: "+0.58%", day: "+2.99%" },
      { name: "HDFCBANK", qty: 2, avg: 1383.4, price: 1522.35, net: "+10.04%", day: "+0.11%" },
      { name: "HINDUNILVR", qty: 1, avg: 2335.85, price: 2417.4, net: "+3.49%", day: "+0.21%" },
      { name: "INFY", qty: 1, avg: 1350.5, price: 1555.45, net: "+15.18%", day: "-1.60%", isLoss: true },
      { name: "ITC", qty: 5, avg: 202.0, price: 207.9, net: "+2.92%", day: "+0.80%" },
      { name: "KPITTECH", qty: 5, avg: 250.3, price: 266.45, net: "+6.45%", day: "+3.54%" },
      { name: "M&M", qty: 2, avg: 809.9, price: 779.8, net: "-3.72%", day: "-0.01%", isLoss: true },
      { name: "RELIANCE", qty: 1, avg: 2193.7, price: 2112.4, net: "-3.71%", day: "+1.44%" },
      { name: "SBIN", qty: 4, avg: 324.35, price: 430.2, net: "+32.63%", day: "-0.34%", isLoss: true },
      { name: "SGBMAY29", qty: 2, avg: 4727.0, price: 4719.0, net: "-0.17%", day: "+0.15%" },
      { name: "TATAPOWER", qty: 5, avg: 104.2, price: 124.15, net: "+19.15%", day: "-0.24%", isLoss: true },
      { name: "TCS", qty: 1, avg: 3041.7, price: 3194.8, net: "+5.03%", day: "-0.25%", isLoss: true },
      { name: "WIPRO", qty: 4, avg: 489.3, price: 577.75, net: "+18.08%", day: "+0.32%" },
    ];
    await HoldingsModel.insertMany(sampleHoldings);

    const samplePositions = [
      { product: "CNC", name: "EVEREADY", qty: 2, avg: 316.27, price: 312.35, net: "+0.58%", day: "-1.24%", isLoss: true },
      { product: "CNC", name: "JUBLFOOD", qty: 1, avg: 3124.75, price: 3082.65, net: "+10.04%", day: "-1.35%", isLoss: true },
    ];
    await PositionsModel.insertMany(samplePositions);

    res.json({ message: "Seed data inserted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, async () => {
  console.log(`Zerodha backend server running on port ${PORT}!`);
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB successfully!");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
  }
});
