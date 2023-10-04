import React from "react"
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer, useNavigation } from '@react-navigation/native'


const StartScreen = () => {
    const navigation = useNavigation();
    
    return(
        <View style={styles.container}>
        <Text style={styles.txt}> Please choose Login if you already have an account or press Register if you want to make a new account </Text>
        <Button style={styles.button} title= 'Login'   onPress={()=>navigation.navigate('Login')}/>
        <Button style={styles.button} title= 'Register'   onPress={()=>navigation.navigate('registry')}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'linergb(220, 227, 188)n',
      
    },
    txt: {
        color: 'black',
        borderRadius: 10,
        borderWidth: 1,
        paddingBottom: 5
    },
    button: {
        
    },
}); 
export default StartScreen;