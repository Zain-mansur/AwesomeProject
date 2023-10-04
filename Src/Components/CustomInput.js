import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
const CustomInput = ({Value, setValue , placeholder , secureTextEntry}) => {
    return (
        <View style= {styles.container}>
            <TextInput 
            value={Value}
            onChangeText={setValue }
            style={styles.input} 
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}    
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
    backgroundColor: "white",
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    },

    input: {
    color: 'black'

    },
  });


  export default CustomInput;