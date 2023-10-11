import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
const CustomInput = ({Value , handelUser, placeholder , secureTextEntry}) => {
    // console.log(Value);
    const [value , setValue] = useState(Value);

    console.log(handelUser);

    const onEndEditing =()=>{
        handelUser.User[placeholder]=value
        handelUser.setUser({...handelUser.User})
    }

    return (
        <View style= {styles.container}>
            <TextInput 
            value={value}
            onChangeText={setValue}
            style={styles.input} 
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            onEndEditing={onEndEditing}
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