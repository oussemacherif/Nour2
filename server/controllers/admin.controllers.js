const {Admin}=require("../database/index")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const GiveMeToken=(admId,Name)=>{
   return jwt.sign({admId,Name},process.env.ACCESS_TOKEN_SECRETT,{ expiresIn:60*60*24*7})
    
}

const AllAdmins= async(req,res) => {
    try {
    const result=await Admin.findAll()
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const OneAdmin= async(req,res) => {
    try {
    const result=await Admin.findOne({where:{id:req.params.id}})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const LoginAdmin = async(req,res)=>{
    const {admin_password,email}=req.body
    try {
        const correctAdminEmail=await Admin.findOne({where:{email:email}})
        if(!correctAdminEmail){
           return res.status(405).json("email not found")
        }
        else {
            const password=correctAdminEmail.dataValues.admin_password
            const verifpassword=await bcrypt.compare(admin_password,password)
            if (!verifpassword) {
                return res.status(406).json("wrong password")
            }
            else {
                const adminId=correctAdminEmail.dataValues.id
                const Name=correctAdminEmail.dataValues.admin_lname
                return res.json({
                    id:adminId,
                    token:GiveMeToken(adminId,Name)
                })
            }
        }
    } catch (error) {
        res.send(error)
    }
}

const CreateAdmin =async (req, res) =>{
    const {admin_fname,admin_lname,admin_image,admin_password,email}=req.body
      try {
        const hashedPassword = await bcrypt.hash(admin_password, 10);
       const AdminHash={
        admin_fname,
        admin_lname,
        email,
        admin_image,
        admin_password:hashedPassword,

       }
        const newUser = await Admin.create(AdminHash);
        res.status(201).send(newUser);
      } catch (error) {
        res.status(400).json(error);
      }
    }

const DeleteAdmin= async(req,res) => {
        try {
        const result=await Admin.destroy({where:req.params})
        res.json(result)   
        } catch (error) {
        res.send(error)    
        }
};

const UpdateAdmin= async (req,res)=>{
    try {
        if(req.body.newpassword){
            const hashedPassword = await bcrypt.hash(req.body.newpassword, 10);
            req.body.admin_password=hashedPassword 
        }
        console.log(req.body);
        const result=await Admin.update(req.body,{where:{id:req.params.id}})
        res.json(result)
    } catch (error) {
        res.send(error)
    }
}


module.exports={CreateAdmin,OneAdmin,AllAdmins,UpdateAdmin,DeleteAdmin,LoginAdmin}