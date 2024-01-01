import mongoose from "mongoose";

export const connection = () =>{
    mongoose.set("strictQuery",true);
    mongoose.connect("mongodb://localhost:27017/route")
    .then(()=>{
        console.log("Connected to Mongo DB successfully");
    })
    .catch((err)=>{
        console.log("Error Connecting to Mongo DB");
    });
}