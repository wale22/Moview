import { Text, View, StyleSheet,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function homepage() {
        return (
        <View style={styles.container}>
            <View style={styles.nav}>
                
                <TouchableOpacity style={styles.profile}>
                    <Icon color='#7a7c7f' name='user' size={50} style={{alignSelf:'center'}}/>
                </TouchableOpacity>

                <View>
                    <TouchableOpacity style={styles.tab}>
                        <Text style={{color:'#6c6d6d'}}>Search History</Text>
                        <Icon name='history' color="#6c6d6d" size={15}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.tab}>
                        <Text style={{color:'#6c6d6d'}}>Stories</Text>
                        <Icon name='box' color="#6c6d6d" size={15}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.tab}>
                        <Text style={{color:'#6c6d6d'}}>Recomendation</Text>
                        <Icon name='heart' color="#6c6d6d" size={15}/>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.display}>
                
            </View>
        </View>
        )

}

const styles=StyleSheet.create({
    container:{
        height:'100vh',
        flex:'1',
        flexDirection:'row',
    },


    nav:{
        flex:'2',
        height:'100%',
        shadowColor: "#000",
        shadowOffset:{
        width: 3 ,
        height: 5,
        },
        shadowOpacity: 0.24,
        shadowRadius: 6.27,
        elevation: 10, 
        paddingTop:'2rem',
        backgroundColor:'#dfe1e2'
    },

    display:{
        flex:'3',
        height:'100%',
    },

    profile:{
        width:'70%',
        height:'15%',
        borderRadius:'100%',
        alignSelf:'center',
        shadowColor: '#470000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.2,
        elevation: 1,
        backgroundColor:'white',
        justifyContent:'center'
        
    },


    tab:{
        marginHorizontal:'5%',
        borderRadius:'1rem',
        shadowColor: "#000",
        shadowOffset:{
        width: 0,
        height: 4,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10, 
        paddingVertical:'0.4rem',
        backgroundColor:'white',
        alignItems:'center',
        marginTop:'35%'
    }
})