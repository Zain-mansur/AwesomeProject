import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const SearchFilter = ({data,input,setinput}) => {
    const navigation = useNavigation();
  return (
    <View>
      <FlatList data={data} renderItem={({item}) => {
        if(input === ""){
            return( null
            )
        }
        if(item.name.includes(input)){
            return(
                <View>
                    <Button style={styles.search} title={item.name} color={'rgb(65, 180, 101)'} onPress={()=>navigation.navigate('Notes')}></Button>
                </View>
            )
        }
      }} />
    </View>
  )
}


const styles = StyleSheet.create({})


export default SearchFilter;
