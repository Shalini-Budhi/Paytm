import mongoose from 'mongoose'

const connectDB = async()=>{
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("mongodb connection success");
    
  } catch (error) {
    console.log("MongoDb Connection Error: " , error)
    process.exit(1)
    
  }   
}

export default connectDB