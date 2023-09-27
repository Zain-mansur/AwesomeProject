// was supposed to be a note component // no use for now
import { useState } from "react";
import { Button, ImageBackground, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";


const Note = (props) => {
    const [text, setText] = useState("");
    return (

        <View style={styles.Lining} >
            <TextInput style={styles.TXTin}
                multiline
                placeholder="Type Note"
                onChangeText={newText => setText(newText)}
                defaultValue={text}
            />
        </View>

    )
}

const styles = StyleSheet.create({


    Lining: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 50,


    },


    TXTin: {
        paddingTop: 23,
        fontSize: 22,
        paddingLeft: 30,
        color: 'black'
    },
})


export default Note;