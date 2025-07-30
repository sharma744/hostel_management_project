let cll=require("/Users/aayushsharma/hostel_managment_project/server_side/model.js/model.js")
let bcrypt=require("bcrypt");
exports.signin=async(req,res)=>{
     let body=req.body;
     // let salt=bcrypt.genSaltSync(10);
     // let hass_pass=bcrypt.hashSync(body.password,salt);
     // console.log(hass_pass)
     let data=await cll.findOne({username:body.username,password:body.password});
     console.log(body);
     console.log(data);
     if(data!=null){
          console.log(true);
          res.send(true);
     }
     else{
          console.log(false);
          res.send(false)
     }

}
exports.signup=async(req,res)=>{
     let body=req.body;
     // let salt=bcrypt.genSaltSync(10);
     // let hash_pass=bcrypt.hashSync(body.password,salt);
     // console.log(hash_pass);
     let collection={
          "username":body.username,
          "password":body.password,
          "usr":body.user
     }
     let usr=await cll.findOne({"username":body.username});
     console.log(usr);
     if(usr!=null){
          res.send("usern name exist");
          return;
     }

     let pass=await cll.findOne({"password":body.password});
     if(pass!=null){
          res.send("password already exist");
          return;
     }
     let result=await cll.insertOne(collection);
     console.log(result);
     if(result!=null){
          res.send(true)
     }
     else{
          res.send(false)
     }
}