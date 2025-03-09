import express from "express";
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";
import "dotenv/config";

const app = express();

app.use("/api/auth", authRoutes);

app.listen(3000, () => {
  console.log("App listening on port 3000!");
  connectDB();
});