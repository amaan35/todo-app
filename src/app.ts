import mongoose from "mongoose";
import express, { Express } from "express";
import cors from "cors";
import todoRoutes from "./routes/index";

const app: Express = express();
const PORT: number = 3001;

app.use(express.json());
app.use(cors());
app.use(todoRoutes);

mongoose.connect(
  `mongodb+srv://amaan:${process.env.MONGO_PASSWORD}@todocluster.dxhs107.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority&appName=todoCluster`
).then(()=>{
    console.log("MongoDB is connected")
}).catch((err)=>{
    console.log(err);
});

app.get("/", (req, res)=>{
    res.send("Server working successfully")
})

app.listen(PORT, ()=>{
    console.log(`Server running on port : ${PORT}`)
})
