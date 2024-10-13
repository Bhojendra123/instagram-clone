import mongoose from "mongoose";

const mongoDB = async  () => {
 try{
   await mongoose.connect(process.env.MONGOURL)
   console.log("MongoDB Connected")
 }
   catch(error){
    console.log(error)
   }
 
}
export default mongoDB;