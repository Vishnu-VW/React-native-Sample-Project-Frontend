import { View, Text, FlatList } from 'react-native'
import React from 'react'

const FlatListScreen = () => {
    const data1 = [1,2,3,4,5,6]
  return (
    <View>
        <FlatList 
            data = {data1}
            renderItem={({item}) => <Shop title = {item}/>}   
            keyExtractor={(item,index) => index.toString()}
        />
    </View>
  )
}



const Shop = ({title}) => {
    return(
        <View
            style = {{
                padding : 20,
                elevation : 8,
                backgroundColor : '#f7f5ed',
                alignItems : 'center',
                margin : 20
            }}

        >
            <Text>
                {title}
            </Text>

        </View>
    )
}



export default FlatListScreen