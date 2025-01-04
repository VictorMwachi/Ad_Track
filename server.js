const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3500;

app.use(express.static(path.join(__dirname,'public')))
//app.use(express.static(path.join(__dirname,'views')))

app.use('/',require('./routes/root.js'));
app.get("/admin",require('./routes/root.js'));


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
});