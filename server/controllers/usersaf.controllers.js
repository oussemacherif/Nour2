const {UsersAf}=require("../database/index")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const GiveMeToken=(userId,Name)=>{
   return jwt.sign({userId,Name},process.env.ACCESS_TOKEN_SECRET,{ expiresIn:60*60*24*7})
    
}

const AllUsersAcp= async(req,res) => {
    try {
    const result=await UsersAf.findAll()
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const OneUsersAcp= async(req,res) => {
    try {
    const result=await UsersAf.findOne({where:{id:req.params.id}})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const LoginUserAcp = async(req,res)=>{
    const {user_password,email}=req.body
    try {
        const correctUserEmail=await UsersAf.findOne({where:{email:req.body.email}})
        if(!correctUserEmail){
           return res.status(405).json("email not found")
        }
        else {
            const password=correctUserEmail.dataValues.user_password
            const verifpassword=await bcrypt.compare(user_password,password)
            if (!verifpassword) {
                return res.status(406).json("wrong password")
            }
            else {
                const userId=correctUserEmail.dataValues.id
                const Name=correctUserEmail.dataValues.lname
                return res.json({
                    id:userId,
                    token:GiveMeToken(userId,Name)
                })
            }
        }
    } catch (error) {
        res.send(error)
    }
}

const CreateUserAcp =async (req, res) =>{
    const {fname,lname,user_password,email,doc1,doc2,doc3,doc4,status}=req.body
    console.log("req",req.body);
      try {
        const hashedPassword = await bcrypt.hash(user_password, 10);
       const userHashed={
        fname,
        lname,
        email,
        doc1,
        doc2,
        doc3,
        doc4,
        status,
        user_password:hashedPassword,

       }
        const newUser = await UsersAf.create(userHashed);
        res.status(201).send(newUser);
      } catch (error) {
        res.status(400).json(error);
      }
    }

const DeleteUserAcp= async(req,res) => {
        try {
        const result=await UsersAf.destroy({where:req.params})
        res.json(result)   
        } catch (error) {
        res.send(error)    
        }
};

const UpdateUserAcp= async (req,res)=>{
    try {
        if(req.body.newpassword){
            const hashedPassword = await bcrypt.hash(req.body.newpassword, 10);
            req.body.user_password=hashedPassword 
        }
        console.log(req.body);
        
        const result=await UsersAf.update(req.body,{where:{id:req.params.id}})
        res.json(result)
    } catch (error) {
        res.send(error)
    }
}


module.exports={CreateUserAcp,OneUsersAcp,AllUsersAcp,UpdateUserAcp,DeleteUserAcp,LoginUserAcp}