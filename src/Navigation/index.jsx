import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from 'C:/Users/GWTC/Desktop/SaludMovil/src/screens/SignIn/LogIn';
import SignUp from 'C:/Users/GWTC/Desktop/SaludMovil/src/screens/SignUp/SignUp';
import ConfirmEmail from '../screens/ConfirmEmail';
import ForgotPassword from '../screens/ForgotPassword';
import NewPassword from '../screens/NewPassword';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const Stack = createNativeStackNavigator();


const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name= "SignIn" component= {LogIn} />
        <Stack.Screen name= "SignUp" component= {SignUp} />
        <Stack.Screen name= "ConfirmEmail" component= {ConfirmEmail} />
        <Stack.Screen name= "ForgotPassword" component= {ForgotPassword} />
        <Stack.Screen name= "NewPassword" component= {NewPassword} />
        <Stack.Screen name= "HomeScreen" component= {HomeScreen} />
      </Stack.Navigator> 
    </NavigationContainer>
  );
};




export default Navigation

//  npx expo install react-native-screens@3.22.0
// npx expo install react-native-safe-area-context@4.6.3
// npm install @react-navigation/native-stack
// npm install react-native-screens react-native-safe-area-context
// npm install @react-navigation/native
// npx expo install react-native@0.72.5