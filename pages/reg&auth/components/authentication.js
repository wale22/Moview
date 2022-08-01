import { Text, View, TextInput,TouchableOpacity, Alert} from 'react-native'
import React from 'react'
import { styles } from './regAuthstyles'
import { Formik } from 'formik'
import * as yup from 'yup'
import { update } from '../../../state/reducers/user_reducer'
import KeyboardWrapper from './keyboardWrapper'
import Logo from '../../logo'
import {FontAwesome5} from '@expo/vector-icons'
import { authUser , db, usrRef} from '../../firebase'
import { getDoc,query,where ,doc} from 'firebase/firestore' 


const userSchema= yup.object({
  email:yup.string().required().email(),
  password:yup.string().min(7).required()
})


export default function Login ({nav}) {
  const dis=(user)=>{
    const auth=authUser(user)

    const data =doc(db, "Users", user.email)

    getDoc(data).then((response)=>{
      if(response.exists()){
        if(response.data().Password === user.password){
          Alert.alert('Success' , 'user has been logged in' )
        }else{
          Alert.alert('Falied' , 'user is unable to log in'+ response.data().Password )

        }
  
  
      }else{
        Alert.alert('Falied' , 'user is unable to log in')
      }
  
     
    }).catch((err)=>{
      Alert.alert('Falied' , err)

    })
    
  

  }

  return (
    <KeyboardWrapper style={{height:'100%', backgroundColor:'white', }}>
        <FontAwesome5 name='arrow-left' color={'blue'} size={30} style={{marginTop:'12%',marginLeft:'10%' }}/>
        <View  style={{marginHorizontal:'10%'}}>   

        <View style={{marginTop:'10%' , marginBottom:'10%'}}>
          <Logo textColor={'blue'} logoColor={'blue'} textSize={30}  logoSize={30}/>
        </View>

        <View>
        <Formik
          initialValues={{email:'',password:''}}
          onSubmit={(values)=>{

            dis(values)
          }}
          validationSchema={userSchema}

          >
            {(props)=>(
              <View>
              
                  
              <Text style={styles.title}>Email</Text>
              <TextInput
              placeholder={'wale02@example.com'}
              style={styles.field}
              onChangeText={props.handleChange('email')}
              value={props.values.email}
              onBlur={props.handleBlur('email')}

              />
              <Text style={styles.errorText}>{props.touched.email && props.errors.email }</Text>



              <Text style={styles.title}>Password</Text>
              <TextInput
              placeholder={'input your password'}
              style={styles.field}
              onChangeText={props.handleChange('password')}
              secureTextEntry={true}
              value={props.values.password}
              onBlur={props.handleBlur('password')}

              />
              <Text style={styles.errorText}>{props.touched.password && props.errors.password}</Text>




              <View style={{alignItems:'center'}}>
                <View style={{flexDirection:'row',  }}>
                  <TouchableOpacity onPress={()=>nav.push('log')}>
                    <Text style={{color:'#1851b4', fontSize:15, }}>forgotten password?</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={props.handleSubmit} style={styles.btn}>
                  <Text style={{color:'white', fontSize:18}}>Login</Text>
                </TouchableOpacity>
              </View>
              </View>
              
          

            

            )}
            
          </Formik>
        </View>


        </View>

    </KeyboardWrapper>
    
  )
}