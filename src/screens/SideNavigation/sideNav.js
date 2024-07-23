import { View, Text } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../home/home';
import ShopList from '../AppScreens/ShopList';
import CustomDrawerContent from './customDrawerContent';
import GoogleMaps from '../AppScreens/GoogleMaps';
import DatePickerComp from '../AppScreens/DatePicker';
import ShopScreen from '../AppScreens/ShopScreen';

const Drawer = createDrawerNavigator();
const SideNav = () => {
  return (
   <Drawer.Navigator initialRouteName='Home'
    drawerContent={props => <CustomDrawerContent {...props} />}
    screenOptions= {{
        drawerActiveTintColor : 'black',
        drawerActiveBackgroundColor : 'white',
        drawerInactiveTintColor : 'white'
    }}
   >
    <Drawer.Screen 
     name = "Home"
     component={Home} 
     options={{
        headerStyle : {backgroundColor : '#fcd62b'},
        headerTintColor : '#000000'
     }}
   t />
    <Drawer.Screen 
     name = "ShopList"
     component={ShopList} 
     options={ {
      headerStyle : {backgroundColor : '#fcd62b'},
      headerTinColor : '#000000'
   }}
    />
    <Drawer.Screen 
     name = "GoogleMaps"
     component={GoogleMaps} 
     options={ {
      headerStyle : {backgroundColor : '#fcd62b'},
      headerTintColor : '#000000'
   }}
    />
     <Drawer.Screen 
     name = "DatePickerComp"
     component={DatePickerComp} 
     options={ {
      headerStyle : {backgroundColor : '#fcd62b'},
      headerTintColor : '#000000'
   }}
    />
     <Drawer.Screen 
     name = "ShopScreen"
     component={ShopScreen} 
     options={ {
      headerStyle : {backgroundColor : '#fcd62b'},
      headerTintColor : '#000000'
   }}
    />
   </Drawer.Navigator>

    
  )
}

export default SideNav;