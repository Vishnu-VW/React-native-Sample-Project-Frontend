import { View, Text,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import {
    DrawerContentScrollView,
    DrawerItemList,
  } from '@react-navigation/drawer';
import { Directions } from 'react-native-gesture-handler';
import { getAsyncData } from '../../config/asyncStorage/async';
import Entypo from 'react-native-vector-icons/Entypo';
  
const CustomDrawerContent = (props) => {
    const [user, setUser] = useState("");

    useEffect(() => {
        getuser();
    },[])

    const getuser = async () => {
        try{
            const value = await getAsyncData('user');
            console.log(value)
            let jvalue = JSON.parse(value);
            if(jvalue){
                setUser(jvalue);              
            }
        }
        catch(e){
            return e;
        }   
    }

  return (
    <View style= {{flex : 1, backgroundColor : "#fcd62b"}}>
        <View style = {{
            padding : 15,
            flexDirection : 'row',
            alignItems : 'center'
        }}>
            <View style = {{
                marginBottom : 10,
                marginRight : 10,
                alignItems : 'center',
                justifyContent : "center",
                height : 70,
                width : 70,
                backgroundColor : 'white',
                borderRadius : 35
            }}>
                <Image source = {require('../../assets/user.png')} style = {{
                    height : 40,
                    width : 40
                }}/>
            </View>
            <View>
                <Text style = {{fontSize : 15, fontWeight : 'bold'}}>{user !== undefined ? user.fullname : ""}</Text>
                <Text style = {{fontSize : 15, fontWeight : 'bold'}}>{user !== undefined ? user.email : ""}</Text>
            </View>    
            <View>
                <Entypo name='arrow-with-circle-left' size={25} color="#000"/>
            </View>     
        </View>
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    </View>
  )
}

export default CustomDrawerContent;


