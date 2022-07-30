import { Text, View ,StyleSheet,Image,ImageBackground, TouchableOpacity} from "react-native"
import React from "react"
import Logo from "../logo"
import { styles } from "./component/reception_style"



export default function Reception ({navigation}) {
    const url1='./component/background.jpg'
    const url2="./component/bgRemoved.png"
    return (
   
        <View >
            <ImageBackground  source={require(url1)} style={styles.Imgbg}>
            <View 
            style={styles.cont}>
                <View>
                    <Logo/>
                    <Text style={styles.convince}>join others to express the way you feel about the movies you watch</Text>
                </View>
            

               <Image source={require((url2))} style={styles.img} />
                

                <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate('regAuth')}>
    
                    <Text style={{color:"#1659cd", fontSize:20, textAlign:'center'}} >
                    GET STARTED
                    </Text>
                    
                </TouchableOpacity>
                
            </View>

            </ImageBackground>

        </View>


    )
}


