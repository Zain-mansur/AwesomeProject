import react, { useState } from "react"; //always do import//
import { StyleSheet, Text, View , ScrollView } from "react-native";
import React, { Component } from 'react';
import MainNav from "./Route/Nav";
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from "./Route/Nav";
import { getAllUsers } from "./Src/res/API/api";



const App = () => {

  const [users , setuseres] = useState([]);
  
  return (
      <View style={{flex:1}}>
    <MainNavigation/>
    </View>
  )
}


export default App; 