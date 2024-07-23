import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'

const FullRoundButtonComp = ({image}) => {
  return (
    <TouchableOpacity>
        <View style = {{
        marginLeft : 15
        }}>
            <Image source = {image} />
        </View>

    </TouchableOpacity>
    
  )
}

export default FullRoundButtonComp;