import express from "express";
import mongoose from "mongoose";
import noteRoutes from "./routes/noteRoutes.js";
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const port = 3000;
app.use(express.json());

app.use('/api/notes',noteRoutes)

app.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`);
});

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected to database")
});