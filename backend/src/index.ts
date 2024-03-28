import express, {Request, Response} from "express"
import cors from "cors"
import "dotenv/config"
import mongoose from "mongoose"


//! MongoDB
mongoose.connect(process.env.MONGO_CONNECTION_STRING as string).then(()=> {
    console.log("MongoDB is Connected")
})



const app = express()
app.use(express.json())
app.use(cors())

//! API's 
app.get("/test", async (req: Request, res: Response)=> {
    res.json({message: "Hello Bhavnish"});
})




app.listen(5000, ()=> {
    console.log("Server started on localhost: 5000")
})  