import express from "express";
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";
import "dotenv/config";
import cookieParser from "cookie-parser";
import messageRoutes from "./routes/message.route.js";
import cors from "cors";
import {app, server} from "./lib/socket.js";

const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: "1mb" }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

server.listen(PORT, () => {
  console.log("App listening on port 3000!");
  connectDB();
});
