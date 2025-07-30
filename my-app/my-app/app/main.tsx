import React from "react"
import {View,Text,TouchableHighlight,StyleSheet,ScrollView} from "react-native";
import {useState,useEffect} from "react";
import Room_book from "./room_book";
export  default function Main(props:any){
    let dt=[
        {type:"roombook"},
    ]
    let funnav=()=>{
        props.navigation.navigate("roombook");
    }
    return (
      <ScrollView>
        <View style={styles.vw}>
            {
            dt.map((type)=>(
                <TouchableHighlight  style={styles.touch} onPress={()=>{
                    funnav()}}>
                    <Text style={styles.txt}>{type.type}</Text>
                </TouchableHighlight>
            )

            )    
        }
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    vw: {
      flex: 1,
      flexWrap: "wrap",
      padding: 20,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f5f7fa",
    },
  
    touch: {
      width: "85%",
      height: 60,
      borderWidth: 2,
      borderColor: "#333",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#ffffff",
      marginVertical: 15,
      borderRadius: 12,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 4, // Android shadow
    },
  
    txt: {
      fontSize: 18,
      fontWeight: "600",
      color: "#333",
      textAlign: "center",
    },
  });
  