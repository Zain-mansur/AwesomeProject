// this is gonna be the home screen which is card.js details in here and free app.tsxso this is the new app.tsx
import React, { useContext, useEffect, useState } from 'react'; //always do import//
import { ImageBackground, StyleSheet, Text, View, Image, ScrollView, Button, TextInput } from "react-native";
import Card from "../Components/Card";
import AppContext from '../../Store/AppContext';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainNavigation from '../../Route/Nav';
import SearchFilter from '../Components/SearchFilter';
import { getAllUsers } from '../res/API/api';


const MainScreen = (props) => {

  const data = [
    {
      name: 'Zain',
      bd: '24/8',
      connection: 'Family member',
      bgc1: 'violet',
      bgc2: 'purple',
    },
    {
      name: 'Riam',
      bd: '22/6',
      connection: 'Family member',
      bgc2: 'cyan',
      bgc1: 'lightblue'
    },
    {
      name: 'Wisam',
      bd: '20/11',
      connection: 'Family member',
      bgc2: 'yellow',
      bgc1: 'rgb(255, 204, 0)'
    },
    {
      name: 'Aram',
      bd: '15/7',
      connection: 'Family member',
      bgc1: 'rgb(126, 108, 206)',
      bgc2: 'lightblue',
    },
    {
      name: 'Hadeel',
      bd: '23/6',
      connection: 'Family member',
      bgc1: 'rgb(168, 38, 83)',
      bgc2: 'pink'
    },
    {
      name: 'Arnold',
      bd: '19/2',
      connection: 'Family member',
      bgc1: 'darkgrey',
      bgc2: 'black'
    },
    {
      name: 'Mama',
      bd: '15/2',
      connection: 'Family member',
      bgc2: 'rgba(182, 42, 237, 0.32)',
      bgc1: 'redrgb(235, 76, 76)',
    },

  ]

  const renderCards = () => {
    return data.map(cardData => {
      return <Card name={cardData.name} bd={cardData.bd} bgc2={cardData.bgc2} bgc1={cardData.bgc1} connection={cardData.connection} />
    })
  }
  const [input, setinput] = useState("");
  
  // api example
  const getAllUsersFromApi = () => {
    getAllUsers().then(res => {
      console.log("all users" , res);
      setuseres(res);
    })
  }
  useEffect(() => {
    getAllUsersFromApi();
  }, []);
  // end

  return (
    <View style={styles.container} >
      
      <TextInput value={input} onChangeText={(text) => setinput(text)}
      style={styles.Search} placeholder='Search' clearButtonMode='always'/>
      
      <SearchFilter data={data} input={input} setinput={setinput} />
      
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderCards()}
      </ScrollView>
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'linergb(220, 227, 188)n',
    // justifyContent: 'center',
    // alignItems: 'center' , 
    paddingTop: 50
  },
  Search: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 8
  },

})



export default MainScreen;