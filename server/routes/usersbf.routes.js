const usersbfRoute=require('express').Router()
const {CreateUser,AllUsers,OneUsers,UpdateUser,DeleteUser,LoginUser}=require('../controllers/usersbf.controllers')


usersbfRoute.get('/AllUsers',AllUsers)
usersbfRoute.get('/OneUser/:id',OneUsers)

usersbfRoute.post('/CreateUser',CreateUser)
usersbfRoute.post('/Login',LoginUser)

usersbfRoute.put('/Update/:id',UpdateUser)

usersbfRoute.delete('/Delete/:id',DeleteUser)

module.exports=usersbfRoute