const express = require("express");
const colors = require("colors")
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware")
const connectDB = require("./config/db");

connectDB();
const port = process.env.PORT || 5000;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// Error Handler
app.use(errorHandler);

app.listen(port, () => console.log(`listening on port: ${port}`));
