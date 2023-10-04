import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import CustomInput from "../Components/customInput";
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { POSTApi } from "../res/API/api";

const RegistryScreen = () =>{
    const navigation = useNavigation();
    const [Username , setUsername] = useState('');
    const [PhoneNumber , setPhoneNumber] = useState('');
    const [Password , setPassword] = useState('');
  
    return(
        <View style={styles.container}>
    
        <Text style={styles.txt}> username </Text>
        
        <CustomInput placeholder="UserName" Value={Username} setValue={setUsername}/>
        
        <Text style={styles.txt}> phone number </Text>
    
        <CustomInput placeholder="Phonenumber"  Value={PhoneNumber} setValue={setPhoneNumber}/>
        
        <Text style={styles.txt}> password </Text>
    
        <CustomInput placeholder="Password" Value={Password} setValue={setPassword}/>
    
        <Button title= 'Register'   onPress={()=>navigation.navigate('Login') } />
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
    }
  });

export default RegistryScreen;