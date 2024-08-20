import express from 'express';
import dotenv from "dotenv";
import connectDB from './config/database.js';
import userRoute from "./routes/userRoute.js";
import cookieParser from 'cookie-parser';

dotenv.config({});

const app = express();
const PORT = process.env.PORT || 8080;

//middleware
app.use(express.json());
app.use(cookieParser());

//routes
app.use("/api/v1/user", userRoute);



app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello, World!' });
});

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
  });
