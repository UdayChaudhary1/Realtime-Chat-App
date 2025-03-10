import express from "express";
import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";
import "dotenv/config";
import cookieParser from "cookie-parser";
import messageRoutes from "./routes/message.route.js";
import cors from "cors";
import {app, server} from "./lib/socket.js";
import path from "path";

const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

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

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

server.listen(PORT, () => {
  console.log("App listening on port 3000!");
  connectDB();
});
