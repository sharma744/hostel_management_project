let express=require("express");
let mongoose=require("mongoose");
let app=express();
mongoose.connect("mongodb://localhost:27017/hostel_database");
let db=mongoose.connection;
db.once("open",()=>{
    console.log("database connected succesfully");
})
db.on("error",()=>{
    console.log("error occured in connecting database ");
})
app.use(express.json());
require("./routes.js/r1").app;
app.listen(3000,()=>{
    console.log("server started succesfully");
})