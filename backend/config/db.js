const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();
const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb://0.0.0.0:27017/shopping", {
            useUnifiedTopology: true,useNewUrlParser: true
        })
        console.log(`MongoDB Connected ${conn.connection.host}`);
    } catch (err) {
        console.log(`error:${err.message}`);
        process.exit(1);
    }
}
module.exports = connectDB;
