const { AdminUser } = require('../models');
const bcrypt = require('bcryptjs')
const handleAdminLogin = async (req,res)=>{
    const {username,password} = req.body;
    if(!username || !password){
        return res.status(401).json("username or password cannot be empty")
    }
    const adminuser = await AdminUser.findOne({where:{username:username}})

    if (!adminuser){
        return res.status(401).json({"message":"User not found.Check the email and try again"})
    }
    //compare the password entered by user with one stored in db
    const match = await bcrypt.compare(password,adminuser.password);
    if(!match){return res.status(401).json({"message":"Incorrect Password.Kindly try again"})}
    else{
        return res.json({"message":`Success ${adminuser.username} logged in`})
    }

}

module.exports = handleAdminLogin