import { View, Text, StyleSheet, ImageBackground,Image } from 'react-native'
import React from 'react'

const ShopScreen = () => {
  return (
    <View style={styles.container}
       
    >
      <ImageBackground style = {styles.topsection}
       source={require('../../assets/shopScreen.jpg')}
       resizeMode={'cover'}
      >
            <View style = {styles.bluecard} >
            <Image 
            source={require('../../assets/userImage.jpg')}
            resizeMode={'cover'}
            style = {{
                height : 80,
                width : 80,
                borderRadius : 40
            }}
            />
            
        
            
            </View> 
      </ImageBackground>
      <View style = {styles.bottomsection} >
            <Text>
                Wallet
            </Text>
            <Text>
                count
            </Text>
        </View> 
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    topsection : {
        flex : 0.3,
        backgroundColor : 'green',
        justifyContent : 'center',
        alignItems : 'center',
        width : "100%"
    },
    bluecard : {
        height : 70,
        width : 70,
        borderRadius : 35,
        // backgroundColor : 'blue',
        position : 'absolute',
        bottom : -25,
       
    },
    bottomsection : {
        flex : 0.7,
        flexDirection : 'row',
        backgroundColor : "#dcd8d5",
        zIndex : -1
    }

})

export default ShopScreen