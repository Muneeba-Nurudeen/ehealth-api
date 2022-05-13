const express = require("express")
const morgan = require("morgan")
require ("dotenv").config()
const connectDB = require("./config/connectDB")
const adminRoute = require("./routes/adminRoute")
const personnelRoute = require("./routes/personnelRoute")
const userRoute = require("./routes/userRoute")

const app = express()

connectDB();

//Middlewares
app.use(express.json())
app.use(morgan("dev"))
app.use("/api/admins", adminRoute)
app.use("/api/personnel", personnelRoute)
app.use("/api/users", userRoute)

const PORT = process.env.PORT||7070
//home route
app.get("/", (req, res)=>{
    res.json("Welcome To The Ehealth API")
})
app.listen(PORT, (req, res)=>{
    console.log("server is UP!!! ")
})