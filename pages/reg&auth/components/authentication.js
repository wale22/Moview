import { View, Text, ImageBackground,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Logo from '../../logo'
import { TextInput } from 'react-native'
import { styles } from './regAuthstyles'
import { useDispatch } from 'react-redux'
import { switchs } from '../../../state/reducers/regAuthReducer'
import {FontAwesome5} from '@expo/vector-icons'
import KeyboardWrapper from './keyboardWrapper'


export default function Log() {
  const inputFields=[
    { name:'Email', placeholder:'input your Email'  },
    { name:'Password', placeholder:'input  password '  }

  ]
  const dispatch=useDispatch()

  return (
    <ImageBackground
        source={
            require('./background.jpg')
        }
        style={{height:'100%'}}

    >

      <View style={{marginTop:'18%'}}>
        <TouchableOpacity onPress={()=>dispatch(switchs('reg'))}>
          <FontAwesome5 name='arrow-left' size={40} color={'white'} style={{marginLeft:'5%'}}/>
        </TouchableOpacity>

        <View>
          <Logo/>
        </View>

        <KeyboardWrapper>
          
        <View style={styles.form}>
          {
            inputFields.map((field)=>(
              <View style={styles.fieldg}>
                <Text style={styles.title}>{field.name}</Text>
                {(inputFields.indexOf(field)+1) === inputFields.length?
                    <TextInput
                    placeholder={field.placeholder}
                    secureTextEntry={true}
                    style={styles.field}
                    />:
                    <TextInput
                    placeholder={field.placeholder}
                    style={styles.field}
                  />
                    
                }


                
              </View>
            
            ))
          }

          <View style={styles.foot}>
            <TouchableOpacity  style={styles.btn}>
              <Text style={{color:'white', fontSize:20}}>Login</Text>
            </TouchableOpacity>
          </View>
       
        </View>
        </KeyboardWrapper>
     
      </View>
    </ImageBackground>
    
     
  )
}


