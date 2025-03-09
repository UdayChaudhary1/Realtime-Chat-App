import express from "express";
import authRoutes from "./routes/auth.js";

const app = express();

app.use("/api/auth", authRoutes);

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});