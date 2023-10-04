import React from "react";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../Src/Screens/MainScreen";
import NoteScreen from "../Src/Screens/NoteScreen";
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from "../Src/Screens/LoginScreen";
import RegistryScreen from "../Src/Screens/RegistryScreen";
import StartScreen from "../Src/Screens/StartScreen";


const MainNavigation = () => {

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='start' component={StartScreen}/>
                <Stack.Screen name='registry' component={RegistryScreen}/>
                <Stack.Screen name='Login' component={LoginScreen}/>
                <Stack.Screen name='Home' component={MainScreen}/>
                <Stack.Screen name='Notes' component={NoteScreen}/>
            </Stack.Navigator>
       </NavigationContainer>
    )
}

export default MainNavigation;