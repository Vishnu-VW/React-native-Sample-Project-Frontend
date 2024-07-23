import { View, Text, TextInput } from 'react-native'
import React from 'react'

const InputFieldComp = ({
    placeholder,
    keyboardType = 'default',
    secureTextEntry = false,
    onChangeText
}) => {
  return (
    <View style = {{
        backgroundColor : 'E4D7D4',
        borderWidth : 2,
        borderRadius : 30,
        marginBottom : 15,
        paddingHorizontal : 20
    }}>
      <TextInput 
        placeholder= {placeholder}
        keyboardType={keyboardType}
        secureTextEntry = {secureTextEntry}
        onChangeText={text => onChangeText(text)}
      />

    </View>
  )
}

export default InputFieldComp