<script src="http://172.16.10.168:8097"></script>
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./src/screens/splash";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntroPage from "./src/screens/Intro/intro";
import SignUp from "./src/screens/signup/SignUp";
import Login from "./src/screens/login/login";
import Toast from "react-native-toast-message";
import SideNav from "./src/screens/SideNavigation/sideNav";
import Onboard from "./src/screens/Onboarding/Onboard";
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen 
          name = {"splash"}
          component = {SplashScreen}
          options={{headerShown : false}}
        />
        <Stack.Screen 
          name = {"Onboard"}
          component = {Onboard}
          options={{headerShown : false}}
        />
        <Stack.Screen 
          name = {"IntroPage"}
          component = {IntroPage}
          options={{headerShown : false}}
        />
         <Stack.Screen 
          name = {"SignupScreen"}
          component = {SignUp}
          options={{headerShown : false}}
        />
        <Stack.Screen 
          name = {"LoginScreen"}
          component = {Login}
          options={{headerShown : false}}
        />
        {/* <Stack.Screen 
          name = {"HomeScreen"}
          component = {Home}
          options={{headerShown : false}}
        /> */}
        <Stack.Screen 
          name = {"SideNav"}
          component = {SideNav}
          options={{headerShown : false}}
        />
      </Stack.Navigator>
      <Toast  />
    </NavigationContainer>
  )
}

// const styles = StyleSheet.create({
  
// })
export default App;