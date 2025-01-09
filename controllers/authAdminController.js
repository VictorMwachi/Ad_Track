const { AdminUser } = require('../models');
const bcrypt = require('bcryptjs')
const handleAdminLogin = async (req,res)=>{
    
    const {email,password} = req.body;
    if(!email || !password){
        res.status(401).json("username or password cannot be empty")
        return res.redirect('/login')
    }
    const adminuser = await AdminUser.findOne({where:{email:email}})

    if (!adminuser){
        return res.status(401).json({"message":"User not found.Check the email and try again"})
    }
    //compare the password entered by user with one stored in db
    const match = await bcrypt.compare(password,adminuser.password);
    if(!match){return res.status(401).json({"message":"Incorrect Password.Kindly try again"})}
    else{
        req.app.locals.login=true
        req.session.user={"username":adminuser.username}  
        console.log(req.session.user,req.session.user_sid)  
        return res.redirect('/admin')//json({"message":`Success ${adminuser.email} ${adminuser.username} logged in`})
    }

}

module.exports = handleAdminLogin