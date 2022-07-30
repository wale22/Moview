import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import Logo from '../../logo'
import { TextInput } from 'react-native'
import { styles } from './regAuthstyles'
import { useDispatch } from 'react-redux'
import { switchs } from '../../../state/reducers/regAuthReducer'
import KeyboardWrapper from './keyboardWrapper'



export default function Reg() {
  const inputFields=[
    { name:'Name', placeholder:'input your name'  },
    { name:'Email', placeholder:'input your Email'  },
    { name:'Password', placeholder:'input password '  }

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

          <View style={{alignItems:'center'}}>
            <View style={{flexDirection:'row',  }}>
              <Text style={{fontSize:15, color:'grey'}}>Already have an acount ? </Text>
              <TouchableOpacity 
                onPress={()=>dispatch(switchs('auth'))}
              >
                <Text style={{color:'#1851b4', fontSize:15, }}>Login</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity  style={styles.btn}>
              <Text style={{color:'white', fontSize:18}}>Sign up</Text>
            </TouchableOpacity>
          </View>
      
        </View>
        </KeyboardWrapper>
        
      </View>
    </ImageBackground>
  )
}




