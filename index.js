// Server entering
const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

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
app.listen(PORT, ()=>{
    console.log(`Servesndn listening to port: http://localhost:${PORT}`);
})