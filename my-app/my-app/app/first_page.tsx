import React from "react";
import {Text,TextInput,View,Button,StyleSheet,TouchableOpacity, ActivityIndicator} from "react-native";
import {useState,useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Signup from "./signup";
import Main_screen from "./second";
import Main from "./main";
import { useNavigation } from "expo-router";
export  default function Authenticate(props:any){
    let [st,setst]=useState(true);
useEffect(()=>{
    let auth=async()=>{
        try{
        let name=await AsyncStorage.getItem("name")
        console.log(name);
        if(name!=null){
            setst(false);
            props.navigation.reset({
                index:0,
                routes:[{name:"main"},{name:"roombook"}]
            })
        }
    }catch(err){
        console.log(err);
    }
    }
    auth();
},[]);
    return(
        <View>
            {st?<ActivityIndicator animating={st} size="small"></ActivityIndicator>:<Signin/>}
        </View>
    )

   function Signin(){
    let [username,setusername]=useState(" ");
    let [password,setpassword]=useState(" ");
    async function sendform(){
        if(username==" "){
          console.log("please enter user name")
        }
        let data=await fetch("http://192.168.63.34:3000/login",{
          method:"POST",
          headers:{ 
              "Content-type":"application/json",
          },
          body:JSON.stringify({username:username,password:password})
      
        })
        AsyncStorage.setItem("name",username);
        let new_data=await data.json();
        console.log(new_data);
        if(new_data==true){
            props.navigation.reset({
                index:0,
                routes:[{name:"main"},{name:"roombook"}]
            })
        }
      }
return(    
<View style={styles.cntr}>
    <TextInput onChangeText={(text)=>{setusername(text)}} style={styles.inpt} placeholder="enter the username"></TextInput>
    <TextInput onChangeText={(text)=>{setpassword(text)}} style={styles.inpt}  placeholder="enter the password"></TextInput>
    <Button  title="submit" onPress={sendform}></Button>
        <Text>Didn't have any account?
            <TouchableOpacity onPress={()=>{
                props.navigation.navigate("signup");
            }}><Text style={{color:"blue",marginTop:4}}>sign up here</Text></TouchableOpacity>
        </Text>

</View>
)
}
}
let styles=StyleSheet.create({
 cntr:{
    alignItems:"center",
    justifyContent:"center",
    width:"auto",
    height:"100%",
    backgroundColor:"white"

 },
 inpt:{
   borderColor:"black",
   borderWidth:2,
   width:"90%",
   height:"auto",
   margin:10,
   paddingLeft:90,
   borderRadius:50,
   backgroundColor:"white",
   fontSize:15,
   fontFamily:"sans-serif"

 }

})

