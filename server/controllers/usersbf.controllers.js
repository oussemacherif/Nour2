const {UsersBf}=require("../database/index")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const AllUsers= async(req,res) => {
    try {
    const result=await UsersBf.findAll()
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const OneUsers= async(req,res) => {
    try {
    const result=await UsersBf.findOne({where:{id:req.body.id}})
    res.json(result)   
    } catch (error) {
    res.send(error)    
    }
};

const CreateUser =async (req, res) =>{
    const {fname,lname,user_password,email,doc1,doc2,doc3,doc4}=req.body
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
        user_password:hashedPassword,

       }
        const newUser = await UsersBf.create(userHashed);
        res.status(201).send(newUser);
      } catch (error) {
        res.status(400).json(error);
      }
    }

const DeleteUser= async(req,res) => {
        try {
        const result=await UsersBf.destroy({where:req.params})
        res.json(result)   
        } catch (error) {
        res.send(error)    
        }
};

const UpdateUser= async (req,res)=>{
    try {
        if(req.body.newpassword){
            const hashedPassword = await bcrypt.hash(req.body.newpassword, 10);
            req.body.user_password=hashedPassword 
        }
        console.log(req.body);
        
        const result=await UsersBf.update(req.body,{where:{id:req.params.id}})
        res.json(result)
    } catch (error) {
        
    }
}


module.exports={CreateUser,OneUsers,AllUsers,UpdateUser}