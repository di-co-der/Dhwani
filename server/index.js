const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userRoutes")
const patientRouter = require("./routes/patientRoutes")
const app = express();

require("dotenv").config();

// Connect to Database
require("./db/connect");

app.use(cors());
app.use(express.json());

app.use("/api/user",userRouter);
app.use("/api/patient",patientRouter);


app.get("/",(req,res)=>{
    res.send("Hello");
})
app.listen(4000,()=>{
    console.log("Server connected");
})