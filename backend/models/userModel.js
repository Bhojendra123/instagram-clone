import mongoose from "mongoose";

const user = new mongoose.Schema({
    user:{
        type:String,
        require:true,
        unique:true
    }
})