import { View, Text, ImageBackground, TouchableOpacity , TextInput} from 'react-native'
import React, { useState } from 'react'
import Logo from '../../logo'
import { styles } from './regAuthstyles'
import { useDispatch } from 'react-redux'
import KeyboardWrapper from './keyboardWrapper'
import { addUser } from '../../firebase'
import Formikreg from './formikreg'


export default function Reg({navigation}) {
  return (

    <View style={{height:'100%', backgroundColor:'white'}}>

    
      <View style={{marginTop:'20%'}}>
        <Logo textColor={'blue'} logoColor={'blue'} textSize={30}  logoSize={30}/>
      </View>

      <KeyboardWrapper>
      <View style={styles.form}>
      
        <View style={styles.fieldg}>
          <Formikreg nav={navigation}/>
          
        </View>
          
          

      </View>
      </KeyboardWrapper>
      
    </View>
  
  )
}




