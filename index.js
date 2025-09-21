require("dotenv").config();

// Server entering
const express = require("express");
const connectDB = require("./db/dbconnection");


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Simple route (First route)
app.get('/', (req, res)=>{
    res.send("Home Page");
    console.log("Home Page");
})

// Start Server
connectDB()
.then(async()=>{
    app.listen(PORT, ()=>{
        console.log(`Server listening to port: http://localhost:${PORT}`);
    })
}).catch((error)=>{
    console.log(`Error: ${error}`); 
})