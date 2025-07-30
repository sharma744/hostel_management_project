let mongoose=require("mongoose");
let schema=mongoose.Schema({
    "username":{
        type:String

    },
    "password":{
        type:String,
        required:true
    },
    "usr":{
        type:String
    }
})
module.exports=mongoose.model("auth",schema);