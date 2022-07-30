import { View, Text,Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web'

export default function Uploadimg() {
  return (
    <View
    style={
        {height:'100%', backgroundColor:'#d3dadb', alignItems:'center',justifyContent:'center'}
    }
    >
        <TouchableOpacity style={{padding:'2rem', backgroundColor:'white' ,borderRadius:'100%',
         shadowColor: "#000",
         shadowOffset:{
           width: 0,
           height: 3,
         },
         shadowOpacity: 0.36,
         shadowRadius: 6.68,
     
         elevation: 11,}}>

            <Image source={
                {
                    uri:require('./photo-camera.png')
                }
                
                }

                style={{
                    width:'6rem',
                    height:'6rem'
                }}
            />

        </TouchableOpacity>


        <TouchableOpacity style={{
            backgroundColor:'white',marginTop:'4rem', paddingHorizontal:'4rem',
             borderRadius:'1rem' ,paddingVertical:'1rem',
             shadowColor: "#000",
             shadowOffset:{
               width: 0,
               height: 3,
             },
             shadowOpacity: 0.36,
             shadowRadius: 6.68,
         
             elevation: 11,}}>
            <Text style={{fontSize:'2rem'}}>skip</Text>
        </TouchableOpacity>
    </View>
  )
}