const usersbfRoute=require('express').Router()
const {CreateUser,AllUsers,OneUsers}=require('../controllers/usersbf.controllers')


// usersbfRoute.get('/allUsers',AllLF)
// usersbfRoute.get('/OneUser',AllAdp)

usersbfRoute.post('/CreateUser',CreateUser)
// usersbfRoute.put('/LFA/:id',UpdateLFA)
// usersbfRoute.delete('/LFA/:id',DeleteLFA)

module.exports=usersbfRoute