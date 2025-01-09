require('dotenv').config();
const session = require('express-session');
session({
    key:'user_sid',
    secret:process.env.SECRET_KEY,
    resave:false,
    saveUninitialized:false,
    cookie:{
        secure: process.env.NODE_ENV === 'production',
        maxAge:5 * 60
    }
})

module.exports = session