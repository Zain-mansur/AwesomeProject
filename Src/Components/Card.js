import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import NoteScreen from '../Screens/NoteScreen'
import { NavigationContainer, useNavigation } from '@react-navigation/native'


const Card = (props) => {
    const navigation = useNavigation();

    return (
            <View style={[styles.card , { backgroundColor: props.bgc1}]}>      
            <View style={styles.cardTop}>
                <View style={[styles.greenRct , { backgroundColor: props.bgc2 || 'green'}]}></View>
                <View >
                    <Text>{'Name: '  + props.name}</Text>
                    <Text>{'Birth-Day: ' + props.bd}</Text>
                    <Text>{ props.connection}</Text>
                </View>
            </View>
            <Button title= 'Zapp Note'  color={props.bgc2} onPress={()=>navigation.navigate('Notes')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        width: '70%',
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        alignSelf: 'center',
    },
    cardTop: {
        flexDirection: 'row',
        // borderWidth:1 , 
    },
    greenRct: {
        height: 100,
        width: 100,
        backgroundColor: 'green',
        marginRight: 10,
        borderRadius: 50,
    },
    uiText: {
        backgroundColor: 'lightyellow',
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
        // borderWidth:1 , 
        // alignSelf:'center'
        textAlign: 'center'
    }

})

export default Card;