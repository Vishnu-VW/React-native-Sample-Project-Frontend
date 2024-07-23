import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const RoundButtonComp = ({label, isvalue = false, onPress, width = 120,marginLeft = 15, marginTop = 0}) => {
  return (
    <TouchableOpacity onPress={() => onPress()} activeOpacity= {0.8}>
        <View style = {{
            backgroundColor : isvalue ? 'blue' : "white",
            padding : 10,
            borderRadius : 20,
            width : width,
            marginLeft : marginLeft,
            borderColor : "black",
            borderWidth : isvalue ? 0 : 1 ,
            cursor : 'pointer',
            marginTop : marginTop
            }}>
            <Text style = {{
                textAlign : 'center',
                color : isvalue ? 'white' : 'black',
                fontSize : 15,
                fontWeight : 'bold'
            }}>
                {label}
            </Text>
        </View>
    </TouchableOpacity>
    
  )
}

export default RoundButtonComp