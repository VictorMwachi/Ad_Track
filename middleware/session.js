const session = require('express-session')
require('dotenv').config();
//session 
const sessionMiddleware = session({
    key:'user_sid',
    secret:process.env.SECRET_KEY,
    resave:false,
    saveUninitialized:false,
    cookie:{
        secure: false,
        maxAge: 5 * 60 * 1000
    }
})



module.exports = sessionMiddleware