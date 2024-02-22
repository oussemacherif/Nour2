const adminRoute=require('express').Router()
const{CreateAdmin,OneAdmin,AllAdmins,UpdateAdmin,DeleteAdmin,LoginAdmin}=require('../controllers/admin.controllers.js')


adminRoute.get("/AllAdm",AllAdmins)
adminRoute.get("/OneAdm/:id",OneAdmin)

adminRoute.post("/AddAdmin",CreateAdmin)
adminRoute.post("/Loggin",LoginAdmin)

adminRoute.put("/UpdateAdm/:id",UpdateAdmin)

adminRoute.delete("/DeleteAdm/:id",DeleteAdmin)


module.exports=adminRoute;