import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import CustomInput from "../Components/CustomInput";
import { NavigationContainer, useNavigation } from '@react-navigation/native'


const LoginScreen = () => {
  const navigation = useNavigation();


    return(
    <View style={styles.container}>
    
    <Text style={styles.txt}> PhoneNumber </Text>
    
    <CustomInput placeholder="PhoneNumber"/>
    
    <Text style={styles.txt}> password </Text>

    {/* <CustomInput placeholder="Password"  secureTextEntry={true}/> */}

    <Button title= 'Login'   onPress={()=>navigation.navigate('Home')}/>

    </View>
    )
};


const styles = StyleSheet.create({
    container: {
      flex: 1 ,
      alignItems: 'center',

    },

    txt: {
      color: 'black'
      
    },
  });
  
  export default LoginScreen;