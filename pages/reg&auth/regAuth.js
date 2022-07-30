import { View, Text, ImageBackground,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Reg from './components/registration'
import Log from './components/authentication'
import { useSelector } from 'react-redux'

export default function RegAuth() {
  const status=useSelector((state)=> state.regAuth.value)

  return (
    <View>

      {status==='reg'?
        <Reg/>
        :<Log/>
      }
      
      
    </View>
   
  )
}



