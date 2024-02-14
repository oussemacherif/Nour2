const { Test } = require("../database/index")



const getAll = (req,res) => {
Test.findAll({})
.then((result)=>{res.status(200).json(result)})
.catch((err)=> {res.status(500).send(err)})

}

module.exports= {getAll}