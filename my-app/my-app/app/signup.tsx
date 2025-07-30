import React from "react";
import {View,Text,TextInput,Button} from "react-native"
import {useState,useEffect} from "react"
export default  function Signup(Props:any){


    let [username,setusername]=useState(" ");
    let [password,setpassword]=useState(" ");
    let frwd=()=>{
        Props.navigation.navigate("Select",{username:username,password:password});
        return;
        } 
    return(
        <View>
            <TextInput onChangeText={(text)=>{setusername(text)}} placeholder="enter the username"></TextInput>
            <TextInput onChangeText={(text)=>{setpassword(text)}} placeholder="enter the password"></TextInput>
         <Button title="submit" onPress={()=>{
            frwd();
         }}></Button>
        </View>
    )
}