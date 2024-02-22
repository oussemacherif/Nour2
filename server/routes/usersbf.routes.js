const usersbfRoute=require('express').Router()
const {CreateUser,AllUsers,OneUsers,UpdateUser}=require('../controllers/usersbf.controllers')


// usersbfRoute.get('/allUsers',AllLF)
// usersbfRoute.get('/OneUser',AllAdp)

usersbfRoute.post('/CreateUser',CreateUser)
usersbfRoute.put('/Update/:id',UpdateUser)
// usersbfRoute.delete('/LFA/:id',DeleteLFA)

module.exports=usersbfRoute