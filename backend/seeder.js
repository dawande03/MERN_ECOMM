const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require("./config/db");
const users = require("./data/users");
const products = require('./data/product');
const User = require("./modals/userModel");
const Product = require("./modals/productModel");
const Order = require("./modals/orderModel");

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()
    const createUser = await User.insertMany(users)
    const adminUser = createUser[0]._id
    const sampleData = products.map(product => {
      return { ...product, user: adminUser }
    })
    await Product.insertMany(sampleData)
    console.log("Data imported");
    process.exit()
  } catch (error) {
    console.log(`${error}`)
    process.exit(1)
  }
};

const dataDestroy = async () => {
  try{
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()
    console.log("Data Destroy Successful");
  }catch (error){
    console.log(`${error}`)
    process.exit(1)
  }
}

if(process.argv[2] === "-d"){
  dataDestroy()
}else{
  importData()
}






// const mongoose = require("mongoose");
// const dotenv = require('dotenv')
// const users = require("./data/users");
// const User = require("./modals/userModel");
// const Product = require("./modals/productModel");
// const Order = require("./modals/orderModel");
// const products = require("./data/product");
// const connectDB = require("./config/db");

// dotenv.config();
// connectDB();

// const importData = async () => {
//   try {
//     await Order.deleteMany();
//     await Product.deleteMany();
//     await User.deleteMany();
//     const createUser = await User.insertMany(users);
//     const adminUser = createUser[0]._id;
//     const sampleData = products.map((product) => {
//       return { ...product, user: adminUser };
//     });
//     await Product.insertMany(sampleData);
//     console.log("Data Imported!!");
//     process.exit();
//   } catch (error) {
//     console.log(`${error}`);
//     process.exit(1);
//   }
// };

// const dataDestory = async () => {
//   try {
//     await Order.deleteMany();
//     await Product.deleteMany();
//     await User.deleteMany();
//     console.log("Data Destory".green.inverse);
//     process.exit();
//   } catch (error) {
//     console.log(`${error}`.red.inverse);
//     process.exit(1);
//   }
// };

// if (process.argv[2] === "-d") {
//   dataDestory();
// } else {
//   importData();
// }
