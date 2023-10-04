import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomInput from "../Components/customInput";

const LoginScreen = () => {
  const [Username , setUsername] = useState('');
  const [Password , setPassword] = useState('');

    return(
    <View style={styles.container}>
    
    <Text style={styles.txt}> username </Text>
    
    <CustomInput placeholder="UserName" Value={Username} setValue={setUsername}/>
    
    <Text style={styles.txt}> password </Text>

    <CustomInput placeholder="Password" Value={Password} setValue={setPassword}/>

    </View>
    )
};


const styles = StyleSheet.create({
    container: {
      flex: 1 ,
      alignItems: 'center',

    },
    
    text: {
        fontSize: 30
    },
    txt: {
      color: 'black'
    }
  });
  
  export default LoginScreen;