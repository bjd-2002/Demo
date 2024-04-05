// require('dotenv').config({path: '../env'})
import dotenv from "dotenv";
import connecDB from "./db/index.js";

dotenv.config({
    path: './env',
})

connecDB();