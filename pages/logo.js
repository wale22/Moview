import { View, Text ,Image, StyleSheet} from 'react-native'
import React from 'react'
import {FontAwesome5} from '@expo/vector-icons'



export default function Logo(props) {
  const img ='./reception/component/video.png'
  return (
    <View style={styles.logoCont}>
      <Text style={
        {fontSize:props.textSize,color:props.textColor, fontFamily:'courgette'
    }
      }>Morview</Text>
      <FontAwesome5 name='video' color={props.logoColor} size={props.logoSize} style={{margin:3}}/>
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