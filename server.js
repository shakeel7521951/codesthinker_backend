import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";
const PORT = process.env.PORT || 4000;

import userRoute from "./routes/userRoutes.js";
import reviewRoute from "./routes/reviewRoutes.js";

app.use(cors({ origin: process.env.FRONT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Backend is running...");
});

mongoose
  .connect(process.env.MOGODB_URL)
  .then(() => {
    console.log("Database is connected...");
  })
  .catch((error) => {
    console.log("Error in connecting database...",error);
  });

app.use("/api/v1", userRoute);
app.use("/api/v1", reviewRoute);

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
