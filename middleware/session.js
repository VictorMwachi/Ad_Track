require('dotenv').config();
const secretKey = process.env.SECRET_KEY;
const session = require('express-session');
session({
    key:'user_sid',
    secret:secretKey,
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires:300
    }
})

module.exports = session