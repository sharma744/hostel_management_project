import React from "react";
import {Text,TextInput,View,Button,StyleSheet,TouchableOpacity} from "react-native";
import {useState,useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "./signup";
import Main_screen from "./second";
import Authenticate from "./first_page";
import Main from "./main";
import Room_book from "./room_book";
import { useNavigation } from "expo-router";
export default function Start(){
    let stack=createNativeStackNavigator();
    return(
        <stack.Navigator>
            <stack.Screen  name="login" component={Authenticate} />
            <stack.Screen name="signup" component={Signup} />
            <stack.Screen name="Select" component={Main_screen} />
            <stack.Screen  name="main" component={Main} />
            <stack.Screen  name="roombook" component={Room_book} />
           </stack.Navigator>
    )
}