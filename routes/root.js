const router = require('express').Router()
const path = require('path')

router.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','index.html'));
    res.statusCode = 200;
})

router.get('/admin', (req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','admin.html'));
    res.statusCode = 200;
})

router.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','login.html'));
    res.statusCode = 200;
})
module.exports = router