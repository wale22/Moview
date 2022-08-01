import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Reception from './pages/reception/reception';
import * as font from "expo-font";
import { useState } from 'react';
import AppLoading  from 'expo-app-loading';
import store from './state/store';
import { Provider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import Log from './pages/reg&auth/components/authentication';
import Reg from './pages/reg&auth/components/registration';
import Registering_loader from './pages/Loaders/registering_loader';


const getFonts=()=>font.loadAsync({'courgette':require('./assets/fonts/Courgette-Regular.ttf')})

const stack= createStackNavigator()


export default function App() { 
  const [fontLoaded, setFontLoaded]=useState(false)
 

  if (fontLoaded) {
    return(
      <Provider store={store}>
        <NavigationContainer >
          <stack.Navigator screenOptions={{headerShown:false}} >
            <stack.Screen name='reception' component={Reception} />
            <stack.Screen name='reg' component={Reg}/>
            <stack.Screen name='log' component={Log}/>
            <stack.Screen name='regLoad' component={Registering_loader}/>
          </stack.Navigator>
        </NavigationContainer>
      </Provider>
     
     

    );
  } else {
    return(
      <AppLoading
      startAsync={getFonts}
      onFinish={()=>setFontLoaded(true)}
      onError={console.warn}
      />
    );
    
  }

}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
