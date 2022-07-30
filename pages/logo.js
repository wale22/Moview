import { View, Text ,Image, StyleSheet} from 'react-native'
import React from 'react'
import {FontAwesome5} from '@expo/vector-icons'



export default function Logo() {
  const img ='./reception/component/video.png'
  return (
    <View style={styles.logoCont}>
      <Text style={
        {fontSize:30,color:'white', fontFamily:'courgette'
    }
      }>Morview</Text>
      <FontAwesome5 name='video' color={'white'} size={30} style={{margin:3}}/>
    </View>
  
  )
}



const styles=StyleSheet.create({
  logo:{
    fontSize:30,
    color:'white',
},


logoCont:{
    fontSize:14,
    color:'white',
    flexDirection:'row',
    justifyContent:'center',
},
})