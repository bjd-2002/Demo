// require('dotenv').config({path: '../env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env',
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 4000, () => {
        console.log(`Server is running at port ${process.env.PORT}`);
    })
})
.catch((e)=>{
    console.log("Mongo db connection failed ", e, "\n Port is ", process.env.PORT);
})