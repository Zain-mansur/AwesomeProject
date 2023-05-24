import react from "react"; //always do import//
import { ImageBackground, StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { Component } from 'react';
import Card from './Src/Components/Card';
const App = () => { //function component//

  const data = [
    {
      name: 'zain',
      bd: '24/8', 
      bgc1: 'violet',
      bgc2:'purple',
    },
    {
      name: 'Riam',
      bd: '22/6',
      bgc2: 'cyan',
      bgc1:'lightblue'
    },
    {
      name: 'Wisam',
      bd: '20/11',
      bgc2: 'yellow',
      bgc1: 'rgb(255, 204, 0)'
    },
    {
      name: 'Aram',
      bd: '15/7',
      bgc1: 'rgb(126, 108, 206)',
      bgc2: 'lightblue',
    } , 
    {
      name:'Hadeel' , 
      bd:'23/6',
      bgc1: 'rgb(168, 38, 83)',
      bgc2: 'pink' 
    }, 
    {
      name:'Arnold' , 
      bd:'19/2' ,
      bgc1: 'darkgrey',
      bgc2: 'black'
    },
    {
      name: 'Mama',
      bd:'15/2',
      bgc2: 'rgba(182, 42, 237, 0.32)', 
      bgc1: 'redrgb(235, 76, 76)',
    }
  ]

  const renderCards = ()=> {
    return data.map(cardData => {
      return <Card name={cardData.name} bd={cardData.bd} bgc2={cardData.bgc2} bgc1={cardData.bgc1} />
    })
  }

  return (
    <View style={styles.container} >
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

})


export default App; 