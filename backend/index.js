import express from 'express';
import dotenv from "dotenv";
import connectDB from './config/database.js';
import userRoute from "./routes/userRoute.js";
import cookieParser from 'cookie-parser';
import messageRoute from "./routes/messageRoute.js";
import cors from "cors";
import { app, server } from './socket/socket.js';

dotenv.config({});

const PORT = process.env.PORT || 8080;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
const corsOption = {
  origin: 'http://localhost:3000',
  credentials: true,
}
app.use(cors(corsOption))

//routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/message", messageRoute);



app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello, World!' });
});

server.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
  });
