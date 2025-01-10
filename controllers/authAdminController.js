const { AdminUser } = require('../models');
const bcrypt = require('bcryptjs');

const handleAdminLogin = async (req,res)=>{
    
    const { email,password } = req.body;

    if(!email || !password){
        return res.status(400).json({
            success:false,
            message:"Email and password required"
        });
    }

    try {
        const adminuser = await AdminUser.findOne({where:{email:email}})

        if (!adminuser){
            return res.status(401).json({
                success:false,
                message:"User not found.Check the email and try again"
            });
        }
        //compare the password entered by user with one stored in db
        const match = await bcrypt.compare(password,adminuser.password);
        if(!match){
            return res.status(401).json({
                success:false,
                message:"Incorrect Password.Kindly try again"
            });
        }
        req.app.locals.login=true
        req.session.user={"username":adminuser.username}  
        //console.log(req.session.user,req.sessionID)  
        return res.status(200).json({
            success:true,
            message:`Welcome ${adminuser.username}! login Success`,
            redirectUrl:"/admin"
        });
    }
    catch(error){
        console.error("Login error:",error);
        return res.status(500).json({
            success:false,
            message:"Server error during login"
        })

    }
}

module.exports = handleAdminLogin