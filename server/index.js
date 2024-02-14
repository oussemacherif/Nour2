const express = require("express");
const cors = require("cors");
const db = require("./database/index");
const Routes = require("./routes/test");




const app = express();
const port = 3000; 

app.use(express.json());
app.use(cors())





app.use("/get",Routes);




app.listen(port, () => {
  console.log(`Connected on port ${port}`);
}); 


