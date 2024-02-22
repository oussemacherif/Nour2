const express = require("express");
const cors = require("cors");
require('dotenv').config()
const db = require("./database/index");
const Routes = require("./routes/test");
const usersbfRoute = require("./routes/usersbf.routes");
const adminRoute = require("./routes/admin.routes");




const app = express();
const port = 3000; 

app.use(express.json());
app.use(cors())





app.use("/get",Routes);
app.use("/nour2",usersbfRoute)
app.use("/nour2",adminRoute)
// app.use("/nour2",)


app.listen(port, () => {
  console.log(`Connected on port ${port}`);
}); 


