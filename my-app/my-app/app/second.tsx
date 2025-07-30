import React from "react";
import {View,Text,FlatList,TouchableOpacity,StyleSheet,ActivityIndicator,ScrollView} from "react-native";
import {useEffect,useState} from "react"
import AsyncStorage from "@react-native-async-storage/async-storage";
let user=[
    {
       type:"admin"
   },
   {
       type:"student"
   },   
]

export default function Main_screen(Props:any){
    let [usr,setusr]=useState("");
let [loading,setloading]=useState(false);
useEffect(()=>{
    console.log(usr)
 let dt=async ()=>{
    let {username,password}=Props.route.params;
        try{
    if(usr=="student"){
        setloading(true);
       let data=await fetch("http://192.168.63.34:3000/signup",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({user:usr,username:username,password:password})
    })
    let res=await data.json();
    console.log(data);
    console.log(res);
    setloading(false);
    if(res==true){
    AsyncStorage.setItem("name",username);

    Props.navigation.reset({
       index:0,
       routes:[{name:"main"},{name:"roombook"}]
           })
    // Props.navigation.navigate("main");
}
else{
    console.log("can't signup")
}
    }

}catch(err){
 console.log("oops something went wrong");
 setloading(false);
}
}
dt();

setusr(" ");
},[usr])
console.log(loading);
   return(
    <ScrollView>
    <View style={styles.vw}>
      
        {
        loading?
   <ActivityIndicator color={"green"} animating={true} size={30} style={styles.act}></ActivityIndicator>
:
(user.map((Data,index)=>(
    <TouchableOpacity style={styles.touch} onPress={()=>setusr(Data.type)
    }>
        <Text style={styles.txt}>{Data.type}</Text>
    </TouchableOpacity>)))
}

</View>
</ScrollView>
   )

}
let styles=StyleSheet.create({
    touch:{
        flexWrap:"wrap",
        width:250,
        height:300,
        borderRadius:20,
        borderColor:"black",
        borderWidth:3,
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:"center",
        alignContent:"center",
        color:"blue",
        marginTop:20

    },
    txt:{
        fontSize:20,


    },
    vw:{
        alignItems:"center",
        alignContent:"center",
        color:"yellow",
        backgroundColor:"wgite",
        marginTop:40

    },
    act:{

    }
})


