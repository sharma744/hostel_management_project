let controller=require("/Users/aayushsharma/hostel_managment_project/server_side/controller/c1");
let book_controller=require("/Users/aayushsharma/hostel_managment_project/server_side/controller/room_controller")
let middleware=require("/Users/aayushsharma/hostel_managment_project/server_side/controller/middleware.js")
let multer=require("multer")
let upld=multer({dest:"upload/"})
module.exports=(app)=>{
     app.post("/login",controller.signin);
     app.post("/signup",controller.signup);
     app.post("/roombook",upld.single("file"),middleware.m1,book_controller.room_book,middleware.cloudnry);

}