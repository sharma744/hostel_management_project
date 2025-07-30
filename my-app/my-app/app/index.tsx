import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {Text,TextInput,View} from "react-native"
import Detail from ".";
import Authenticate from "./first_page";
import Signup from "./signup";
import Main from "./main";
import Main_screen from "./second";
import Room_book from "./room_book";
import Start from "./start";
export default function Index(){
    let stack=createNativeStackNavigator();
    return(
        <NavigationIndependentTree>
           <Start/>
        </NavigationIndependentTree>
    )
}