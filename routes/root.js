const router = require('express').Router()
const path = require('path')

router.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','index.html'));
    res.statusCode = 200;
})

router.get('/admin', (req,res,next)=>{
    if (req.session.user && req.sessionID){
        next();
    }
    else{
        res.redirect('/login');
    }
}, (req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','admin.html'));
})

router.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','login.html'));
})
router.get('/landing', (req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','landing.html'));
})
router.post('/capture',(req,res)=>{
    console.log(req.body.gclid)
})
router.get('/adsite',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','adsite.html'));
})
module.exports = router