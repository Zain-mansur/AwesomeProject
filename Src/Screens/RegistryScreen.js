import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
// import CustomInput from "../Components/customInput";
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { POSTApi, createNewUser } from "../res/API/api";
import CustomInput from "../Components/CustomInput";

const RegistryScreen = () =>{
    const navigation = useNavigation();
    const [User , setUser] = useState({
        UserName : '',
        PhoneNumber : '',
        Password : '',
    });
  

    // console.log(Username);

    const register = () => {
      const castedUser={
        name : User.UserName,
        phone : User.PhoneNumber,
        password : User.Password,
    }
      createNewUser(castedUser).then((v)=>{
        console.log(v);
        if (v.message=='User added') {
          navigation.navigate('Login')
        }else{
          console.log('faild');
        }
      })
    }
  
    return(
        <View style={styles.container}>

        <Text style={styles.txt}> username </Text>
        
        <CustomInput Value={User.UserName}  handelUser={{User:User,setUser:setUser}} placeholder="UserName"/>        
        
        <Text style={styles.txt}> phone number </Text>
    
        <CustomInput Value={User.PhoneNumber}  handelUser={{User:User,setUser:setUser}} placeholder="PhoneNumber"/>
        
        <Text style={styles.txt}> password </Text>
    
        <CustomInput Value={User.Password}  handelUser={{User:User,setUser:setUser}} placeholder="Password" secureTextEntry={true}/>
    
        <Button title= 'Register'   onPress={()=>register()} />
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