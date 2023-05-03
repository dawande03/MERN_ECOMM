const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const product = require('./data/product');
const cors = require('cors');
const bodyParser = require('body-parser');
const productRoute = require('./routes/productsRoute');
const {errorHandler} = require("./middlewares/errorMiddleware");
const usersRoutes = require('./routes/UsersRoute');
dotenv.config();
const app = express() 
//connecting to mongoDB
connectDB()

// Middlewares
app.use(cors())
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// ROUTERS
app.use("/api/v1",productRoute);
app.use("/api/v1/users",usersRoutes);
app.use(errorHandler);

const port = process.env.PORT

app.listen(port,()=>{
    console.log(`server Running on port : ${port}`);
})