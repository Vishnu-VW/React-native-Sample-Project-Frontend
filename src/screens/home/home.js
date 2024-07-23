import { View, Text,StatusBar, TouchableOpacity,Image } from 'react-native';
import React, { useEffect, useState } from 'react';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import * as ImagePicker from 'react-native-image-picker';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const Home = () => {
  console.log("i am in home")
  const [image, setImage] = useState(null);
  useEffect(()=>{
    console.log("Hello all ")
  },[])

    const uploadimage = async () => {
      try{
          const result = await ImagePicker.launchImageLibrary({
            mediaType: 'photo',
            storageOptions : {
              path : 'images',
            },
          });
          if(result.didCancel == true){
            console.log("user cancelled image picker");
            return;
          }
          if(result.errorMessage){
            console.log("image picker error",result.errorMessage);
            return;
          }
          setImage(result.assets[0].uri)
          console.log(result);
      }
      catch(e){
        console.log("error in image picking", e);
      }
}

  return (
   <View style = {{
    
   }}>
      <StatusBar backgroundColor={'#fcd62b'} ></StatusBar>
      <TouchableOpacity onPress={uploadimage}>
      <View style={{
        // borderBottomColor : 'black',
        borderWidth : 2,
        borderRadius : 30,
        margin : 10,
        paddingHorizontal : 25,
        flexDirection  : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        height : 45
        }}>
        <Text >upload Image</Text>
        
        <View style= {{
          flexDirection : 'row',
          
          alignItems : 'center'
        }}>
          {image ? 
            (<AntDesign name='checkcircle' size={25} color='green'/>)
           : null}
          <FontAwesome name = 'file-image-o' size={20} color='#000' style = {{marginLeft : 10}}/>
          
          
        </View>
       
        </View>
      </TouchableOpacity>
          <View style = {{
            justifyContent : 'center',
            alignItems : 'center'
          }}>
      {
        image && <Image source={{uri : image}} style={{height : 300, width : 300, marginTop : 20}}/> 
      } 
    </View>
   </View>
    
  )
}

export default Home;