const router = require('express').Router();
const controller= require ("../controllers/test")



router.get('/',controller.getAll)


module.exports=router