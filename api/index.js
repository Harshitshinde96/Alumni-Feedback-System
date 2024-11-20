import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import dbConnect from "../config/database.js";
import userModel from "../models/User.js";
import router from "../routes/FeedbackRoutes.js";

const app = express();

// dotenv.config({ path: "../.env" });
dotenv.config();

const PORT = 3000 || process.env.PORT;

//Middleware for parsing JSON requests
app.use(express.json());
  
//Mounting api routes
app.use("/api/v1", router);


app.get("/", (req, res)=>{
  res.json({
    success: true,
    message: "Server Running Successfully"
  })
})



dbConnect();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
