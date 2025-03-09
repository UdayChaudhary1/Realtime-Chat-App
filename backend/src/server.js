import express from "express";
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";
import "dotenv/config";
import cookieParser from "cookie-parser";
import messageRoutes from "./routes/message.route.js";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes)

app.listen(3000, () => {
  console.log("App listening on port 3000!");
  connectDB();
});