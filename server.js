const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3500;
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname,'public')))
//app.use(express.static(path.join(__dirname,'views')))

app.use('/',require('./routes/root.js'));
app.use('/admin',require('./routes/root.js'));
app.use('/auth',require('./routes/authAdmin.js'));


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
});