import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import {getAsyncData} from '../../config/asyncStorage/async'

const SplashScreen = ({navigation}) => {
    setTimeout(() =>{
        // navigation.replace('SignIn');
        checkUser();
    }, 1000);

    const checkUser = async () => {
        const value = await getAsyncData('user');

        if(value){
            navigation.replace('SideNav');
        }
        else{
            navigation.replace('IntroPage');
        }
    }

  return (  
    <ImageBackground 
        source={require('../../assets/splash.jpeg')}
        style = {styles.image}
        resizeMode = {"cover"}
        >
            <Text style = {styles.text}> 
                Welcome To My App
            </Text>
    </ImageBackground>

  )
}
const styles = StyleSheet.create({
    image : {
        flex : 1,
        padding : 15    
    },
    text : {
        // flex : 1,
        fontWeight : "bold",
        fontSize : 25,
        color : "black",
        // justifyContent : "center",
        // alignItems : "center",
        textAlign : "center" 
    }
    
})
export default SplashScreen