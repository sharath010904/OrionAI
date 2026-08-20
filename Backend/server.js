/*
import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import chatRoutes from "./routes/chat.js";

const app = express();
const PORT = 8080;


app.use(express.json()); // 1
app.use(cors()); //2 this Two lines will help us when we add frontend with backend 

app.use("/api", chatRoutes); 


app.listen(PORT, () => {
    console.log(`server running on ${PORT} `);
    connectDB();
});

const connectDB =  async() => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("connected with Database!");
    }catch(err){
        console.log("Failed to connect with Database!" , err);
    }
}

*/

import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import chatRoutes from "./routes/chat.js";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.use("/api", chatRoutes);

app.listen(PORT, "0.0.0.0", () => {
    console.log(`server running on ${PORT}`);
    connectDB();
});

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("connected with Database!");
    } catch (err) {
        console.log("Failed to connect with Database!", err);
    }
};