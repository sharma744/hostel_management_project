import React from "react";
import {View,ScrollView,Text,TextInput,StyleSheet, TouchableHighlight} from "react-native"
import {Picker} from "@react-native-picker/picker";
import {useState,useEffect} from "react"
import * as DocumentPicker from "expo-document-picker"
import Toast from "react-native-toast-message"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { pick } from "react-native-document-picker";
export default function Room_book(){
  let tst=(txt:String,type:String)=>{
    Toast.show({
      type:type,
      text1:txt,
    })
  }
    let [admno,setadmno]=useState(0);
    let [roomno,setroomno]=useState(0);
    let [selectedvalue,setselectedvalue]=useState("bhagat");
    let picker=async()=>{
        try{
 let stat= await DocumentPicker.getDocumentAsync({
    type:"application/pdf",
    copyToCacheDirectory:true
 })
  console.log(stat);
const formdata=new FormData();
let dt=stat.assets[0];
formdata.append('file',{
    uri:dt.uri,
    name:dt.name,
    type:dt.mimeType
})
// console.log(admno);
formdata.append("admno",admno);
formdata.append("roono",roomno);
formdata.append("hostelnm",selectedvalue);
let upd=await fetch("http://192.168.168.34:3000/roombook",{
    method:"POST",
    headers:{
        "Content-type":"multipart/form-data"
    },
    body:formdata
})
let txt=await upd.text();
console.log(txt);
tst(txt,"success")

        }catch(err){
          tst("error in picking file","error");
          console.log("error in picking file");
        }

    }
    
    return(
        <View style={styles.vw}>
             <TextInput  style={styles.txt} placeholder="enter the admission number" onChangeText={(text)=>{
            setadmno(Number(text));
}}></TextInput>
  <TextInput  style={styles.txt} placeholder="enter the roomno" onChangeText={(text)=>{
            setroomno(Number(text));
}}></TextInput>
<Toast/>
<Picker style={styles.pick} selectedValue={selectedvalue} onValueChange={(itemvalue)=>{
setselectedvalue(itemvalue);
}}>
    <Picker.Item label="1St year" value={"bhagat"}/>
    <Picker.Item label="2St year" value={"bhagat"}/>
    <Picker.Item label="3st year" value={"bhagat"}/>
    <Picker.Item label="4st year" value={"harsh"}/>
</Picker>
{/* <toast/> */}
<TouchableHighlight  style={styles.touch} onPress={()=>{
     picker();
}}>
    <Text>upload your registration form</Text>
</TouchableHighlight>

        </View>
    )
}
const styles = StyleSheet.create({
    vw: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 2,
      borderColor: "#ccc",
      backgroundColor: "#f9f9f9",
      width: 300,
      height: 120,
      marginHorizontal: 25,
      marginVertical: 40,
      borderRadius: 16,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 6,
      elevation: 5, // for Android shadow
    },
  
    txt: {
      borderColor: "#aaa",
      borderWidth: 1.5,
      width: "85%",
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 8,
      fontSize: 16,
      color: "#333",
      backgroundColor: "#fff",
      marginBottom: 12,
      textAlign: "center",
    },
  
    touch: {
      borderColor: "#333",
      borderWidth: 2,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
      backgroundColor: "#4a90e2",
      alignItems: "center",
    },
  
    pick: {
        width: "85%",
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 8,
        borderWidth: 1.5,
        borderColor: "#999",
        backgroundColor: "#fff",
        color: "#333", // ensure text is visible
        fontSize: 16,
        marginTop: 12,
      },
      
  });
  