import { View, Text, StatusBar, Alert } from 'react-native'
import React, {useState} from 'react'
import InputFieldComp from '../../components/InputFieldComp'
import RoundButtonComp from '../../components/RoundButtonComp'
import { axiosClient, SIGN_UP } from '../../config/api/api'

const SignUp = ({navigation}) => {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message , setMessage] = useState('');

  const handleSignUp = async () =>{
    console.log(fullname);
    if (!fullname || !email || !password || !confirmPassword){
      Alert.alert('All fields are required');
      return;
    }

    if (password !== confirmPassword){
      Alert.alert('Passwords do not match');
      return;
    }

    try{
      const response = await axiosClient.post(SIGN_UP, {
          fullname,
          email,
          password,
          confirmPassword
      });
      console.log(response)
      Alert.alert('Success',response.data);
      navigation.navigate('LoginScreen');
    }
    catch(err){
      console.log("Sign Up error",err)
      Alert.alert('Sign Up error', err.response ? err.response.data : 'An error occured');
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
        SignUp
      </Text>
      <Text style = {{
        paddingTop : 10
      }}>
        SignUp here
      </Text>
      <View style = {{
        flex : 1,
        justifyContent : 'center',

         }}>
        <InputFieldComp 
          placeholder={"Full name"}
          value = {fullname}
          onChangeText = {text => setFullname(text)}
        />
        <InputFieldComp 
          placeholder={"Email"}
          value = {email}
          keyboardType = {'email-address'}
          onChangeText = {text => setEmail(text)}
        />
        <InputFieldComp 
          placeholder={"Password"}
          value = {password}
          secureTextEntry = {true}
          onChangeText = {text => setPassword(text)}
        />
        <InputFieldComp 
          placeholder={"Confirm Password"}
          value = {confirmPassword}
          secureTextEntry = {true}
          onChangeText = {text => setConfirmPassword(text)}
        />
        <RoundButtonComp 
          label = {'Signup'} 
          isvalue = {true} 
          width={'100%'} 
          marginLeft = {'0'} 
          marginTop={'30'} 
          onPress = {handleSignUp}/>
      </View>
      
    </View>
  )
}

export default SignUp;