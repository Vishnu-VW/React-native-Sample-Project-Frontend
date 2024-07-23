import { View, Text, StatusBar, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import InputFieldComp from '../../components/InputFieldComp'
import RoundButtonComp from '../../components/RoundButtonComp'
import { LOGIN, axiosClient } from '../../config/api/api'
import {storeAsyncData} from '../../config/asyncStorage/async'
import Toast from 'react-native-toast-message'

const Login = ({navigation}) => {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [meassage, setMessage] = useState("");
    // useEffect(() =>{
    //     console.log(message);
    // },[])


    const handleLogin = async () => {
        if(!email || !password){
            Toast.show({
                type : 'error',
                text1 : 'Validation error',
                text2 : 'All fields are required'
            });
            // Alert.alert("All fields are required");
            return;
        }
        try{
            const response = await axiosClient.post(LOGIN, {
                email,
                password
            });
            Toast.show({
                type : 'success',
                text1 : 'success',
                text2 : response.data
            });
            Alert.alert("Login Successful");
            // setMessage(response.data);
            // console.log(JSON.stringify(response.data));
            await storeAsyncData("user",JSON.stringify(response.data));
            navigation.replace('Onboard');
        }
        catch(err){
            console.log("err",err)
            Alert.alert("Login error", err.response ? err.response.data : "Login error");
        }

    }

  return (   
    <View style = {{
      backgroundColor : 'white',
      flex : 1,
      padding : 20
      }}>
      <StatusBar backgroundColor={'white'}/>
      <Text style = {{
        fontWeight : 'bold',
        fontSize : 30,
        color : 'black'
      }}>
        Login
      </Text>
      <Text style = {{
        paddingTop : 10
      }}>
        login here
      </Text>
      <View style = {{
        flex : 1,
        justifyContent : 'center',

         }}>
        <InputFieldComp 
          placeholder={"Email"}
          keyboardType = {'email-address'}
          onChangeText={text => setEmail(text)}
        />
        <InputFieldComp 
          placeholder={"Password"}
          secureTextEntry = {true}
          onChangeText={text => setPassword(text)}
        />
        <RoundButtonComp 
            label = {'Login'} 
            isvalue = {true} 
            width={'100%'} 
            marginLeft = {'0'} 
            marginTop={'30'}
            onPress={handleLogin}
        />
      </View>
      
    </View>
  )
}

export default Login;