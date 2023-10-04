import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import CustomInput from "../Components/customInput";
import { NavigationContainer, useNavigation } from '@react-navigation/native'


const LoginScreen = () => {
  const navigation = useNavigation();
  const [Username , setUsername] = useState('');
  const [Password , setPassword] = useState('');

    return(
    <View style={styles.container}>
    
    <Text style={styles.txt}> username </Text>
    
    <CustomInput placeholder="UserName" Value={Username} setValue={setUsername}/>
    
    <Text style={styles.txt}> password </Text>

    <CustomInput placeholder="Password" Value={Password} setValue={setPassword} secureTextEntry={true}/>

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