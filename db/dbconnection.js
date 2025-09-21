const mongoose = require('mongoose');

const mongo_url = process.env.MONGO_URL

const connectDB = async ()=>{
    try{
        await mongoose.connect(mongo_url);
        console.log("Database connected Successfully");
    }catch(error){
        console.log(`DB error: ${error}`);
    }
}

module.exports = connectDB;