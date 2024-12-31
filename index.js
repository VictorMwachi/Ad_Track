const express = require("express");
const app = express();


const PORT = process.env.PORT || 3500;

app.get("/",(req,res)=>{
    res.send("APP RUnning");
})


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
});