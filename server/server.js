const express = require("express");
const app = express();
const cors = require("cors");

const path = require("path");
const PORT = 3000;

require('dotenv').config()
// Routes
const router = require("./routes/router");
// DB
const connectDB = require("./config/DB");
connectDB();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
// views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
  res.send("API is Working...");
});

// api routes
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
