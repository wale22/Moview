import { View, Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { addUser ,checkUser} from '../firebase'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { doc, getDoc } from 'firebase/firestore'
import {app,db,usrRef} from '../firebase'








export default function Registering_loader({navigation}) {
    const user= useSelector((state)=>state.regAuth.value)
    const [alert,setAlert]=useState('')

  
    
    useEffect(()=>{
        function register(user){
            const res = addUser(user)

            Alert.alert('error','response is : '+res)
        } 
        

        const data=doc(db,'Users',user.email)
    
        getDoc(data).then((response)=>{
            if (response.exists()){
                Alert.alert(
                    'Error',
                    'A user has been registered with the email account !!',
                    [{
                        text:'Retry',
                        onPress:navigation.navigate('reg')

                    }]
                )
            }
            else{
                register(user)
            }
        }
        ).catch((err)=>{
            return 'err'
        })
          
            
           
      
      
    })

    return (
        <View style={{height:'100%', justifyContent:'center', alignItems:'center', backgroundColor:'white'}}>
            <Image source={require('./loading.gif')}
                style={{
                    height:'20%',
                    width:'60%'
                }}
            />
        </View>

    )
}


