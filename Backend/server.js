import { } from "dotenv/config";
// import  {configDotenv}  from "dotenv";
// configDotenv()

import app from "./src/app.js"
import connectDB from "./src/config/config.js";

connectDB()



app.listen(process.env.PORT, ()=>{
  console.log("Server started check now");
})