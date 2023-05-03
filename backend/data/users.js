const bcrypt = require('bcryptjs')
const users = [
    {
        name:"admin",email:"sdawande.367@gmail.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin:true
    },
    {
        name:"Shubham",
        email:"xyz@gmail.com",
        password: bcrypt.hashSync("123456", 10),
    },
    {
        name:"user",
        email:"user@gmail.com",
        password: bcrypt.hashSync("123456", 10),
    },
    {
        name:"Adit",
        email:"Adit@gmail.com",
        password: bcrypt.hashSync("123456", 10),
    }
];

module.exports = users;