import { Text, View, TextInput,TouchableOpacity} from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { styles } from './regAuthstyles'
import { Formik } from 'formik'
import * as yup from 'yup'
import { update } from '../../../state/reducers/user_reducer'



const userSchema= yup.object({
  name:yup.string().min(4).required(),
  email:yup.string().required().email(),
  password:yup.string().min(7).required()
})


export default function  Formikreg ({nav}) {
  const dispatch=useDispatch()
  const dis=(values)=>{
    nav.navigate('regLoad')
    dispatch(update(values))
  }

  return (
    <View>
    <Formik
      initialValues={{name:'',email:'',password:''}}
      onSubmit={(values)=>{
        dis(values)
      }}
      validationSchema={userSchema}

      >
        {(props)=>(
          <View>
            <Text style={styles.title}>Username</Text>
          <TextInput
          placeholder={'wale23'}
          style={styles.field}
          onChangeText={props.handleChange('name')}
          value={props.values.name}
          onBlur={props.handleBlur('name')}
          />
          <Text style={styles.errorText}>{props.touched.name && props.errors.name}</Text>

              
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
              <Text style={{fontSize:15, color:'grey'}}>Already have an acount ? </Text>
              <TouchableOpacity onPress={()=>nav.push('log')}>
                <Text style={{color:'#1851b4', fontSize:15, }}>Login</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={props.handleSubmit} style={styles.btn}>
              <Text style={{color:'white', fontSize:18}}>Sign up</Text>
            </TouchableOpacity>
          </View>
          </View>
          
      

        

        )}
        
      </Formik>
    </View>
  )
}