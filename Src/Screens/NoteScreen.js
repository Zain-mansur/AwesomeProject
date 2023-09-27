import { useState } from "react";
import { Button, FlatList, ImageBackground, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";


const NoteScreen = () => {

    const [Notes , setNotes] = useState([]);
    const [text, setText] = useState("");
    const AddNote = () => {
        setNotes([
            ...Notes,
            {
                id:Notes.length,
                name:text
            }
        ]);
        setText("");
    };
        // console.log(Notes , text , "text") ;
    
    return (
        <View style={styles.container}>
        <View style={styles.Lining} >
            <TextInput style={styles.TXTin}
                multiline
                placeholder="Type Note"
                onChangeText={newText => setText(newText)}
                defaultValue={text}
            />
        </View>
            <Button title="Add Note" onPress={AddNote}/>
            
            <FlatList 
            
            data={Notes}
            renderItem={({item}) => (
            <View>
                 {/* {console.log("nots",item)}  did check to see where the item was */}
                <Text style={styles.item}> {item.name}  </Text>
            </View>
            )}
            />
        </View>
    )
}
// flatlist ex
// <FlatList 
//         data={Notes}
//         renderItem={(item) => (
//         <View>
//             <Text style={styles.item}> {item.name}  </Text>
//         </View>
//         )}
//         />

// map ex
//  <ul>
//                 {Notes.map(Item=> (
//                     <li key={Item.id}>{Item.name}</li>
//                 ))}
//             </ul> 

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "linen"
    },


    Lining: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 50,
        marginBottom: 5,
    },


    TXTin: {
        paddingTop: 23,
        fontSize: 22,
        paddingLeft: 30,
        color: 'black',
    },
    item: {
        fontSize: 30,
        paddingBottom: 20,
        borderWidth: 1,
        borderRadius: 15,
        marginTop: 5,
        backgroundColor: "cyan"
    }
})


export default NoteScreen;