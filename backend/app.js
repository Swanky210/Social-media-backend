import express from "express";
import mongoose from 'mongoose';
import  router  from "./routes/user-routes";
import blogRouter from "./models/blog-routes";
const app = express();
app.use(express.json());
app.use("/api/user",router);
app.use("/api/Blog",blogRouter);
mongoose.connect("mongodb+srv://admin:mSuWPznXWodGOVT6@cluster0.rzlkvqd.mongodb.net/blog?retryWrites=true&w=majority"
)
.then(()=>{
    app.listen(5000);
})
.then(()=>{
    console.log("connected to database of port 5000");
})
.catch((err)=> console.log("error"));


