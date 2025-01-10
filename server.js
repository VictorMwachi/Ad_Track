const express = require('express');
const path = require('path');
const session = require('express-session')
const cookieParser = require('cookie-parser');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3500;

//middle ware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

//session
app.use(session({
    key:'user_sid',
    secret:process.env.SECRET_KEY,
    resave:false,
    saveUninitialized:false,
    cookie:{
        secure: false,
        maxAge: 5 * 60 * 1000
    }
}))

app.locals.login = false;

app.use(express.static(path.join(__dirname,'public')))
//app.use(express.static(path.join(__dirname,'views')))

app.use('/',require('./routes/root.js'));
app.use('/admin',require('./routes/root.js'));
app.use('/auth',require('./routes/authAdmin.js'));


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
});